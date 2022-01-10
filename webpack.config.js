const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const distFolder = 'dist'

module.exports = {
  entry: {
    // since 2.0.5 webpack using for dev only
    uimini: path.resolve(__dirname, 'src', 'builds/dev.js')
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
              url: false,
              sourceMap: true,
              importLoaders: 1,
              modules: {
                localIdentName: '[local]'
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
  resolve: {
    alias: {
      '~': path.join(__dirname, './src')
    },
    extensions: ['', '.sass', '.scss', '.css', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'test.html')
    })
  ]
}
