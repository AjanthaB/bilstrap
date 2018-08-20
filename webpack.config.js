var path = require('path');

module.exports = (env = {}) => {
  return {
    entry: ['./src/js/bilstrap.js', './src/scss/bilstrap.scss'],
    output: {
      filename: 'dist/js/bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].css',
                outputPath: 'css/'
              }
            },
            {
              loader: 'extract-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    }
  }
}