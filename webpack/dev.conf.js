const webpack = require('webpack') // eslint-disable-line
const webpackMerge = require('webpack-merge'); // eslint-disable-line
const commonConfig = require('./common.conf');
const path = require('path');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
  },
  devServer: {
    noInfo: false,
    hot: true,
    inline: true,
    port: 8080,
    contentBase: './',
    proxy: {
      '/': {
        bypass: () => '/index.html',
      },
    },
    stats: 'minimal',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('dev'),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
