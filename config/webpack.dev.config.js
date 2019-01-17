const webpack = require('webpack');
const merge = require('webpack-merge');

// 插件
// 基础配置
const webpackBaseConfig= require('./webpack.base.config');
// 常量
const constanst = require('./constants');

const devConfig={
  mode:'development',
  devtool:'inline-source-map',
  output:{
    filename:'[name].js',
    path:constanst.distPath
  },
  devServer:{
    contentBase: constanst.distPath,
    hot: true,
    open: true,
    quiet: true,
    overlay: true
  },
  module:{
    rules:[
      {
        test: /\.(sc|c|sa)ss$/,
        include: constanst.srcPath,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: (loader) => [ require('autoprefixer')({browsers: ['> 0.15% in CN']}) ]
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
  ]
}

module.exports=merge(webpackBaseConfig,devConfig);
