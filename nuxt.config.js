import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | 大野城のヘアサロンなら是非Dalahastへ',
    title: 'Dalahast hair salon',
    htmlAttrs: {
      lang: 'jp'
    },
    meta: [
      { name: 'google-site-verification', content: '62kso-9cH8hgqdngIZmCHu6wrul1x4s4rfzePHumZF8' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: '大野城のヘアサロンなら是非Dalahastへ' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Dalahast hair salon' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://dalahast.web.app' },
      { hid: 'og:title', property: 'og:title', content: 'Dalahast hair salon' },
      { hid: 'og:description', property: 'og:description', content: '大野城のヘアサロンなら是非Dalahastへ' },
      { hid: 'og:image', property: 'og:image', content: 'top-icon.JPG' },
      { name: 'twitter:card', content: 'top-icon.JPG' }//　twitterの画像サイズ
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', type: 'image', href: 'top-icon.JPG' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  sitemap: {
    hostname: "https://dalahast.web.app",
    defaults: {
      lastmod: new Date(),
      changefreq: 'daily'
    }
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }, 
  generate: { 
    dir: 'public' 
  } 
}
