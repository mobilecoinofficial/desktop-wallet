/* eslint-disable no-console */
import { app } from 'electron';
import { autoUpdater } from 'electron-updater';

const myLog = (st: string) => {
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
  console.log(st);
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
};

if (process.env.NODE_ENV === 'production') {
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
  app.on('ready', () => autoUpdater.checkForUpdatesAndNotify());
} else {
  myLog('AUTOUPDATER NOT ENABLED');
}
