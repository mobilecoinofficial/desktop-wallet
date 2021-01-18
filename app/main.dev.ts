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

import { MIN_WINDOW_HEIGHT, MIN_WINDOW_WIDTH } from './constants/app';
import getPlatform from './get-platform';
import MenuBuilder from './menu';
import LocalStore from './utils/LocalStore';

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (
  process.env.NODE_ENV === 'development'
  || process.env.DEBUG_PROD === 'true'
) {
  require('electron-debug')();
}

const LocalStoreInstance = new LocalStore();

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

  return Promise.all(
    extensions.map((name) => {
      return installer.default(installer[name], forceDownload);
    }),
  ).catch(console.log);
};

// TODO: remane this function to full service after intergration
// TODO: test
const spawnAPIBinaries = () => {
  // Start the mobilecoind & full service process in the background
  const IS_PROD = process.env.NODE_ENV === 'production';
  const root = process.cwd();
  const { isPackaged } = app;

  // TODO move these strings into constants/
  const platform = getPlatform() || '';
  const mobilecoindBinariesPath = IS_PROD && isPackaged
    ? path.join(process.resourcesPath, '..', 'mobilecoind-bin', platform)
    : path.join(root, 'mobilecoind-bin', platform);
  const fullServiceBinariesPath = IS_PROD && isPackaged
    ? path.join(process.resourcesPath, '..', 'full-service-bin', platform)
    : path.join(root, 'full-service-bin', platform);

  // console.log('Looking for mobilecoind binary in', mobilecoindBinariesPath);
  const mobilecoindExecPath = path.resolve(
    path.join(mobilecoindBinariesPath, './start-mobilecoind.sh'),
  );
  console.log('Looking for Full Service binary in', fullServiceBinariesPath);
  const fullServiceExecPath = path.resolve(
    path.join(fullServiceBinariesPath, './start-full-service.sh'),
  );

  // Determine mobilecoind path and store for config view
  const userDataPath = app.getPath('userData');
  const ledgerMobilecoindDbPath = path.normalize(
    path.join(userDataPath, 'mobilecoind', 'ledger-db'),
  ); // escape spaces in mac and linux (change logic for windows)
  const mobilecoindDbPath = path.normalize(
    path.join(userDataPath, 'mobilecoind', 'transaction-db'),
  ); // escape spaces in mac and linux (change logic for windows)
  const ledgerFullServiceDbPath = path.normalize(
    path.join(userDataPath, 'full-service', 'ledger-db'),
  ); // escape spaces in mac and linux (change logic for windows)
  const fullServiceDbPath = path.normalize(
    path.join(userDataPath, 'full-service', 'wallet-db'),
  ); // escape spaces in mac and linux (change logic for windows)

  // TODO - delete the console logs
  // console.log('ledgerMobilecoindDbPath', ledgerMobilecoindDbPath);
  // console.log('mobilecoindDbPath', mobilecoindDbPath);
  console.log('ledgerFullServiceDbPath', ledgerFullServiceDbPath);
  console.log('fullServiceDbPath', fullServiceDbPath);
  LocalStoreInstance.setDbPaths(
    ledgerMobilecoindDbPath,
    mobilecoindDbPath,
    ledgerFullServiceDbPath,
    fullServiceDbPath,
  );
  spawn(mobilecoindExecPath, [ledgerMobilecoindDbPath, mobilecoindDbPath], {});
  spawn(
    fullServiceExecPath,
    [ledgerFullServiceDbPath, fullServiceDbPath, [fullServiceDbPath, 'wallet.db'].join('/')],
    {},
  );
};

const createWindow = async () => {
  if (
    process.env.NODE_ENV === 'development'
    || process.env.DEBUG_PROD === 'true'
  ) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'resources')
    : path.join(__dirname, '../resources');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    height: 950,
    icon: getAssetPath('icon.png'),
    minHeight: MIN_WINDOW_HEIGHT,
    minWidth: MIN_WINDOW_WIDTH,
    show: false,
    webPreferences:
      (process.env.NODE_ENV === 'development'
        || process.env.E2E_BUILD === 'true')
      && process.env.ERB_SECURE !== 'true'
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
          preload: path.join(__dirname, 'dist/renderer.prod.js'),
        },
    width: 700,
  });

  // Reject all session permission requests from remote content
  mainWindow.webContents.session.setPermissionRequestHandler(
    (_webContents, _permission, callback) => {
      return callback(false);
    },
  );

  mainWindow.webContents.session.setPermissionCheckHandler(
    (_webContents, _permission) => {
      return false;
    },
  );

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

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

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
  // eslint-disable-next-line promise/catch-or-return
  app.whenReady().then(createWindow);
} else {
  app.on('ready', () => {
    spawnAPIBinaries();
    createWindow();
  });
}

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  // NOTE: we do not want to respawn mobilecoind in this case.
  if (mainWindow === null) createWindow();
});

/**
 * Add custom message listeners...
 */

ipcMain.on('close-app', () => {
  app.quit();
});

ipcMain.on('reset-ledger', () => {
  const ledgerDbPath = LocalStoreInstance.getMobilecoindLedgerDbPath();
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

const shutDownMobilecoind = () => {
  const leaveMobilecoindRunning = LocalStoreInstance.getLeaveMobilecoindRunning();
  console.log('Leave mobilecoind running:', leaveMobilecoindRunning);
  if (!leaveMobilecoindRunning) exec('pkill -f mobilecoind');
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

app.on('remote-get-current-window', (event, _webContents) => {
  event.preventDefault();
});

app.on('remote-get-current-web-contents', (event, _webContents) => {
  event.preventDefault();
});

// Verify webView options before creation
app.on('web-contents-created', (_event, contents) => {
  contents.on('will-attach-webview', (event, webPreferences, params) => {
    // Strip away preload scripts if unused or verify their location is legitimate
    delete webPreferences.preload;
    delete webPreferences.preloadURL;

    // Disable Node.js integration
    webPreferences.nodeIntegration = false;

    // Verify URL being loaded
    if (!params.src.startsWith('https://mobilecoin.com/')) {
      event.preventDefault();
    }
  });
});

// Explicitly set allowRendererProcessReuse
app.allowRendererProcessReuse = true;
