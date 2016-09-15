var path = require('path');
var webpack = require('webpack');
var pjson = require('../package.json');

module.exports = {
      entry: path.resolve(__dirname, ('../src/main.js')),
      output: {
          path: path.resolve(__dirname, ('../dist/')),
          filename: 'datepicker_v' + pjson.version + '.min.js'
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
      }
};
