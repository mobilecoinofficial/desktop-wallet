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
import path from 'path';

import { app, BrowserWindow, ipcMain } from 'electron';
import log from 'electron-log';
import { autoUpdater } from 'electron-updater';

import config from '../configs/app.config';
import { INITIAL_WINDOW_HEIGHT, MIN_WINDOW_HEIGHT, MIN_WINDOW_WIDTH } from './constants/app';
import getPlatform from './get-platform';
import i18n from './i18next.config';
import menuFactoryService from './menuFactory';
import LocalStore from './utils/LocalStore';

import './utils/autoupdate';

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

const LocalStoreInstance = new LocalStore();

const installExtensions = async () => {
  // eslint-disable-next-line
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = [
    /* 'REACT_DEVELOPER_TOOLS', */
    /* , 'REDUX_DEVTOOLS' */
  ];

  return Promise.all(
    extensions.map((name) => {
      return installer.default(installer[name], forceDownload);
    })
  ).catch(console.log);
};

const spawnMobilecoind = () => {
  // Start the mobilecoind process in the background
  const IS_PROD = process.env.NODE_ENV === 'production';
  const root = process.cwd();
  const { isPackaged } = app;

  const platform = getPlatform() || '';
  const binariesPath =
    IS_PROD && isPackaged
      ? path.join(process.resourcesPath, '..', 'mobilecoind-bin', platform)
      : path.join(root, 'mobilecoind-bin', platform);

  console.log('Looking for binary in', binariesPath);
  const execPath = path.resolve(path.join(binariesPath, './start-mobilecoind.sh'));
  // Determine mobilecoind path and store for config view
  const userDataPath = app.getPath('userData');
  const ledgerDbPath = path.normalize(path.join(userDataPath, 'mobilecoind', 'ledger-db')); // escape spaces in mac and linux (change logic for windows)
  const mobilecoindDbPath = path.normalize(
    path.join(userDataPath, 'mobilecoind', 'transaction-db')
  ); // escape spaces in mac and linux (change logic for windows)

  console.log('userDataPath', userDataPath);
  console.log('ledgerDbPath', ledgerDbPath);
  console.log('mobilecoindDbPath', mobilecoindDbPath);
  LocalStoreInstance.setLedgerDbPath(ledgerDbPath);
  LocalStoreInstance.setMobilecoindDbPath(mobilecoindDbPath);
  spawn(execPath, [ledgerDbPath, mobilecoindDbPath], {});
};

const createWindow = async () => {
  if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'resources')
    : path.join(__dirname, '../resources');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    height: INITIAL_WINDOW_HEIGHT,
    icon: getAssetPath('icon.png'),
    minHeight: MIN_WINDOW_HEIGHT,
    minWidth: MIN_WINDOW_WIDTH,
    show: false,
    webPreferences:
      (process.env.NODE_ENV === 'development' || process.env.E2E_BUILD === 'true') &&
      process.env.ERB_SECURE !== 'true'
        ? {
            disableBlinkFeatures: 'Auxclick',
            enableRemoteModule: true,
            nodeIntegration: true,
          }
        : {
            contextIsolation: true,
            disableBlinkFeatures: 'Auxclick',
            enableRemoteModule: true,
            nodeIntegration: false,
            nodeIntegrationInWorker: false,
            preload: path.join(__dirname, 'dist/renderer.prod.js'),
          },
    width: 700,
  });

  // Reject all session permission requests from remote content
  mainWindow.webContents.session.setPermissionRequestHandler(
    (_webContents, _permission, callback) => {
      return callback(false);
    }
  );

  mainWindow.webContents.session.setPermissionCheckHandler(() => {
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

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  i18n.on('loaded', () => {
    i18n.changeLanguage('en-US');
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
    .catch(() => {
      return null;
    });
} else {
  app.on('ready', () => {
    spawnMobilecoind();
    createWindow();
  });
}

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  // NOTE: we do not want to respawn mobilecoind in this case.
  if (mainWindow === null) {
    createWindow();
  }
});

/**
 * Add custom message listeners...
 */

ipcMain.on('close-app', () => {
  app.quit();
});

ipcMain.on('reset-ledger', () => {
  const ledgerDbPath = LocalStoreInstance.getLedgerDbPath();
  const mobilecoindDbPath = LocalStoreInstance.getMobilecoindDbPath();

  console.log('killing mobilecoind');
  exec('pkill -f mobilecoind');

  // Explicitly only delete db files. No rm -r
  exec(`rm "${ledgerDbPath}/data.mdb"`);
  exec(`rm "${ledgerDbPath}/lock.mdb"`);
  exec(`rm "${mobilecoindDbPath}/data.mdb"`);
  exec(`rm "${mobilecoindDbPath}/lock.mdb"`);
  app.relaunch(); // does not trigger until app quits or exits
  app.exit(); // exits without before-quit and will-quit
});

ipcMain.on('get-initial-translations', (event) => {
  i18n.loadLanguages('en-US', () => {
    const initial = {
      en: {
        translation: i18n.getResourceBundle('en-US', config.namespace),
      },
    };

    // eslint-disable-next-line no-param-reassign
    event.returnValue = initial;
  });
});

const shutDownMobilecoind = () => {
  const leaveMobilecoindRunning = LocalStoreInstance.getLeaveMobilecoindRunning();
  console.log('Leave mobilecoind running:', leaveMobilecoindRunning);
  if (!leaveMobilecoindRunning) {
    exec('pkill -f mobilecoind');
  }
};

app.on('will-quit', () => {
  shutDownMobilecoind();
});

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
