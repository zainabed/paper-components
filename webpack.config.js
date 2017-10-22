const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    button: './main/js/component/button/button.js',
    icon: './main/js/component/icon/PaperIcon.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/[name].js'
  },
  module: {
    rules: [
      /*{
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true },
          },
          'sass-loader',
        ],
      },

      {
      test: /\.html$/,
        use: [
          {
            loader: 'posthtml-loader',
            options: {
              parser: 'posthtml-sugarml',
              plugins: [  ],
              template: true
            }
          }
        ]
      }*/

      // …
    ],
  },
};
