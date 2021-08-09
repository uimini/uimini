/*
  autoprefixer - https://github.com/postcss/autoprefixer
  cssnano - https://github.com/hail2u/node-css-mqpacker
  css-mqpacker - HAS BEEN REMOVED! Do not use!
*/

module.exports = {
  plugins: {
    'postcss-preset-env': {
      browsers: 'last 2 versions'
    }
  }
}
