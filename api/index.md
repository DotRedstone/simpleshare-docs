# API 文档

欢迎使用 SimpleShare API 文档！

## 基础信息

- **Base URL**: `https://your-domain.workers.dev/api`
- **认证方式**: JWT Token (存储在 HTTP-only Cookie 中)
- **内容类型**: `application/json`

## 认证

所有需要认证的接口都需要在请求头中包含有效的 JWT Token。

### 登录

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### 注册

```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "用户名",
  "email": "user@example.com",
  "password": "password123"
}
```

## API 分类

- [认证 API](./auth.md) - 用户认证相关接口
- [文件操作 API](./files.md) - 文件上传、下载、管理等接口
- [分享管理 API](./shares.md) - 文件分享相关接口
- [管理员 API](./admin.md) - 管理员专用接口

## 错误码

| 状态码 | 说明 |
|--------|------|
| 200 | 请求成功 |
| 400 | 请求参数错误 |
| 401 | 未认证 |
| 403 | 无权限 |
| 404 | 资源不存在 |
| 500 | 服务器错误 |

## 响应格式

### 成功响应

```json
{
  "success": true,
  "data": {
    // 响应数据
  }
}
```

### 错误响应

```json
{
  "success": false,
  "error": "错误信息"
}
```

