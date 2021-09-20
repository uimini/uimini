const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSPlugin = require('mini-css-extract-plugin')

const distFolder = 'dist'

module.exports = {
  entry: {
    uimini: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, distFolder)
  },
  module: {
    rules: [
      // stylus
      {
        test: /\.scss$/,
        use: [
          MiniCSSPlugin.loader,
          // 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, 'postcss.config.js')
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              // outputStyle: 'expanded',
              // minimize: false,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'test.html')
    }),
    new MiniCSSPlugin({
      filename: '[name].css'
    })
  ]
}
