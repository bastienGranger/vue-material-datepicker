var path = require('path');
var webpack = require('webpack');
var pjson = require('../package.json');

module.exports = {
      entry: path.resolve(__dirname, ('../src/datepicker.js')),
      output: {
          path: path.resolve(__dirname, ('../dist/')),
          filename: '[name]_v' + pjson.version + '.min.js'
      },
      module: {
            loaders: [
                {
                    test: /\.vue$/,
                    loader: 'vue'
                }
            ]
      }
};
