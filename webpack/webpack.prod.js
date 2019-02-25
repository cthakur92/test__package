const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const nodeExternals = require('webpack-node-externals');
const path = require("path")
const baseDir = path.resolve(__dirname, './../');
module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', 'sass-loader'
        ]
      }
    ]
  },
  externals : [nodeExternals()],
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(['dist'],{
      root: baseDir,
    }),
    new MiniCssExtractPlugin('style.css')
  ]
});
