import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SimpleShare',
  description: '分布式对象存储与文件分发系统 - 基于 Cloudflare 边缘计算架构',
  base: '/',
  cleanUrls: true,
  
  // 主题配置
  themeConfig: {
    logo: '/favicon-96x96.png',
    
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: '部署', link: '/deployment/' },
      { text: 'GitHub', link: 'https://github.com/dotredstone/simple-share' }
    ],
    
    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '开始使用',
          items: [
            { text: '简介', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '架构设计', link: '/guide/architecture' }
          ]
        },
        {
          text: '核心功能',
          items: [
            { text: '文件管理', link: '/guide/file-management' },
            { text: '分享系统', link: '/guide/sharing' },
            { text: '存储后端', link: '/guide/storage-backends' }
          ]
        },
        {
          text: '数据库设计',
          items: [
            { text: '数据库设计', link: '/guide/database-design' },
            { text: '测试指南', link: '/guide/testing' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API 文档',
          items: [
            { text: 'API 概览', link: '/api/' },
            { text: '认证', link: '/api/auth' },
            { text: '文件操作', link: '/api/files' },
            { text: '分享管理', link: '/api/shares' },
            { text: '管理员 API', link: '/api/admin' }
          ]
        }
      ],
      '/deployment/': [
        {
          text: '部署指南',
          items: [
            { text: '部署概览', link: '/deployment/' },
            { text: 'Cloudflare Workers', link: '/deployment/workers' },
            { text: '环境配置', link: '/deployment/environment' },
            { text: '数据库初始化', link: '/deployment/database' }
          ]
        }
      ]
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dotredstone/simple-share' }
    ],
    
    // 页脚
    footer: {
      message: '基于 Cloudflare 边缘计算架构',
      copyright: 'Copyright © 2025 SimpleShare Project | <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">湘ICP备2025111357号</a>'
    },
    
    // 搜索
    search: {
      provider: 'local'
    },
    
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/dotredstone/simple-share/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    
    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  },
  
  // Markdown 配置
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})
