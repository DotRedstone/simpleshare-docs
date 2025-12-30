# SimpleShare Docs

SimpleShare 是一个基于 Cloudflare 边缘计算架构的分布式对象存储与文件分发系统。

### 核心特性

- **存算分离**：基于 R2 + D1 的架构，物理资源零占用。
- **UI/UX 工业化**：全平台响应式适配，丝滑的日夜模式切换。
- **合规审计**：支持管理员违规下架、多维度数据排序。
- **安全保障**：HMAC 无状态令牌、预签名 URL 访问。

### 快速开始

1. `npm install`
2. `npm run dev`

### 构建与部署

1. `npm run build`
2. 将 `dist` 目录部署至 EdgeOne Pages 或 Cloudflare Pages。

---
湘ICP备2025111357号
