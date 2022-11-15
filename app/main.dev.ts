/* eslint global-require: off, no-console: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `yarn build` or `yarn build-main`, this file is compiled to
 * `./app/main.prod.js` using webpack. This gives us some performance wins.
 */

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { exec, spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

import { app, BrowserWindow, dialog, ipcMain, nativeTheme, screen, shell } from 'electron';
import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
} from 'electron-devtools-installer';
import log from 'electron-log';
import { autoUpdater } from 'electron-updater';
import keytar from 'keytar';
import snakeCaseKeys from 'snakecase-keys';

import config from '../configs/app.config';
import { INITIAL_WINDOW_HEIGHT, MIN_WINDOW_HEIGHT, MIN_WINDOW_WIDTH } from './constants/app';
import languages from './constants/languages';
import i18n from './i18next.config';
import menuFactoryService from './menuFactory';
import * as localStore from './utils/LocalStore';
import { checkForAppUpdates, initializeAutoUpdater } from './utils/autoupdate';
import { initLog, writeLog } from './utils/logger';

initializeAutoUpdater();

// Kill any instance of full service running when starting the app. This will make sure
// that the app starts with the correct version of full service when there is an update.
exec('pkill -f full-service');

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

// ESLint will warn about any use of eval()
// eslint-disable-next-line
global.eval = function () {
  throw new Error('Sorry, this app does not support window.eval().');
};

let mainWindow: BrowserWindow | null = null;

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
  // eslint-disable-next-line
  require('electron-debug')();
}

let syncStatus = ''; // For the app to update, via ipcRenderer.send(...)
let networkStatus = '';

// TODO: rename this function to full service after integration
// TODO: test
const startFullService = (
  password: string,
  newPassword: string | null,
  startInOfflineMode: boolean
): void => {
  // Start the full-service process in the background
  const fullServiceBinariesPath = localStore.getFullServiceBinariesPath();
  const fullServiceLedgerDBPath = localStore.getLedgerDbPath();
  const fullServiceWalletDBPath = localStore.getFullServiceDbPath();

  console.log('Looking for Full Service binary in', fullServiceBinariesPath);
  console.log(`Offline Mode: ${startInOfflineMode}`);
  networkStatus = startInOfflineMode ? 'OFFLINE' : 'ONLINE';
  const fullServiceExecPath = startInOfflineMode
    ? path.resolve(path.join(fullServiceBinariesPath, './start-full-service-offline.sh'))
    : path.resolve(path.join(fullServiceBinariesPath, './start-full-service.sh'));

  const options: { [k: string]: { [j: string]: string } } = {
    env: {
      ...process.env,
      MC_PASSWORD: password,
    },
  };

  if (newPassword != null) {
    options.env.MC_CHANGED_PASSWORD = newPassword;
  }

  console.log('PATH', fullServiceExecPath);

  spawn(
    fullServiceExecPath,
    [
      fullServiceLedgerDBPath,
      fullServiceWalletDBPath,
      [fullServiceWalletDBPath, 'wallet.db'].join('/'),
      localStore.getAPIKey(),
    ],
    options
  );
};

const setFullServiceBinariesPath = (): void => {
  const IS_PROD = process.env.NODE_ENV === 'production';
  const { isPackaged } = app;
  const root = process.cwd();

  // TODO move these strings into constants/
  const fullServiceBinariesPath =
    IS_PROD && isPackaged
      ? path.join(process.resourcesPath, '..', 'full-service-bin')
      : path.join(root, 'full-service-bin');

  console.log('fullServiceBinariesPath', fullServiceBinariesPath);
  localStore.setFullServiceBinariesPath(fullServiceBinariesPath);
};

setFullServiceBinariesPath();

const setFullServiceDbPaths = (): void => {
  const userDataPath = app.getPath('userData');
  const ledgerFullServiceDbPath = path.normalize(
    path.join(userDataPath, 'full-service', 'ledger-db')
  );
  const fullServiceDbPath = path.normalize(path.join(userDataPath, 'full-service', 'wallet-db'));

  console.log('ledgerFullServiceDbPath', ledgerFullServiceDbPath);
  console.log('fullServiceDbPath', fullServiceDbPath);

  localStore.setFullServiceDbPath(fullServiceDbPath);
  localStore.setLedgerDbPath(ledgerFullServiceDbPath);
};

setFullServiceDbPaths();

const createWindow = async () => {
  if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;

    // @ts-ignore: as of type version 2.2.0 the typing of this packages is out of date.
    // installExtensions takes a second param of type undefined, boolean (forceDownload only), or object
    installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS], {
      forceDownload,
      loadExtensionOptions: { allowFileAccess: true },
    })
      .then((name: string) => console.log(`added extension: ${name}`))
      .catch((err: any) => console.log('an error occured: ', err));
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'resources')
    : path.join(__dirname, '../resources');

  const getAssetPath = (...paths: string[]): string => path.join(RESOURCES_PATH, ...paths);
  const { height } = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    height: height < INITIAL_WINDOW_HEIGHT ? height : INITIAL_WINDOW_HEIGHT,
    icon: getAssetPath('icon.png'),
    minHeight: MIN_WINDOW_HEIGHT,
    minWidth: MIN_WINDOW_WIDTH,
    show: false,
    webPreferences:
      (process.env.NODE_ENV === 'development' || process.env.E2E_BUILD === 'true') &&
      process.env.ERB_SECURE !== 'true'
        ? {
            contextIsolation: false,
            disableBlinkFeatures: 'Auxclick',
            nodeIntegration: true,
          }
        : {
            contextIsolation: true,
            disableBlinkFeatures: 'Auxclick',
            nodeIntegration: false,
            nodeIntegrationInWorker: false,
            preload: path.join(__dirname, 'dist/renderer.prod.js'),
          },
    width: 700,
  });

  mainWindow.webContents.session.setPermissionRequestHandler(
    (_webContents, _permission, callback, details) => {
      if (details.mediaTypes?.includes('video')) {
        // Approves the video permissions request
        return callback(true);
      }
      // Reject all other session permission requests from remote content
      return callback(false);
    }
  );

  mainWindow.webContents.session.setPermissionCheckHandler((_webContents, permission) => {
    if (permission === 'media') {
      return true;
    }
    return false;
  });

  mainWindow.loadURL(`file://${__dirname}/app.html`);

  // @TODO: Use 'ready-to-show' event
  //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
      mainWindow.focus();
    }
  });

  mainWindow.webContents.on('will-navigate', (event, newURL) => {
    const parsedUrl = new URL(newURL);
    if (parsedUrl.origin !== 'https://mobilecoin.com') {
      event.preventDefault();
    }
  });

  mainWindow.on('close', () => {
    if (networkStatus === 'OFFLINE') {
      localStore.setLeaveFullServiceRunning(false);
    } else {
      const leaveFullServiceRunning = localStore.getLeaveFullServiceRunning();
      if (syncStatus !== 'SYNCED' && !leaveFullServiceRunning) {
        const choice = dialog.showMessageBoxSync(mainWindow as BrowserWindow, {
          buttons: [i18n.t('CloseApp.yes'), i18n.t('CloseApp.no')],
          message: i18n.t('CloseApp.explain'),
          title: i18n.t('CloseApp.confirm'),
          type: 'question',
        });
        localStore.setLeaveFullServiceRunning(choice === 0);
      }
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  initLog(mainWindow);

  i18n.on('loaded', () => {
    i18n.changeLanguage(languages.EN_US);
    i18n.off('loaded');
  });

  i18n.on('languageChanged', (language: string) => {
    menuFactoryService.buildMenu(app, mainWindow, i18n);
    mainWindow?.webContents.send('language-changed', {
      language,
      namespace: 'translation',
      resource: i18n.getResourceBundle(language, config.namespace),
    });
  });

  if (!i18n.hasResourceBundle(config.fallbackLng, config.namespace)) {
    i18n.addResourceBundle(
      config.fallbackLng,
      config.namespace,
      i18n.getResourceBundle(config.fallbackLng, config.namespace)
    );
  }

  menuFactoryService.buildMenu(app, mainWindow, i18n);

  nativeTheme.on('updated', () => {
    mainWindow?.webContents.send(
      nativeTheme.shouldUseDarkColors ? 'set-theme-dark' : 'set-theme-light'
    );
  });

  nativeTheme.themeSource = (localStore.getTheme() as 'system' | 'light' | 'dark') ?? 'system';

  // FK see also line 270, and AuthPage.presenter.tsx line 94
  ipcMain.handle(
    'start-full-service',
    (_, password: string, newPassword: string | null, startInOfflineMode: boolean) => {
      console.log('STARTING SERVICE');
      localStore.setOfflineStart(startInOfflineMode);
      startFullService(password, newPassword, startInOfflineMode);
      return 'Service started';
    }
  );

  ipcMain.on('get-theme', (event) => {
    // eslint-disable-next-line no-param-reassign
    event.returnValue = nativeTheme.shouldUseDarkColors ? 'dark' : 'light';
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

if (process.env.E2E_BUILD === 'true') {
  /*
  // eslint-disable-next-line promise/catch-or-return
  */
  app
    .whenReady()
    .then(createWindow)
    .catch(() => null);
} else {
  app.on('ready', () => {
    createWindow();
    checkForAppUpdates(mainWindow);
  });
}

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  // NOTE: we do not want to respawn full-service in this case.
  if (mainWindow === null) {
    createWindow();
  }
});

/**
 * Add custom message listeners...
 */

ipcMain.on('close-app', () => app.quit());

ipcMain.on('network-status', (_e, status) => {
  console.log('SETTING NETWORK STATUS', status);
  networkStatus = status;
});

ipcMain.on('sync-status', (_e, status) => {
  syncStatus = status;
});

ipcMain.handle('save-tx-confirmation', (_, txConfirmationText) => {
  const options = {
    defaultPath: `${app.getPath('documents')}/txConfirmation.json`,
  };

  const txConfirmationPath = dialog.showSaveDialogSync(mainWindow, options);
  if (txConfirmationPath === undefined) {
    return false;
  }

  fs.writeFileSync(txConfirmationPath, txConfirmationText);

  return true;
});

ipcMain.handle('load-tx-confirmation', () => {
  const options = {};

  const txConfirmationPath = dialog.showOpenDialogSync(mainWindow, options);
  if (txConfirmationPath === undefined || txConfirmationPath.length === 0) {
    return undefined;
  }

  const fileText = fs.readFileSync(txConfirmationPath[0]);
  return fileText.toString();
});

ipcMain.on('reset-ledger', () => {
  const ledgerDbPath = localStore.getFullServiceLedgerDbPath();

  console.log('KILLING SERVICE');
  // TODO -- probably should make the binaries a little more specific
  // e.g., mobilecoin-full-service
  exec('pkill -f full-service');

  // Explicitly only delete db files. No rm -r
  exec(`rm "${ledgerDbPath}/data.mdb"`);
  exec(`rm "${ledgerDbPath}/lock.mdb"`);
  app.relaunch(); // does not trigger until app quits or exits
  app.exit(); // exits without before-quit and will-quit
});

ipcMain.on('reset-wallet-db', () => {
  const walletDbPath = localStore.getFullServiceDbPath();
  console.log('KILLING SERVICE');
  exec('pkill -f full-service');
  fs.rmdirSync(walletDbPath, { recursive: true });
  app.relaunch();
  app.exit();
});

ipcMain.on('kill-full-service', () => {
  exec('pkill -f full-service');
});

ipcMain.handle('export-ledger-db', () => {
  const filePath = dialog.showSaveDialogSync(mainWindow, { defaultPath: 'data.mdb' });

  if (filePath === undefined) {
    return false;
  }

  const ledgerDbPath = localStore.getFullServiceLedgerDbPath();
  fs.copyFileSync(`${ledgerDbPath}/data.mdb`, filePath);

  return true;
});

ipcMain.handle('import-ledger-db', () => {
  const filePath = dialog.showOpenDialogSync(mainWindow);

  if (filePath === undefined || filePath.length === 0) {
    return false;
  }

  const ledgerDbPath = localStore.getFullServiceLedgerDbPath();
  exec('pkill -f full-service');
  fs.rmSync(`${ledgerDbPath}/data.mdb`);
  fs.rmSync(`${ledgerDbPath}/lock.mdb`);
  fs.copyFileSync(filePath[0], `${ledgerDbPath}/data.mdb`);
  app.relaunch();
  app.exit();
  return true;
});

ipcMain.handle('download-json', (_event, json, title) => {
  const filePath = dialog.showSaveDialogSync(mainWindow, {
    defaultPath: `${title}.json`,
  });

  if (!filePath) {
    return false;
  }

  fs.writeFileSync(filePath, json);
  return true;
});

ipcMain.handle('save-unsigned-transaction', (_event, unsignedTx) => {
  const filePath = dialog.showSaveDialogSync(mainWindow, {
    defaultPath: 'unsigned_transaction.json',
  });

  if (!filePath) {
    return false;
  }

  fs.writeFileSync(filePath, JSON.stringify(snakeCaseKeys(unsignedTx)));
  return true;
});

ipcMain.handle('import-file', () => {
  const filePath = dialog.showOpenDialogSync(mainWindow);
  if (!filePath) {
    return false;
  }
  const fileText = fs.readFileSync(filePath[0]);
  return fileText.toString();
});

ipcMain.handle('export-transaction-history', (_event, transactionLogs) => {
  const filePath = dialog.showSaveDialogSync(mainWindow, { defaultPath: 'tx_history.csv' });

  if (filePath === undefined) {
    return false;
  }

  if (transactionLogs.transactionLogMap.length === 0) {
    return false;
  }

  const fields = Object.keys(
    transactionLogs.transactionLogMap[transactionLogs.transactionLogIds[0]]
  );
  const replacer = (key, value) => (value === null ? '' : value);

  let csv = transactionLogs.transactionLogIds.map((txLogId) =>
    fields
      .map((field) => JSON.stringify(transactionLogs.transactionLogMap[txLogId][field], replacer))
      .join('\t')
  );
  csv.unshift(fields.join('\t'));
  csv = csv.join('\r\n');
  fs.writeFileSync(filePath, csv);
  return true;
});

ipcMain.on('get-initial-translations', (event) => {
  i18n.loadLanguages(languages.EN_US, () => {
    const initial = {
      enUS: {
        translation: i18n.getResourceBundle(languages.EN_US, config.namespace),
      },
    };
    // eslint-disable-next-line no-param-reassign
    event.returnValue = initial;
  });
});

ipcMain.on('set-account', (_event, accountName, password) => {
  keytar.setPassword('MobileCoin', accountName, password);
});

ipcMain.on('fetch-accounts', (event) => {
  keytar
    .findCredentials('MobileCoin')
    // eslint-disable-next-line promise/always-return
    .then((accounts) => {
      // eslint-disable-next-line no-param-reassign
      event.returnValue = accounts;
    })
    .catch(() => {
      // eslint-disable-next-line no-param-reassign
      event.returnValue = [];
    });
});

ipcMain.on('remove-accounts', (event) => {
  keytar
    .findCredentials('MobileCoin')
    .then((accounts) =>
      accounts.forEach(({ account }) => keytar.deletePassword('MobileCoin', account))
    )
    .catch(() => {
      // eslint-disable-next-line no-param-reassign
      event.returnValue = [];
    });
});

ipcMain.on('view-path', (_event, filePath: string) => {
  shell.showItemInFolder(filePath);
});

const shutDownFullService = () => {
  const leaveFullServiceRunning = localStore.getLeaveFullServiceRunning();
  writeLog(`Leave Full-Service running: ${leaveFullServiceRunning}`);
  if (!leaveFullServiceRunning) {
    // TODO -- probably should make the binaries a little more specific
    // e.g., mobilecoin-full-service
    exec('pkill -f full-service');
  }
};

app.on('will-quit', shutDownFullService);

// Filter the remote module
const allowedModules = new Set(['electron-log']);
const allowedElectronModules = new Set(['app']);
const allowedGlobals = new Set();

app.on('remote-require', (event, _webContents, moduleName) => {
  if (!allowedModules.has(moduleName)) {
    event.preventDefault();
  }
});

app.on('remote-get-builtin', (event, _webContents, moduleName) => {
  if (!allowedElectronModules.has(moduleName)) {
    event.preventDefault();
  }
});

app.on('remote-get-global', (event, _webContents, globalName) => {
  if (!allowedGlobals.has(globalName)) {
    event.preventDefault();
  }
});

app.on('remote-get-current-window', (event) => {
  event.preventDefault();
});

app.on('remote-get-current-web-contents', (event) => {
  event.preventDefault();
});

// Verify webView options before creation
app.on('web-contents-created', (_event, contents) => {
  contents.on('will-attach-webview', (event, webPreferences, params) => {
    // Strip away preload scripts if unused or verify their location is legitimate
    // eslint-disable-next-line no-param-reassign
    delete webPreferences.preload;
    // eslint-disable-next-line no-param-reassign
    delete webPreferences.preloadURL;

    // Disable Node.js integration
    // eslint-disable-next-line no-param-reassign
    webPreferences.nodeIntegration = false;

    // Verify URL being loaded
    if (!params.src.startsWith('https://mobilecoin.com/')) {
      event.preventDefault();
    }
  });
});

// Explicitly set allowRendererProcessReuse
app.allowRendererProcessReuse = true;
