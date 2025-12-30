# 分享管理 API

## 创建分享

为文件或文件夹创建分享链接。

```http
POST /api/shares
Content-Type: application/json
```

### 请求体

```json
{
  "fileId": 123,
  "expiresAt": 1735689600000,
  "maxAccess": 10
}
```

### 响应

```json
{
  "success": true,
  "data": {
    "share": {
      "id": 1,
      "shareCode": "ABC123",
      "expiresAt": 1735689600000,
      "maxAccess": 10
    }
  }
}
```

## 获取分享信息

通过提取码获取分享信息。

```http
GET /api/shares/:shareCode
```

### 响应

```json
{
  "success": true,
  "data": {
    "file": {
      "id": 123,
      "name": "example.pdf",
      "size": "1.5 MB"
    }
  }
}
```

## 获取我的分享列表

获取当前用户创建的所有分享。

```http
GET /api/shares
```

### 响应

```json
{
  "success": true,
  "data": {
    "shares": [
      {
        "id": 1,
        "shareCode": "ABC123",
        "fileId": 123,
        "fileName": "example.pdf",
        "expiresAt": 1735689600000,
        "accessCount": 5
      }
    ]
  }
}
```

## 删除分享

删除分享链接。

```http
DELETE /api/shares/:id
```

### 响应

```json
{
  "success": true
}
```

