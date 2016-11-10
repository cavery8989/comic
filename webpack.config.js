var webpack = require('webpack');
const validate = require('webpack-validator');
const path = require('path');
const bundleFolder = path.join(__dirname, 'public', 'js');

module.exports = validate({
  entry: {
    app: ['./src/app.js']
  },
  output: {
    filename: 'bundle.js',
    path: bundleFolder,
    publicPath: '/js/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    stats: 'errors-only'
  }
});
