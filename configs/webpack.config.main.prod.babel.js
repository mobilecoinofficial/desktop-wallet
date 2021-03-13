/**
 * Webpack config for production electron main process
 */

import path from 'path';

import TerserPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';

import CheckNodeEnv from '../internals/scripts/CheckNodeEnv';
import DeleteSourceMaps from '../internals/scripts/DeleteSourceMaps';
import baseConfig from './webpack.config.base';

CheckNodeEnv('production');
DeleteSourceMaps();

export default merge(baseConfig, {
  devtool: process.env.DEBUG_PROD === 'true' ? 'source-map' : 'none',

  entry: './app/main.dev.ts',

  mode: 'production',

  /**
   * Disables webpack processing of __dirname and __filename.
   * If you run the bundle in node.js it falls back to these values of node.js.
   * https://github.com/webpack/webpack/issues/2010
   */
  node: {
    __dirname: false,
    __filename: false,
  },

  optimization: {
    minimizer: process.env.E2E_BUILD
      ? []
      : [
          new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: true,
          }),
        ],
  },

  output: {
    filename: './app/main.prod.js',
    path: path.join(__dirname, '..'),
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.OPEN_ANALYZER === 'true' ? 'server' : 'disabled',
      openAnalyzer: process.env.OPEN_ANALYZER === 'true',
    }),

    /**
     * Create global constants which can be configured at compile time.
     *
     * Useful for allowing different behaviour between development builds and
     * release builds
     *
     * NODE_ENV should be production so that modules do not perform certain
     * development checks
     */
    new webpack.EnvironmentPlugin({
      DEBUG_PROD: false,
      E2E_BUILD: false,
      NODE_ENV: 'production',
      START_MINIMIZED: false,
    }),
  ],

  target: 'electron-main',
});
