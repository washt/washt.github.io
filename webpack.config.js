var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './devServer.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react','stage-0'],
          plugins: ['transform-decorators-legacy']
        }
      }, {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }]
  }
};
