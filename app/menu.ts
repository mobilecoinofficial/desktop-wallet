import { app, Menu, shell, BrowserWindow, MenuItemConstructorOptions } from 'electron';

import i18n from './i18n-node';

// eslint-disable-next-line no-underscore-dangle
const t = (x: string) => i18n.__(`Menu.${x}`);

interface DarwinMenuItemConstructorOptions extends MenuItemConstructorOptions {
  selector?: string;
  submenu?: DarwinMenuItemConstructorOptions[] | Menu;
}

export default class MenuBuilder {
  mainWindow: BrowserWindow;

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  buildMenu(): Menu {
    if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
      this.setupDevelopmentEnvironment();
    } else {
      this.setupProductionEnvironment();
    }

    const template =
      process.platform === 'darwin' ? this.buildDarwinTemplate() : this.buildDefaultTemplate();

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    return menu;
  }

  setupDevelopmentEnvironment(): void {
    this.mainWindow.webContents.on('context-menu', (_, props) => {
      const { x, y } = props;

      Menu.buildFromTemplate([
        {
          click: () => this.mainWindow.webContents.inspectElement(x, y),
          label: t('inspectElement'),
        },
        {
          click: () => this.mainWindow.webContents.cut(),
          label: t('cut'),
        },
        {
          click: () => this.mainWindow.webContents.copy(),
          label: t('copy'),
        },
        {
          click: () => this.mainWindow.webContents.paste(),
          label: t('paste'),
        },
      ]).popup({ window: this.mainWindow });
    });
  }

  setupProductionEnvironment(): void {
    this.mainWindow.webContents.on('context-menu', () => {
      Menu.buildFromTemplate([
        {
          click: () => this.mainWindow.webContents.cut(),
          label: t('cut'),
        },
        {
          click: () => this.mainWindow.webContents.copy(),
          label: t('copy'),
        },
        {
          click: () => this.mainWindow.webContents.paste(),
          label: t('paste'),
        },
      ]).popup({ window: this.mainWindow });
    });
  }

  buildDarwinTemplate(): MenuItemConstructorOptions[] {
    const subMenuAbout: DarwinMenuItemConstructorOptions = {
      label: t('mobileCoin'),
      submenu: [
        {
          label: t('about'),
          selector: 'orderFrontStandardAboutPanel:',
        },
        { type: 'separator' },
        {
          accelerator: 'Command+H',
          label: t('hideWallet'),
          selector: 'hide:',
        },
        {
          accelerator: 'Command+Shift+H',
          label: t('hideOthers'),
          selector: 'hideOtherApplications:',
        },
        { label: t('showAll'), selector: 'unhideAllApplications:' },
        { type: 'separator' },
        {
          accelerator: 'Command+Q',
          click: () => app.quit(),
          label: t('quit'),
        },
      ],
    };

    const subMenuEdit: DarwinMenuItemConstructorOptions = {
      label: t('edit'),
      submenu: [
        { accelerator: 'Command+Z', label: t('undo'), selector: 'undo:' },
        { accelerator: 'Shift+Command+Z', label: t('redo'), selector: 'redo:' },
        { type: 'separator' },
        { accelerator: 'Command+X', label: t('cut'), selector: 'cut:' },
        { accelerator: 'Command+C', label: t('copy'), selector: 'copy:' },
        { accelerator: 'Command+V', label: t('paste'), selector: 'paste:' },
        { accelerator: 'Command+A', label: t('selectAll'), selector: 'selectAll:' },
      ],
    };

    const subMenuViewDev: MenuItemConstructorOptions = {
      label: t('view'),
      submenu: [
        {
          accelerator: 'Command+R',
          click: () => this.mainWindow.webContents.reload(),
          label: t('reload'),
        },
        {
          accelerator: 'Ctrl+Command+F',
          click: () => this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen()),
          label: t('toggleFullScreen'),
        },
        {
          accelerator: 'Alt+Command+I',
          click: () => this.mainWindow.webContents.toggleDevTools(),
          label: t('toggleDeveloperTools'),
        },
      ],
    };

    const subMenuViewProd: MenuItemConstructorOptions = {
      label: t('view'),
      submenu: [
        {
          accelerator: 'Ctrl+Command+F',
          click: () => this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen()),
          label: t('toggleFullScreen'),
        },
      ],
    };

    const subMenuWindow: DarwinMenuItemConstructorOptions = {
      label: t('window'),
      submenu: [
        { accelerator: 'Command+M', label: t('minimize'), selector: 'performMiniaturize:' },
        { accelerator: 'Command+W', label: t('close'), selector: 'performClose:' },
        { type: 'separator' },
        { label: t('bringToFront'), selector: 'arrangeInFront:' },
      ],
    };

    const subMenulearnMore: MenuItemConstructorOptions = {
      label: t('learnMore'),
      submenu: [
        {
          click: () => shell.openExternal('https://github.com/mobilecoinofficial'),
          label: t('learnMoreGithub'),
        },
        {
          click: () => shell.openExternal('https://github.com/mobilecoinfoundation/mobilecoin'),
          label: t('learnMoreFoundationGithub'),
        },
        {
          click: () => shell.openExternal('https://community.mobilecoin.foundation/'),
          label: t('learnMoreCommunityForum'),
        },
        {
          click: () => shell.openExternal('https://mobilecoin.foundation/get-involved'),
          label: t('learnMoreMobileCoinFoundation'),
        },
      ],
    };

    const subMenuView =
      process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true'
        ? subMenuViewDev
        : subMenuViewProd;

    return [subMenuAbout, subMenuEdit, subMenuView, subMenuWindow, subMenulearnMore];
  }

  buildDefaultTemplate(): MenuItemConstructorOptions[] {
    const templateDefault = [
      {
        label: t('file'),
        submenu: [
          {
            accelerator: 'Ctrl+O',
            label: t('open'),
          },
          {
            accelerator: 'Ctrl+W',
            click: () => this.mainWindow.close(),
            label: t('close'),
          },
        ],
      },
      {
        label: t('view'),
        submenu:
          process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true'
            ? [
                {
                  accelerator: 'Ctrl+R',
                  click: () => this.mainWindow.webContents.reload(),
                  label: t('reload'),
                },
                {
                  accelerator: 'F11',
                  click: () => this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen()),
                  label: t('toggleFullScreen'),
                },
                {
                  accelerator: 'Alt+Ctrl+I',
                  click: () => this.mainWindow.webContents.toggleDevTools(),
                  label: t('toggleDeveloperTools'),
                },
              ]
            : [
                {
                  accelerator: 'F11',
                  click: () => this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen()),
                  label: t('toggleFullScreen'),
                },
              ],
      },
      {
        label: t('learnMore'),
        submenu: [
          {
            click: () => shell.openExternal('https://github.com/mobilecoinofficial'),
            label: t('learnMoreGithub'),
          },
          {
            click: () => shell.openExternal('https://github.com/mobilecoinfoundation/mobilecoin'),
            label: t('learnMoreFoundationGithub'),
          },
          {
            click: () => shell.openExternal('https://community.mobilecoin.foundation/'),
            label: t('learnMoreCommunityForum'),
          },
          {
            click: () => shell.openExternal('https://mobilecoin.foundation/get-involved'),
            label: t('learnMoreMobileCoinFoundation'),
          },
        ],
      },
    ];
    return templateDefault;
  }
}
