// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// 常量
const constants   = require('./constants');

module.exports={
  entry:constants.indexPath,
  module:{
    rules:[
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules)/,
        include:[constants.srcPath],
        use:{
          loader:'babel-loader',
          options:{
            cacheDirectory:true,
            plugins: [
              ['import', [{ libraryName: "antd", style: "css" }]]
            ]
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