# 指南

欢迎使用 SimpleShare 文档！

## 什么是 SimpleShare？

SimpleShare 是一个基于 Cloudflare Serverless 边缘计算架构的分布式对象存储与文件分发系统。它采用"能白嫖绝不自建"的原则，利用 Cloudflare D1 分布式数据库和 R2 对象存储，构建了一套物理资源零占用的云文件管理系统。

## 核心特性

- **存算分离**：彻底将文件元数据与文件实体剥离
- **边缘计算**：利用 Cloudflare D1 分布式数据库，确保全球范围内的低延迟查询
- **极致成本控制**：充分利用 R2 提供的 10GB 免费对象存储额度
- **多存储后端**：支持 R2、S3、WebDAV 等多种存储后端
- **安全可靠**：基于 HMAC 算法的无状态重置令牌，预签名 URL 实现零带宽消耗

## 快速导航

- [快速开始](./getting-started.md) - 了解如何开始使用 SimpleShare
- [架构设计](./architecture.md) - 深入了解系统架构
- [文件管理](./file-management.md) - 学习文件管理功能
- [分享系统](./sharing.md) - 了解文件分享功能
- [存储后端](./storage-backends.md) - 配置和管理存储后端

