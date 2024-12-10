import { defineConfig } from 'vitepress'

// 导航栏, 社交链接, 侧边栏代码
import { htmlOptions, nav, socialLinks, sideBar } from './configs'

export default defineConfig({
  ...htmlOptions,

  cleanUrls: true,
  srcDir: './src',
  lastUpdated: true,

  themeConfig: {
    // 左上角品牌
    logo: 'https://img.picgo.net/2024/12/08/melon_round06d334931cff05c9.png',
    siteTitle: '杂记',

    // 右侧大纲层级
    outline: [2, 6],

    // 搜索
    search: {
      provider: 'local'
    },

    // 导航栏
    nav: nav,

    // 侧边栏
    sidebar: sideBar,

    // 社交链接 (右上角)
    socialLinks: socialLinks,

    footer: {
      copyright: 'Copyright © 2024-present Jason Liu'
    }
  },

  // markdown配置
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },
})
