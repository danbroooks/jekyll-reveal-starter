const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/script.js',
  output: {
    path: 'presentation',
    filename: 'script.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ],
};
