const webpack = require('webpack');
// plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// 常量
const constants   = require('./constants');

module.exports={
  entry:constants.indexPath,
  devtool:'inline-source-map',
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        include:[constants.srcPath],
        use:{
          loader:'babel-loader',
          options:{
            cacheDirectory:true
          }
        }
      },{
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        include: [constants.srcPath],
        use: [
          {
            // 将图片转为base64
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }, {
            // 图片优化
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(['dist'],{
      root:constants.rootPath, // 根路径
      verbose:true, // 开启控制台输出信息
      dry:false // 启用删除文件
    }),
    new HtmlWebpackPlugin({
      title:'Chrome App',
      filename:'index.html',
      template:constants.indexHtmlPath,
      minify: {
        collapseWhitespace: false,
        removeComments: true, // 是否移除注释
        removeAttributeQuotes: true // 移除属性的引号
      }
    }),
    new CopyWebpackPlugin([
      { from: constants.staticPath },
      { from: constants.manifestPath },
    ])
  ]
}