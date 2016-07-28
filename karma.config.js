var webpackConfig = require('./webpack.config.js');
// webpackConfig.devtool = 'inline-source-map';

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    singleRun: true,
    frameworks: [ 'mocha'],
    files: [
      './spec/test.js'
    ],
    preprocessors: {
      './spec/test.js': [ 'webpack' ]
    },
    reporters: [ 'mocha' ],
    webpack: {
      module: {
        loaders: [
          test: /\.jsx?$/,
          loaders: ['babel']
        ]
      }
    },
    webpackServer: {
      noInfo: false
    },
    plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack'
    ]
    autoWatch: true
  });
}