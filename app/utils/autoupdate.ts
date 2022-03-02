/* eslint-disable no-console */
import { app, BrowserWindow } from 'electron';
import { autoUpdater } from 'electron-updater';

const autoUpdateEnabled = process.env.NODE_ENV === 'production';

export const initializeAutoUpdater = (): void => {
  const myLog = (st: string) => {
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
    console.log(st);
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
  };

  if (autoUpdateEnabled) {
    myLog('AUTOUPDATER ENABLED');

    autoUpdater.on('checking-for-update', () => myLog('Checking for update...'));
    autoUpdater.on('update-available', () => myLog('Update available.'));
    autoUpdater.on('update-not-available', () => myLog('Update not available.'));
    autoUpdater.on('error', (err) => myLog(`Error in auto-updater: ${err}`));
    autoUpdater.on('download-progress', (pg) =>
      myLog(`Downloaded ${pg.transferred}/${pg.total} ${pg.percent}%`)
    );
    autoUpdater.on('update-downloaded', () => myLog('Update downloaded'));

    app.on('window-all-closed', () => app.quit());
  } else {
    myLog('AUTOUPDATER NOT ENABLED');
  }
};

export const checkForAppUpdates = async (appWindow: BrowserWindow | null): Promise<void> => {
  autoUpdater.on('update-downloaded', () => {
    appWindow?.webContents.send('app-update-ready');
    clearInterval(checkInterval);
  });

  const checkInterval = setInterval(async () => {
    if (autoUpdateEnabled) {
      await autoUpdater.checkForUpdates();
    }
  }, 1000 * 60 * 60); // one hour milliseconds
};
