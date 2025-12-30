# 部署指南

欢迎使用 SimpleShare 部署指南！

## 部署方式

- [Cloudflare Workers](./workers.md) - 使用 Cloudflare Workers 部署
- [环境配置](./environment.md) - 配置环境变量
- [数据库初始化](./database.md) - 初始化数据库

## 快速部署

```bash
# 1. 安装依赖
npm install

# 2. 配置环境变量
# 编辑 wrangler.toml 和设置环境变量

# 3. 初始化数据库
npm run db:init:prod

# 4. 部署
npm run deploy
```

## 部署检查清单

- [ ] Cloudflare 账户已创建
- [ ] D1 数据库已创建
- [ ] R2 存储桶已创建
- [ ] 环境变量已配置
- [ ] 数据库已初始化
- [ ] Workers 已部署
- [ ] 域名已绑定（可选）

