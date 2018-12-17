'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');
const domains = {

  production: (() => {
    // return  'http://192.168.4.52:9127',
    return 'http://hb.chelenet.com'
  })(),
  test: (() => {
    return 'http://192.168.4.52:9127' // 北京52服务器地址
  })(),
  local: (() => {
    return 'http://192.168.4.52:9127' // 北京52服务器地址
  })(),
  mock: 'https://www.easy-mock.com/mock/5bf50d687392ed1f6bff6f1b/mock-vue'// easyMock 网站提供的模拟地址,
}

const defaultDomainUsed = ((str) => {
  switch (str) {
    case 'production':
      return domains.production;
    case 'test':
      return domains.test;
    case 'local':
      return domains.local;
    case 'mock':
      return domains.mock;
  }
})();

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: domains.production,  //目标接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/api': ''   //重写接口
        }
      },
      '/mock': {
        target: domains.mock,  //目标接口域名
        changeOrigin: true,  //是否跨域
        secure: false,
        pathRewrite: {
          '^/mock': ''
        }
      },
    },
    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/vue-temp-v2/dist/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
