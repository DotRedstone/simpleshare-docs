# 存储后端

## 概述

SimpleShare 支持多种存储后端，包括 Cloudflare R2、AWS S3、WebDAV 等。

## 支持的存储类型

### 1. Cloudflare R2

- **类型**: `r2`
- **特点**: 兼容 S3 API，无出口费用
- **配置**:
  ```json
  {
    "accountId": "your-account-id",
    "bucketName": "your-bucket-name",
    "accessKeyId": "your-access-key",
    "secretAccessKey": "your-secret-key"
  }
  ```

### 2. AWS S3

- **类型**: `s3`
- **特点**: 标准 S3 兼容存储
- **配置**:
  ```json
  {
    "region": "us-east-1",
    "bucketName": "your-bucket-name",
    "accessKeyId": "your-access-key",
    "secretAccessKey": "your-secret-key"
  }
  ```

### 3. WebDAV

- **类型**: `webdav`
- **特点**: 支持标准 WebDAV 协议
- **配置**:
  ```json
  {
    "url": "https://webdav.example.com",
    "username": "your-username",
    "password": "your-password"
  }
  ```

## 配置存储后端

### 管理员配置

1. 进入"存储管理"页面
2. 点击"添加存储后端"
3. 选择存储类型
4. 填写配置信息
5. 保存配置

### 用户私有后端

用户可以配置自己的私有存储后端：

1. 进入"设置"页面
2. 选择"存储后端"
3. 添加私有后端
4. 配置访问凭证

## 存储配额管理

### 用户组配额

管理员可以为用户组分配存储配额：

1. 进入"用户管理"页面
2. 选择用户组
3. 设置存储配额
4. 分配存储后端

### 用户配额

每个用户都有独立的存储配额：

- 默认配额由用户组决定
- 管理员可以单独调整用户配额
- 用户可以在"设置"中查看配额使用情况

## API 接口

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

