const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPreconnectPlugin = require('html-webpack-preconnect-plugin')
const merge = require('webpack-merge')
const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = merge.smart(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          safari10: true
        }
      })
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      preconnect: [
        'https://vars.hotjar.com',
        'https://static.hotjar.com',
        'https://script.hotjar.com',
        'https://www.googletagmanager.com',
        'https://storage.googleapis.com',
        'https://www.google-analytics.com'
      ],
      template: path.resolve(__dirname, 'template/index.html')
    }),
    new HtmlWebpackPreconnectPlugin()
  ]
})