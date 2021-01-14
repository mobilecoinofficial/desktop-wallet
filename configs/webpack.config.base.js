/**
 * Base webpack config used across other specific configs
 */

import path from 'path';

import webpack from 'webpack';

import { dependencies as externals } from '../app/package.json';

// const CopyWebpackPlugin = require('copy-webpack-plugin');
// module.exports = {
//   /**
//    * This is the main entry point for your application, it's the first file
//    * that runs in the main process.
//    */
//   // entry: './src/index.js',
//   // Put your normal webpack config below here
//   // module: {
//   //   rules: require('./webpack.rules'),
//   // },
//   plugins: [new CopyWebpackPlugin([{ from: 'app/protos', to: 'protos' }])],
//   resolve: {
//     extensions: ['.ts', '.js', '.json'],
//   },
// };

export default {
  externals: [...Object.keys(externals || {})],

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '..', 'app'),
    // https://github.com/webpack/webpack/issues/1114
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),

    new webpack.NamedModulesPlugin(),

    // new webpack.CopyWebpackPlugin([{ from: 'app/protos', to: 'protos' }]),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.join(__dirname, '..', './protos/*.proto'),
    //       to: 'protos/[name].[ext]',
    //     },
    //   ],
    // }),
  ],

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [path.join(__dirname, '..', 'app'), 'node_modules'],
  },
};
