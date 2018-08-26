var path = require('path')
var config = require('../config')
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.build.env

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function () {
    return [{
      test: /\.(sa|sc|c)ss$/,
      use: [
        env === 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ]
    }]
}
