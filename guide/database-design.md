# 数据库设计

## 概述

SimpleShare 使用 Cloudflare D1 分布式数据库存储文件元数据和系统信息。数据库设计严格遵循第三范式（3NF），消除数据冗余。

## 核心表结构

### 用户表 (users)

```sql
CREATE TABLE users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE,
    password_hash TEXT,
    role TEXT NOT NULL DEFAULT 'user',
    status TEXT DEFAULT 'active',
    storage_quota REAL DEFAULT 0.0,
    storage_used REAL DEFAULT 0.0,
    group_id TEXT,
    created_at INTEGER NOT NULL DEFAULT (unixepoch()),
    updated_at INTEGER NOT NULL DEFAULT (unixepoch()),
    FOREIGN KEY (group_id) REFERENCES user_groups(id)
);
```

**字段说明：**
- `id`: 用户唯一标识（UUID）
- `role`: 用户角色（user/admin）
- `storage_quota`: 存储配额（GB）
- `storage_used`: 已使用存储（GB）
- `group_id`: 所属用户组

### 文件表 (files)

```sql
CREATE TABLE files (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    size_bytes INTEGER NOT NULL,
    storage_key TEXT NOT NULL,
    storage_backend_id TEXT,
    user_id TEXT NOT NULL,
    parent_id INTEGER,
    path TEXT NOT NULL,
    type TEXT NOT NULL,
    starred INTEGER DEFAULT 0,
    status TEXT DEFAULT '正常',
    created_at INTEGER NOT NULL DEFAULT (unixepoch()),
    updated_at INTEGER NOT NULL DEFAULT (unixepoch()),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (parent_id) REFERENCES files(id),
    FOREIGN KEY (storage_backend_id) REFERENCES storage_backends(id)
);
```

**字段说明：**
- `storage_key`: 文件在存储后端的唯一标识
- `parent_id`: 父文件夹 ID（支持无限级嵌套）
- `type`: 文件类型（file/folder）
- `status`: 文件状态（正常/违规）

### 分享表 (shares)

```sql
CREATE TABLE shares (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    file_id INTEGER NOT NULL,
    user_id TEXT NOT NULL,
    share_code TEXT UNIQUE NOT NULL,
    expires_at INTEGER,
    access_count INTEGER DEFAULT 0,
    max_access INTEGER,
    created_at INTEGER NOT NULL DEFAULT (unixepoch()),
    FOREIGN KEY (file_id) REFERENCES files(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

**字段说明：**
- `share_code`: 6 位随机提取码
- `expires_at`: 过期时间戳
- `max_access`: 最大访问次数

### 存储后端表 (storage_backends)

```sql
CREATE TABLE storage_backends (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    enabled INTEGER DEFAULT 1,
    is_default INTEGER DEFAULT 0,
    config_json TEXT,
    created_at INTEGER NOT NULL DEFAULT (unixepoch())
);
```

**字段说明：**
- `type`: 存储类型（r2/s3/webdav）
- `config_json`: 存储配置（JSON 格式）

### 用户组表 (user_groups)

```sql
CREATE TABLE user_groups (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    storage_quota REAL DEFAULT 0.0,
    max_users INTEGER,
    current_users INTEGER DEFAULT 0,
    created_at INTEGER NOT NULL DEFAULT (unixepoch())
);
```

### 系统日志表 (system_logs)

```sql
CREATE TABLE system_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    action TEXT NOT NULL,
    user_id TEXT,
    user_name TEXT,
    status TEXT NOT NULL,
    details TEXT,
    ip TEXT,
    file_id INTEGER,
    file_name TEXT,
    created_at INTEGER NOT NULL DEFAULT (unixepoch()),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## 关系设计

### 实体关系图

```
UserGroups (1) ──< (N) Users
Users (1) ──< (N) Files
Files (1) ──< (N) Files (自关联，文件夹嵌套)
Files (1) ──< (N) Shares
StorageBackends (1) ──< (N) Files
Users (1) ──< (N) SystemLogs
```

### 多对多关系

- **用户组 ↔ 存储后端**: 通过 `group_storage_allocations` 表实现
- **用户 ↔ 私有存储后端**: 通过 `user_storage_backends` 表实现

## 索引设计

为了提高查询性能，建议创建以下索引：

```sql
CREATE INDEX idx_files_user_id ON files(user_id);
CREATE INDEX idx_files_parent_id ON files(parent_id);
CREATE INDEX idx_shares_share_code ON shares(share_code);
CREATE INDEX idx_system_logs_user_id ON system_logs(user_id);
CREATE INDEX idx_system_logs_created_at ON system_logs(created_at);
```

## 数据完整性

### 外键约束

所有外键关系都通过 `FOREIGN KEY` 约束保证数据完整性。

### 级联删除

- 删除用户时，相关文件记录保留（标记为已删除）
- 删除文件夹时，子文件和子文件夹需要递归处理

## 数据迁移

数据库初始化脚本位于 `server/src/db/schema.sql`。

初始化命令：
```bash
# 本地环境
npm run db:init

# 生产环境
npm run db:init:prod
```

