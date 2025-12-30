import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SimpleShare',
  description: '分布式对象存储与文件分发系统 - 基于 Cloudflare 边缘计算架构',
  titleTemplate: ':title - SimpleShare',
  base: '/',
  outDir: './dist',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  
  // 主题配置
  themeConfig: {
    logo: '/favicon.svg',
    
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/getting-started' },
      { text: 'API', link: '/api/' },
      { text: '部署', link: '/deployment/' },
      { text: '成员指南', link: '/member-guides/report-content' },
      { text: 'GitHub', link: 'https://github.com/dotredstone/simple-share' }
    ],

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    darkModeSwitchLabel: '主题切换',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '选择语言',
    
    // 侧边栏
    sidebar: {
      '/member-guides/': [
        {
          text: '成员协作指南',
          items: [
            { text: '核心说明', link: '/member-guides/report-content' },
            { text: '组员 1：数据库建模', link: '/member-guides/Member1_Database_Design' },
            { text: '组员 2：功能验证', link: '/member-guides/Member2_Testing_Guide' },
            { text: '组员 3：报告整合', link: '/member-guides/Member3_Report_Writing' },
            { text: '组员 4：PPT 与答辩', link: '/member-guides/Member4_PPT_Defense' }
          ]
        }
      ],
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
