const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/module.js',
  output: {
    path: path.resolve('lib'),
    filename: 'module.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};