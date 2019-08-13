var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './devServer.js',
  output: { path: __dirname, filename: 'bundle.js' },
  mode: 'production',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              "@babel/plugin-proposal-export-default-from",
              "@babel/plugin-proposal-logical-assignment-operators",
              ["@babel/plugin-proposal-optional-chaining", { "loose": false }],
              ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }],
              ["@babel/plugin-proposal-nullish-coalescing-operator", { "loose": false }],
              "@babel/plugin-proposal-do-expressions",
              "@babel/plugin-proposal-function-sent",
              "@babel/plugin-proposal-export-namespace-from",
              "@babel/plugin-proposal-numeric-separator",
              "@babel/plugin-proposal-throw-expressions",
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-syntax-import-meta",
              ["@babel/plugin-proposal-class-properties", { "loose": false }],
              "@babel/plugin-proposal-json-strings",
            ]
          }
        },
        exclude: /node_modules/,
      },{
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  }
};
