export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sk的blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '孙康,sunkang,blog,client' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: '孙康的博客,sunkang,blog,zone'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/axios",
    {src: '~plugins/axios.js', ssr: true}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios', "@nuxtjs/proxy"
  ],
  axios: {
    proxy: true,
    retry: {retrues: 3},
    debug: process.env.ENV == 'production'? false:true,
    baseURL: process.env_ENV=='production'?'http://localhost:3000/api':'http://localhost:3000/api'
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    '/api': {
      target: 'https://sk2.fun',
      // pathRewrite: { '^/api': '' }
    },
    // '/japi': {
    //   target: 'https://gold-tag-ms.juejin.im',
    //   pathRewrite: { '^/japi': '' }
    // },
    // '/wapi': {
    //   target: 'https://web-api.juejin.im',
    //   pathRewrite: { '^/wapi': '' }
    // },
    // '/tapi': {
    //   target: 'https://timeline-merger-ms.juejin.im',
    //   pathRewrite: { '^/tapi': '' }
    // },
    // '/xapi': {
    //   target: 'https://xiaoce-timeline-api-ms.juejin.im',
    //   pathRewrite: { '^/xapi': '' }
    // }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    verdor: ['axios']
  }
}
