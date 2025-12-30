# 快速开始

欢迎使用 SimpleShare！本指南将帮助你快速上手。

## 系统要求

- Node.js >= 20.19.0 或 >= 22.12.0
- npm >= 10.0.0
- Cloudflare 账户（用于部署）

## 安装

```bash
# 克隆仓库
git clone https://github.com/dotredstone/simple-share.git
cd simple-share

# 安装依赖
npm install
```

## 本地开发

### 前端开发

```bash
npm run dev
```

前端应用将在 `http://localhost:5173` 启动。

### 后端开发

```bash
npm run server:dev
```

后端服务将在 `http://localhost:8787` 启动。

### 文档开发

```bash
npm run docs:dev
```

文档站点将在 `http://localhost:5173` 启动（如果前端未运行）。

## 环境配置

在开始之前，你需要配置以下环境变量：

1. **JWT_SECRET**: 用于 JWT 令牌签名的密钥
2. **Cloudflare Workers**: 配置 `wrangler.toml` 中的绑定

### 生成 JWT Secret

```bash
npm run gen-token
```

## 数据库初始化

### 本地开发环境

```bash
npm run db:init
```

### 生产环境

```bash
npm run db:init:prod
```

## 部署

```bash
npm run deploy
```

这将构建前端应用并部署到 Cloudflare Workers。

## 下一步

- 查看 [架构设计](./architecture.md) 了解系统架构
- 阅读 [文件管理](./file-management.md) 学习如何使用文件功能
- 查看 [API 文档](../api/auth.md) 了解 API 接口

