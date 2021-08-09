const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    uimini: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist2')
  },
  module: {
    rules: [
      // stylus
      {
        test: /\.styl$/,
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
            loader: 'stylus-loader',
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
