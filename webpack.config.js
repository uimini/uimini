const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const distFolder = 'dist'

module.exports = {
  entry: {
    // since 2.0.5 using for dev only
    uimini: path.resolve(__dirname, 'src', 'builds/default.js'),
    uimini_no_reset: path.resolve(__dirname, 'src', 'builds/no-reset.js')
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
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
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
    })
  ]
}
