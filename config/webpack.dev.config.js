const merge = require('webpack-merge');
const path = require('path');
// 插件
// 基础配置
const webpackBaseConfig= require('./webpack.base.config');
// 常量
const constanst = require('./constants');

const devConfig={
  mode:'development',
  output:{
    filename:'[name].js',
    path:constanst.distPath
  },
  module:{
    rules:[
      {
        test: /\.(sc|c|sa)ss$/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: (loader) => [require('autoprefixer')({browsers: ['> 0.15% in CN']})]
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins:[
  ]
}

module.exports=merge(webpackBaseConfig,devConfig);
