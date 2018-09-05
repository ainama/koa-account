const webpack = require('webpack');
const path = require('path');

const config = {

  mode: 'development',
  // mode: 'production',

  entry: {
    basic: './index.js'
  },

  output: {
    path: path.join(__dirname, '../../public/js'),
    filename: '[name].bundle.js',
    publicPath: '/js/',
    chunkFilename: '[name].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?cacheDirectory',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react'],
            plugins:['babel-plugin-syntax-dynamic-import']
          }
        }
      }
    ]
  }

};

module.exports = config;
