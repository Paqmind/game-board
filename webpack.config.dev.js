var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Path = require('path');
var Webpack = require('webpack');

const PUBLIC_DIR = Path.join(__dirname, "public");
const NODE_MODULES_DIR = Path.join(__dirname, "node_modules");

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: PUBLIC_DIR,
    filename: "/[name].js"
  },
  module: {
    loaders: [
      // JS
      {test: /\.(js(\?.*)?)$/, loaders: ["babel?stage=0"], exclude: [NODE_MODULES_DIR]},

      // JSON
      {test: /\.(json(\?.*)?)$/,  loaders: ["json"]},
      {test: /\.(json5(\?.*)?)$/, loaders: ["json5"]},

      // CSS: https://github.com/webpack/css-loader
      {test: /\.(css(\?.*)?)$/, loader: ExtractTextPlugin.extract('style', 'css')},

      // LESS: https://github.com/webpack/less-loader
      {test: /\.(less(\?.*)?)$/, loader: ExtractTextPlugin.extract('style', 'css!less')},

      // FILE: https://github.com/webpack/file-loader
      {test: /\.(jpg(\?.*)?)$/,   loaders: ["url?limit=8192&name=[name].[ext]"]},
      {test: /\.(jpeg(\?.*)?)$/,  loaders: ["url?limit=8192&name=[name].[ext]"]},
      {test: /\.(png(\?.*)?)$/,   loaders: ["url?limit=8192&name=[name].[ext]"]},
      {test: /\.(gif(\?.*)?)$/,   loaders: ["url?limit=8192&name=[name].[ext]"]},
      {test: /\.(svg(\?.*)?)$/,   loaders: ["url?limit=8192&name=[name].[ext]"]},

      {test: /\.(ttf(\?.*)?)$/,   loaders: ["file?name=[name].[ext]"]},
      {test: /\.(woff(\?.*)?)$/,  loaders: ["file?name=[name].[ext]"]},
      {test: /\.(woff2(\?.*)?)$/, loaders: ["file?name=[name].[ext]"]},
      {test: /\.(eot(\?.*)?)$/,   loaders: ["file?name=[name].[ext]"]},
    ],
  },
  plugins: [
    new ExtractTextPlugin("/[name].css"),
  ],
};
