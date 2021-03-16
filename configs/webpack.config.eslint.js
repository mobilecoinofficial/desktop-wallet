/* eslint import/no-unresolved: off, import/no-self-import: off */
require('@babel/register');

// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = require('./webpack.config.renderer.dev.babel').default;
