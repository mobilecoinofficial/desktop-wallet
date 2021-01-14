const path = require('path');

require('@babel/register')({
  cwd: path.join(__dirname, '..', '..'),
  extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx'],
});
