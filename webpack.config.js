const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'index': './src/assets/script.js'
  },
  output: {
    path: 'presentation/assets',
    filename: '[name].js',
    publicPath: 'assets/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader',
          ]
        }),
      },
      {
        test: /(\.css$)/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.eot(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/vnd.ms-fontobject'
      },
      {
        test: /\.woff2(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/font-woff2'
      },
      {
        test: /\.woff(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/font-ttf'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?mimetype=image/png'
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new CopyWebpackPlugin([{ from: './node_modules/reveal.js/plugin', to: 'plugin' }], {})
  ],
};
