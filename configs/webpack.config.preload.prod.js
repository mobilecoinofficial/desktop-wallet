const path = require('path');
const { fileURLToPath } = require('url');

const externals = require('../app/package.json').dependencies;

module.exports = {
  mode: 'production',
  target: 'electron-preload',
  externals: [...Object.keys(externals || {})],
  entry: './app/preload.ts',
  output: {
    filename: 'preload.js',
    path: path.resolve(__dirname, '../app/dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};