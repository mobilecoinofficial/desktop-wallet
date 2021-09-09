import * as fs from 'fs';

import { ipcMain } from 'electron';

const FILENAME = `/tmp/desktop_wallet_${new Date().toISOString().substring(0, 10)}.log`;
const logStream = fs.createWriteStream(FILENAME, { flags: 'a' });

let mainWindow: Electron.BrowserWindow;

const readLog = (): string => fs.readFileSync(FILENAME, { encoding: 'utf8', flag: 'r' });

const writeLog = (msg: string, lvl = 'INFO'): void => {
  if (!mainWindow) {
    throw new Error('Logger was not initialized');
  } else {
    const output = `${lvl.padEnd(8)} ${new Date().toISOString()} ${msg}`;
    logStream.cork();
    logStream.write(output);
    logStream.write('\n');
    process.nextTick(() => logStream.uncork());
    console.log('>>>>>>>>>>>>>', output); // eslint-disable-line no-console
  }
};

const initLog = (mw: Electron.BrowserWindow): void => {
  mainWindow = mw;
  writeLog('INITIALIZING LOGGER');

  ipcMain.on('logger', (_event, data) => {
    const obj = JSON.parse(data);
    writeLog(obj.msg, obj.lvl);
  });

  ipcMain.on('get-error-log', (event) => {
    // eslint-disable-next-line no-param-reassign
    event.returnValue = readLog();
  });

  mainWindow.on('closed', () => writeLog('CLOSING LOGGER'));
};

export { initLog, writeLog, readLog };
