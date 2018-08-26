var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.build.env


// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  mode: process.env.NODE_ENV,
  module: {
    rules: utils.styleLoaders()
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin(),
    // generate favicons
    new FaviconsWebpackPlugin(path.resolve(__dirname, '../static/logo.png')),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: (env === 'production') ? '[name].css' : '[name].[hash].css',
      chunkFilename: (env === 'production') ? '[id].css' : '[id].[hash].css',
    })
  ] 
})
