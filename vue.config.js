process.env.VUE_APP_VERSION = require('./package.json').version
process.env.VUE_APP_BUILD_HASH = process.env.GITHUB_SHA || ""
process.env.VUE_APP_SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
process.env.VUE_APP_BASE_PATH = process.env.YMS_BASE_PATH || "/"

module.exports = {
    publicPath: process.env.VUE_APP_BASE_PATH,

    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "@/styles/base.scss";'
            }
        }
    },

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableLegacy: true,
        runtimeOnly: false,
        compositionOnly: true,
        fullInstall: true
      }
    }
}
