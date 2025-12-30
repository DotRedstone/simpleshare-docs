# 管理员 API

> 注意：所有管理员 API 都需要管理员权限。

## 获取系统统计

获取系统整体统计信息。

```http
GET /api/admin/stats
```

### 响应

```json
{
  "success": true,
  "data": {
    "totalUsers": 100,
    "totalFiles": 1000,
    "totalStorage": 50.5,
    "usedStorage": 25.3
  }
}
```

## 文件管理

### 获取所有文件

```http
GET /api/admin/files?sortBy=name&order=asc
```

### 下架文件

```http
POST /api/admin/files/takedown
Content-Type: application/json

{
  "fileId": 123
}
```

## 用户管理

### 获取所有用户

```http
GET /api/admin/users?sortBy=name&order=asc
```

### 更新用户配额

```http
PATCH /api/admin/users/:id
Content-Type: application/json

{
  "storageQuota": 20.0
}
```

## 存储后端管理

### 获取存储后端列表

```http
GET /api/admin/storage/backends
```

### 添加存储后端

```http
POST /api/admin/storage/backends
Content-Type: application/json

{
  "name": "My R2 Storage",
  "type": "r2",
  "config": {
    "accountId": "...",
    "bucketName": "..."
  }
}
```

## 系统日志

### 获取系统日志

```http
GET /api/admin/logs?sortBy=created_at&order=desc
```

