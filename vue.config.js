const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  productionSourceMap: false,
};

if(process.env.NODE_ENV == 'development'){
  module.exports.configureWebpack = {
    plugins: [
      new webpack.HotModuleReplacementPlugin(), // https://github.com/gloriaJun/til/issues/3
    ]
  }
}
else{
  module.exports.configureWebpack = {
    plugins: [
      new CompressionPlugin() // https://stackoverflow.com/a/57708321/7764088
    ]
  }
}