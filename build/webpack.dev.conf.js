'use strict';
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const config = require('../config');
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const portfinder = require('portfinder');
const baseWebpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const webpack = require('webpack');
const utils = require('./utils');



const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join('/', 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: config.dev.host
  },
  devtool: config.dev.devtool,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      // webpack 生成模板的路径
      template: './public/index.html'
    }),
    new webpack.LoaderOptionsPlugin({
      vue: {
        postcss: [require('postcss-px2rem')({ remUnit: 75, propWhiteList: [] })]
      },
    })
  ]
});

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port;
  portfinder.getPort((err, port) => {
    if (err) {
      reject(port);
    } else {
      process.env.PORT = port;
      devWebpackConfig.plugins.push(new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: undefined
      }));
      resolve(devWebpackConfig);
    }
  });
});
