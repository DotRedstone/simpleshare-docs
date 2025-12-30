# 数据库初始化

## 概述

SimpleShare 使用 Cloudflare D1 分布式数据库存储元数据。

## 创建数据库

### 使用 Wrangler CLI

```bash
# 创建数据库
wrangler d1 create simpleshare-db

# 输出示例：
# ✅ Successfully created DB 'simpleshare-db'!
# Created your database using D1's new storage backend. The new storage backend is not yet recommended for production workloads, but backs up your data via snapshots to R2.
# [[d1_databases]]
# binding = "DB"
# database_name = "simpleshare-db"
# database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

### 使用 Cloudflare Dashboard

1. 登录 Cloudflare Dashboard
2. 进入 Workers & Pages > D1
3. 点击"创建数据库"
4. 输入数据库名称
5. 复制数据库 ID

## 初始化数据库

### 本地环境

```bash
npm run db:init
```

### 生产环境

```bash
npm run db:init:prod
```

## 数据库迁移

数据库初始化脚本位于 `server/src/db/schema.sql`。

### 手动执行 SQL

```bash
# 本地环境
wrangler d1 execute simpleshare-db --file=./server/src/db/schema.sql

# 生产环境
wrangler d1 execute simpleshare-db --remote --file=./server/src/db/schema.sql
```

## 验证数据库

```bash
# 查看数据库列表
wrangler d1 list

# 执行查询
wrangler d1 execute simpleshare-db --command="SELECT COUNT(*) FROM users"
```

## 备份和恢复

### 导出数据

```bash
wrangler d1 export simpleshare-db --output=backup.sql
```

### 导入数据

```bash
wrangler d1 execute simpleshare-db --file=backup.sql
```

## 注意事项

- 生产环境数据库初始化前请备份
- 数据库迁移可能需要一些时间
- 确保数据库绑定正确配置

