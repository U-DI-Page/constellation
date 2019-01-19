const merge = require('webpack-merge');
const path = require('path');
// 插件
const MinCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// 基础配置
const webpackBaseConfig= require('./webpack.base.config');
// 常量
const constanst = require('./constants');

const proConfig={
  mode:'production',
  output:{
    filename:'js/[name].[hash].js',
    path:constanst.distPath
  },
  module:{
    rules:[
      {
        test: /\.(sc|c|sa)ss$/,
        include: constanst.srcPath,
        use: [
          MinCssExtractPlugin.loader, {
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
              plugins: (loader) => [require('autoprefixer')({browsers: ['> 0.15% in CN']})]
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
    new MinCssExtractPlugin({
      filename:'css/[name][hash].css',
      chunkFilename:'[id][hash].js'
    }),
    new CleanWebpackPlugin(['dist'],{
      root: constanst.rootPath, // 根路径
      verbose: false, // 开启控制台输出信息
      dry: false // 启用删除文件
    }),
    new BundleAnalyzerPlugin()
  ],
  optimization:{
    minimizer:[
      // 压缩css文件
      new OptimizeCSSAssetsPlugin(),
      //  压缩js文件
      new UglifyJsPlugin({
        cache: true, 
        parallel: true, 
        sourceMap: true // set to true if you want JS source maps
      })
    ]
  }
}

module.exports=merge(webpackBaseConfig,proConfig);
