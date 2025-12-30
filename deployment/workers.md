# Cloudflare Workers 部署

## 前置要求

1. Cloudflare 账户
2. Wrangler CLI 已安装
3. Node.js >= 20.19.0

## 安装 Wrangler

```bash
npm install -g wrangler
```

## 登录 Cloudflare

```bash
wrangler login
```

## 配置 wrangler.toml

编辑 `wrangler.toml` 文件，配置你的 Cloudflare 资源：

```toml
name = "simple-share"
compatibility_date = "2024-01-01"

[env.production]
name = "simple-share-prod"

[[env.production.d1_databases]]
binding = "DB"
database_name = "simpleshare-db"
database_id = "your-database-id"

[[env.production.r2_buckets]]
binding = "FILES"
bucket_name = "your-bucket-name"
```

## 创建 D1 数据库

```bash
# 创建数据库
wrangler d1 create simpleshare-db

# 初始化数据库
npm run db:init:prod
```

## 创建 R2 存储桶

```bash
# 在 Cloudflare Dashboard 中创建 R2 存储桶
# 或使用 API 创建
```

## 部署

```bash
# 构建并部署
npm run deploy

# 或单独部署
npm run build
wrangler deploy
```

## 验证部署

访问你的 Workers URL 检查部署是否成功。

