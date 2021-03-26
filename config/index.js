'use strict';
const path = require('path');

module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    proxyTable: {},
    host: 'me.classba.cn',
    port: 8080,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    showEslintErrorsInOverlay: false,
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true
  },
  build: {
    assetsRoot: path.resolve(__dirname, '../lib'),
    assetsSubDirectory: 'static',
  },
};