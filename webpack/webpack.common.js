const path = require("path")
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseDir = path.resolve(__dirname, './../');
module.exports = {
  entry: {
    lib: baseDir +  '/src/test.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "./../dist"),
    library: 'test__package',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'test__package'
    // })
  ],
  devtool: 'source-map',
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
        test: /\.scss|css$/,
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
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: 'style-loader'
      //     }, {
      //       loader: 'css-loader'
      //     }
      //   ]
      // },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
                // name: '[path][name]-[hash:8].[ext]'
              name: '[name].[ext]'

            }
          }
        ]
      }
    ]
  }
}
