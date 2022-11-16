const path = require('path');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
  },
  chainWebpack: webpackConfig => {
    webpackConfig.resolve.alias.set('@Components', resolve('src/views/components'));
    webpackConfig.resolve.alias.set('@Assets', resolve('src/assets'));
    webpackConfig.resolve.alias.set('@Config', resolve('src/config'));
    webpackConfig.resolve.alias.set('@Views', resolve('src/views'));
    webpackConfig.resolve.alias.set('@Public', resolve('public'));
    webpackConfig.resolve.alias.set('@Presenter', resolve('src/presenter'));
  }
};
