import { app, Menu, shell, BrowserWindow, MenuItemConstructorOptions } from 'electron';

/* TO DO: Enable this
import i18n from './i18n-main';

const t = (x: string) => i18n.t(`Menu.${x}`);
*/
/* TO DO: remove this
console.log('*********************');
console.log('Should end with !!', t('toggleDevelopersTools'));
console.log('*********************');
*/

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
          label: 'Inspect Element',
        },
        {
          click: () => this.mainWindow.webContents.cut(),
          label: 'Cut',
        },
        {
          click: () => this.mainWindow.webContents.copy(),
          label: 'Copy',
        },
        {
          click: () => this.mainWindow.webContents.paste(),
          label: 'Paste',
        },
      ]).popup({ window: this.mainWindow });
    });
  }

  setupProductionEnvironment(): void {
    this.mainWindow.webContents.on('context-menu', () => {
      Menu.buildFromTemplate([
        {
          click: () => this.mainWindow.webContents.cut(),
          label: 'Cut',
        },
        {
          click: () => this.mainWindow.webContents.copy(),
          label: 'Copy',
        },
        {
          click: () => this.mainWindow.webContents.paste(),
          label: 'Paste',
        },
      ]).popup({ window: this.mainWindow });
    });
  }

  buildDarwinTemplate(): MenuItemConstructorOptions[] {
    const subMenuAbout: DarwinMenuItemConstructorOptions = {
      label: 'MobileCoin',
      submenu: [
        {
          label: 'About MobileCoin Desktop Wallet',
          selector: 'orderFrontStandardAboutPanel:',
        },
        { type: 'separator' },
        {
          accelerator: 'Command+H',
          label: 'Hide MobileCoin Desktop Wallet',
          selector: 'hide:',
        },
        {
          accelerator: 'Command+Shift+H',
          label: 'Hide Others',
          selector: 'hideOtherApplications:',
        },
        { label: 'Show All', selector: 'unhideAllApplications:' },
        { type: 'separator' },
        {
          accelerator: 'Command+Q',
          click: () => app.quit(),
          label: 'Quit',
        },
      ],
    };

    const subMenuEdit: DarwinMenuItemConstructorOptions = {
      label: 'Edit',
      submenu: [
        { accelerator: 'Command+Z', label: 'Undo', selector: 'undo:' },
        { accelerator: 'Shift+Command+Z', label: 'Redo', selector: 'redo:' },
        { type: 'separator' },
        { accelerator: 'Command+X', label: 'Cut', selector: 'cut:' },
        { accelerator: 'Command+C', label: 'Copy', selector: 'copy:' },
        { accelerator: 'Command+V', label: 'Paste', selector: 'paste:' },
        { accelerator: 'Command+A', label: 'Select All', selector: 'selectAll:' },
      ],
    };

    const subMenuViewDev: MenuItemConstructorOptions = {
      label: 'View',
      submenu: [
        {
          accelerator: 'Command+R',
          click: () => this.mainWindow.webContents.reload(),
          label: 'Reload',
        },
        {
          accelerator: 'Ctrl+Command+F',
          click: () => this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen()),
          label: 'Toggle Full Screen',
        },
        {
          accelerator: 'Alt+Command+I',
          click: () => this.mainWindow.webContents.toggleDevTools(),
          label: 'Toggle Developer Tools',
        },
      ],
    };

    const subMenuViewProd: MenuItemConstructorOptions = {
      label: 'View',
      submenu: [
        {
          accelerator: 'Ctrl+Command+F',
          click: () => this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen()),
          label: 'Toggle Full Screen',
        },
      ],
    };

    const subMenuWindow: DarwinMenuItemConstructorOptions = {
      label: 'Window',
      submenu: [
        { accelerator: 'Command+M', label: 'Minimize', selector: 'performMiniaturize:' },
        { accelerator: 'Command+W', label: 'Close', selector: 'performClose:' },
        { type: 'separator' },
        { label: 'Bring All to Front', selector: 'arrangeInFront:' },
      ],
    };

    const subMenuLearnMore: MenuItemConstructorOptions = {
      label: 'Learn More',
      submenu: [
        {
          click: () => shell.openExternal('https://github.com/mobilecoinofficial'),
          label: 'MobileCoin Github',
        },
        {
          click: () => shell.openExternal('https://github.com/mobilecoinfoundation/mobilecoin'),
          label: 'MobileCoin Foundation Github',
        },
        {
          click: () => shell.openExternal('https://community.mobilecoin.foundation/'),
          label: 'Community Forum',
        },
        {
          click: () => shell.openExternal('https://mobilecoin.foundation/get-involved'),
          label: 'MobileCoin Foundation',
        },
      ],
    };

    const subMenuView =
      process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true'
        ? subMenuViewDev
        : subMenuViewProd;

    return [subMenuAbout, subMenuEdit, subMenuView, subMenuWindow, subMenuLearnMore];
  }

  buildDefaultTemplate(): MenuItemConstructorOptions[] {
    const templateDefault = [
      {
        label: '&File',
        submenu: [
          {
            accelerator: 'Ctrl+O',
            label: '&Open',
          },
          {
            accelerator: 'Ctrl+W',
            click: () => this.mainWindow.close(),
            label: '&Close',
          },
        ],
      },
      {
        label: '&View',
        submenu:
          process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true'
            ? [
                {
                  accelerator: 'Ctrl+R',
                  click: () => this.mainWindow.webContents.reload(),
                  label: '&Reload',
                },
                {
                  accelerator: 'F11',
                  click: () => this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen()),
                  label: 'Toggle &Full Screen',
                },
                {
                  accelerator: 'Alt+Ctrl+I',
                  click: () => this.mainWindow.webContents.toggleDevTools(),
                  label: 'Toggle &Developer Tools',
                },
              ]
            : [
                {
                  accelerator: 'F11',
                  click: () => this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen()),
                  label: 'Toggle &Full Screen',
                },
              ],
      },
      {
        label: 'Learn More',
        submenu: [
          {
            click: () => shell.openExternal('https://github.com/mobilecoinofficial'),
            label: 'MobileCoin Github',
          },
          {
            click: () => shell.openExternal('https://github.com/mobilecoinfoundation/mobilecoin'),
            label: 'MobileCoin Foundation Github',
          },
          {
            click: () => shell.openExternal('https://community.mobilecoin.foundation/'),
            label: 'Community Forum',
          },
          {
            click: () => shell.openExternal('https://mobilecoin.foundation/get-involved'),
            label: 'MobileCoin Foundation',
          },
        ],
      },
    ];
    return templateDefault;
  }
}
