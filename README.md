# SimpleShare 文档站点

> SimpleShare 项目的官方文档站点，使用 VitePress 构建

[![Deploy to Cloudflare Pages](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/DotRedstone/simpleshare-docs)

## 📖 关于

SimpleShare 是一个基于 Cloudflare Serverless 边缘计算架构的分布式对象存储与文件分发系统。本项目包含完整的项目文档，包括：

- 📚 用户指南
- 🔌 API 文档
- 🚀 部署指南
- 🗄️ 数据库设计

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

文档将在 `http://localhost:5173` 启动。

### 构建

```bash
npm run build
```

构建后的文件将输出到 `.vitepress/dist` 目录。

### 预览构建结果

```bash
npm run preview
```

## 📁 项目结构

```
├── .vitepress/          # VitePress 配置
│   ├── config.ts        # 配置文件
│   └── theme/           # 主题自定义
├── api/                 # API 文档
├── guide/               # 指南文档
├── deployment/          # 部署文档
├── public/              # 静态资源
└── index.md            # 首页
```

## 🌐 部署

### Cloudflare Pages

1. Fork 或克隆此仓库
2. 在 Cloudflare Dashboard 中创建新的 Pages 项目
3. 连接 GitHub 仓库
4. 构建命令：`npm run build`
5. 输出目录：`.vitepress/dist`

### GitHub Pages

使用提供的 GitHub Actions 工作流自动部署到 GitHub Pages。

## 📝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

本项目文档遵循与主项目相同的许可证。

