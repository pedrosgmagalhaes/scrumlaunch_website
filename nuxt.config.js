export default {
  head: {
    title: 'ScrumLaunch',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  css: ['@/assets/css/main.scss'],

  plugins: [
    '~/plugins/directives.js',
    '~/plugins/global-components.js',
    { src: '~/plugins/hotjar.js', mode: 'client' },
  ],

  components: true,

  serverMiddleware: [{ path: '/api', handler: '~/api' }],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
  ],

  styleResources: {
    scss: ['~/assets/css/common.scss', '~/assets/css/main.scss'],
  },

  modules: ['@nuxtjs/axios', '@nuxt/http', '@nuxtjs/sitemap', '@nuxtjs/robots'],

  robots: {
    UserAgent: '*',
    Allow: '/',
  },

  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },
}
