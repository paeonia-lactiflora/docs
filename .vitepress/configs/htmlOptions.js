export const htmlOptions = {
  title: "杂记",
  description: "Jason Liu 的便签本. 搜寻与捕捉灵感, 风花雪月与浅斟低唱",
  lang: "zh-CN",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // 接入 51.LA 网站数据统计分析的功能
    ['script', { charset: 'UTF-8', id: 'LA_COLLECT', src: '//sdk.51.la/js-sdk-pro.min.js' }],
    ['script', {}, 'LA.init({id:"3KZrZabR4sNgr3mS",ck:"3KZrZabR4sNgr3mS"})'],
  ],
}