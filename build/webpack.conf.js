var path = require('path');
var webpack = require('webpack');

module.exports = {
  // entry: path.resolve(__dirname, ('../src/main.js')),
  entry: path.resolve(__dirname, ('../src/Datepicker.vue')),
  output: {
    path: path.resolve(__dirname, ('../dist/')),
    filename: 'vue-material-datepicker.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  vue: {
    loaders: {
      scss: 'style!css!sass'
    }
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
  ]
};
