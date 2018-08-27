const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.config.base')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
})
