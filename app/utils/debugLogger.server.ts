/* eslint-disable sort-keys */
import fs from 'fs';

import { app, BrowserWindow } from 'electron';
import openFileExplorer from 'open-file-explorer';

const pathToLogs = app.getPath('logs');
let increment = 0;
while (fs.existsSync(`${pathToLogs}/log.log.${increment}`)) {
  increment += 1;
}
const pathToCurrentLog = `${pathToLogs}/log.log.${increment}`;

const logger = fs.createWriteStream(pathToCurrentLog, { flags: 'a' });

const logMessage = (msg: string): void => {
  const debugLog = {
    name: 'log',
    pid: process.pid,
    time: new Date().toISOString(),
    msg,
  };

  logger.write(JSON.stringify(debugLog));
};

const openDebugLogsModal = (mainWindow: BrowserWindow): void => {
  mainWindow.webContents.send('open-debug-logs-modal');
};

const getLogForCurrentSession = (): string => {
  return fs.readFileSync(pathToCurrentLog).toString();
};

const openLogsFolder = (): void => {
  openFileExplorer(pathToLogs, (err?: Error) => {
    if (err) {
      logMessage('error opening file directory');
    }
  });
};

export default { getLogForCurrentSession, logMessage, openDebugLogsModal, openLogsFolder };
