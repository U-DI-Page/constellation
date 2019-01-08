const { resolve } = require('./utils');

module.exports={
  rootPath: resolve(''), // 根路径
  srcPath: resolve('src'), // src目录
  distPath: resolve('dist'),// 打包目录
  indexPath: resolve('src/index.js'), // index.js路径
  indexHtmlPath: resolve('src/index.html'), // index.html路径 
  staticPath: resolve('static'),// static目录
  manifestPath: resolve('src/manifest.json'), // manifest路径
}