// const { exec } = require('child_process');
import { execSync } from 'child_process';
// import os from 'os';
import path from 'path';

// const os = require('os');
// const sys = require('sys');
// import sys from 'sys';

// function puts(error, stdout) {
//   sys.puts(stdout);
// }
console.log(process.platform);
console.warn(`This platform is ${process.platform}`);
// Run command depending on the OS
if (process.platform === 'linux') {
  execSync('(cd .. && sudo apt-get install libsecret-1-dev)', {
    cwd: path.join(__dirname, '..', '..', 'app'),
    stdio: 'inherit',
  });
}
// else if (process.platform === 'darwin') {
//   console.log('*******all good*********');
// }
// else if (os.type() === 'Windows_NT') {
//   execSync('node build-windows.js', puts);
// } else {
//   throw new Error(`Unsupported OS found: ${os.type()}`);
// }
