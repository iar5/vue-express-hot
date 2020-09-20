const webpack = require('webpack');

module.exports = {
  productionSourceMap: false,
};

if(process.env.NODE_ENV == 'development'){
  // https://github.com/gloriaJun/til/issues/3
  module.exports.configureWebpack = {
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
}