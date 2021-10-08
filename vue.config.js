process.env.VUE_APP_VERSION = require('./package.json').version
process.env.VUE_APP_BUILD_HASH = process.env.GITHUB_SHA || ""
module.exports = {
    publicPath: process.env.VUE_APP_BASE_PATH || "/",

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
