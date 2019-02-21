const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require("path")

module.exports = merge(common, {
  mode: 'development',
  entry: {
    lib: path.resolve(__dirname, './../src/test.js')
  },
  devServer: {
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template:  path.resolve(__dirname, './../src/index.html'),
      filename: "./index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  }
})
