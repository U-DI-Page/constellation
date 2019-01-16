const webpack = require('webpack');
const merge = require('webpack-merge');

// const OpenBrowserPlugin = require('open-browser-webpack-plugin');

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
    // new OpenBrowserPlugin({
    //   url: 'http://localhost:8080'
    // })
  ]
}

module.exports=merge(webpackBaseConfig,devConfig);
