# 认证 API

## 登录

用户登录接口。

```http
POST /api/auth/login
Content-Type: application/json
```

### 请求体

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### 响应

```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user-id",
      "name": "用户名",
      "email": "user@example.com",
      "role": "user"
    }
  }
}
```

## 注册

用户注册接口。

```http
POST /api/auth/register
Content-Type: application/json
```

### 请求体

```json
{
  "name": "用户名",
  "email": "user@example.com",
  "password": "password123"
}
```

### 响应

```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user-id",
      "name": "用户名",
      "email": "user@example.com",
      "role": "user"
    }
  }
}
```

## 登出

用户登出接口。

```http
POST /api/auth/logout
```

### 响应

```json
{
  "success": true
}
```

## 获取当前用户

获取当前登录用户信息。

```http
GET /api/auth/me
```

### 响应

```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user-id",
      "name": "用户名",
      "email": "user@example.com",
      "role": "user",
      "storageQuota": 10.0,
      "storageUsed": 2.5
    }
  }
}
```

## 重置密码

重置用户密码（需要重置令牌）。

```http
POST /api/auth/reset-password
Content-Type: application/json
```

### 请求体

```json
{
  "email": "user@example.com",
  "token": "reset-token",
  "newPassword": "new-password123"
}
```

### 响应

```json
{
  "success": true
}
```

