import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

import { dependencies } from '../../app/package.json';

const nodeModulesPath = path.join(__dirname, '..', '..', 'app', 'node_modules');

if (Object.keys(dependencies || {}).length > 0 && fs.existsSync(nodeModulesPath)) {
  Object.getOwnPropertyNames(dependencies).forEach((val) => {
    const electronRebuildCmd = `../node_modules/.bin/electron-rebuild -s -f --types prod,dev,optional --module-dir ./node_modules/${val}`;
    const cmd =
      process.platform === 'win32' ? electronRebuildCmd.replace(/\//g, '\\') : electronRebuildCmd;
    execSync(cmd, {
      cwd: path.join(__dirname, '..', '..', 'app'),
      stdio: 'inherit',
    });
  });
}
