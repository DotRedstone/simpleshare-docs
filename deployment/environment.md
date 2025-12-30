# 环境配置

## 必需环境变量

### JWT_SECRET

用于 JWT 令牌签名的密钥。

```bash
# 生成密钥
npm run gen-token
```

### Cloudflare Workers 绑定

在 `wrangler.toml` 中配置：

```toml
[[d1_databases]]
binding = "DB"
database_name = "simpleshare-db"
database_id = "your-database-id"

[[r2_buckets]]
binding = "FILES"
bucket_name = "your-bucket-name"
```

## 可选环境变量

### NODE_ENV

设置运行环境：

```bash
NODE_ENV=production
```

### LOG_LEVEL

设置日志级别：

```bash
LOG_LEVEL=info
```

## 本地开发环境

创建 `.dev.vars` 文件（不会被提交到 Git）：

```bash
JWT_SECRET=your-secret-key
```

## 生产环境

在 Cloudflare Dashboard 中设置环境变量：

1. 进入 Workers 项目
2. 选择"设置" > "变量"
3. 添加环境变量

## 安全建议

- 不要将敏感信息提交到 Git
- 使用强密码作为 JWT_SECRET
- 定期轮换密钥
- 使用环境变量而不是硬编码

