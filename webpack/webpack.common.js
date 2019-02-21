const path = require("path")
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseDir = path.resolve(__dirname, './../');
module.exports = {
  entry: {
    lib: baseDir +  '/src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "./../dist")
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'test__package'
    // })
  ],
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
}
