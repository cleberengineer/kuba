const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  entry: [
    './src/index.js'
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }],
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'postcss-loader'
        ],
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'template'),
        to: '.'
      },
      {
        from: path.resolve(__dirname, '../../pixels/sw/src/sw.js'),
        to: '.'
      }
    ]),
    new MiniCssExtractPlugin({
      attributes: {
        as: 'style',
        onload: 'this.rel="stylesheet"',
        rel: 'preload'
      },
      chunkFilename: '[name].[hash].css',
      filename: '[name].[hash].css',
      linkType: false
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'template/index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@features': path.resolve(__dirname, 'src/features'),
      '@home': path.resolve(__dirname, 'src/home'),
      '@pricing': path.resolve(__dirname, 'src/pricing'),
      '@site': path.resolve(__dirname, 'src/site'),
      '@stories': path.resolve(__dirname, 'src/stories'),
      '@structured': path.resolve(__dirname, 'src/structured'),
      '@ui': path.resolve(__dirname, 'src/ui')
    }
  },
  output: {
    chunkFilename: '[name].[hash].js',
    filename: '[name].[hash].js',
    publicPath: '/'
  }
}
