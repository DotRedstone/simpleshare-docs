# 文件操作 API

## 获取文件列表

获取当前用户的文件列表。

```http
GET /api/files/list?parentId=123&sortBy=name&order=asc
```

### 查询参数

- `parentId` (可选): 父文件夹 ID
- `sortBy` (可选): 排序字段 (name/size/created_at)
- `order` (可选): 排序方向 (asc/desc)

### 响应

```json
{
  "success": true,
  "data": {
    "files": [
      {
        "id": 1,
        "name": "example.pdf",
        "size": "1.5 MB",
        "type": "file",
        "createdAt": 1735689600000
      }
    ]
  }
}
```

## 上传文件

上传文件到服务器。

```http
POST /api/files/upload
Content-Type: multipart/form-data
```

### 请求体

- `file`: 文件对象
- `parentId` (可选): 父文件夹 ID

### 响应

```json
{
  "success": true,
  "data": {
    "file": {
      "id": 1,
      "name": "example.pdf",
      "size": "1.5 MB"
    }
  }
}
```

## 删除文件

删除文件或文件夹。

```http
DELETE /api/files/:id
```

### 响应

```json
{
  "success": true
}
```

## 重命名文件

重命名文件或文件夹。

```http
PATCH /api/files/:id
Content-Type: application/json
```

### 请求体

```json
{
  "name": "新文件名"
}
```

### 响应

```json
{
  "success": true,
  "data": {
    "file": {
      "id": 1,
      "name": "新文件名"
    }
  }
}
```

## 下载文件

获取文件下载链接。

```http
GET /api/files/:id/download
```

### 响应

```json
{
  "success": true,
  "data": {
    "downloadUrl": "https://r2.example.com/file.pdf?signature=..."
  }
}
```

