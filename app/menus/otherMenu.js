import { shell } from 'electron';

import config from '../../configs/app.config';

const defaultTemplate = (app, mainWindow, i18n) => {
  const submenuAbout = {
    label: i18n.t('Menu.mobileCoin'),
    submenu: [
      {
        label: i18n.t('Menu.about'),
        selector: 'orderFrontStandardAboutPanel:',
      },
      { type: 'separator' },
      {
        accelerator: 'Command+H',
        label: i18n.t('Menu.hideWallet'),
        selector: 'hide:',
      },
      {
        accelerator: 'Command+Shift+H',
        label: i18n.t('Menu.hideOthers'),
        selector: 'hideOtherApplications:',
      },
      { label: i18n.t('Menu.showAll'), selector: 'unhideAllApplications:' },
      { type: 'separator' },
      {
        accelerator: 'Command+Q',
        click: () => {
          app.quit();
        },
        label: i18n.t('Menu.quit'),
      },
    ],
  };

  const submenuEdit = {
    label: i18n.t('Menu.edit'),
    submenu: [
      { accelerator: 'Command+Z', label: i18n.t('Menu.undo'), selector: 'undo:' },
      { accelerator: 'Shift+Command+Z', label: i18n.t('Menu.redo'), selector: 'redo:' },
      { type: 'separator' },
      { accelerator: 'Command+X', label: i18n.t('Menu.cut'), selector: 'cut:' },
      { accelerator: 'Command+C', label: i18n.t('Menu.copy'), selector: 'copy:' },
      { accelerator: 'Command+V', label: i18n.t('Menu.paste'), selector: 'paste:' },
      {
        accelerator: 'Command+A',
        label: i18n.t('Menu.selectAll'),
        selector: 'selectAll:',
      },
    ],
  };

  const submenuViewProd = {
    label: i18n.t('Menu.view'),
    submenu: [
      {
        accelerator: 'Ctrl+Command+F',
        click: () => {
          this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
        },
        label: i18n.t('Menu.toggleFullScreen'),
      },
    ],
  };

  if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
    submenuViewProd.submenu.push({
      accelerator: 'Alt+Command+I',
      click: () => {
        mainWindow.webContents.toggleDevTools();
      },
      label: 'Toggle Developer Tools',
    });

    submenuViewProd.submenu.push({
      accelerator: 'Command+R',
      click: () => mainWindow.webContents.reload(),
      label: 'Reload',
    });
  }

  const submenuWindow = {
    label: i18n.t('Menu.window'),
    submenu: [
      {
        accelerator: 'Command+M',
        label: i18n.t('Menu.minimize'),
        selector: 'performMiniaturize:',
      },
      { accelerator: 'Command+W', label: i18n.t('Menu.close'), selector: 'performClose:' },
      { type: 'separator' },
      { label: i18n.t('Menu.bringToFront'), selector: 'arrangeInFront:' },
    ],
  };

  const submenuLearnMore = {
    label: i18n.t('Menu.learnMore'),
    submenu: [
      {
        click() {
          shell.openExternal('https://github.com/mobilecoinofficial');
        },
        label: i18n.t('Menu.learnMoreGithub'),
      },
      {
        click() {
          shell.openExternal('https://github.com/mobilecoinfoundation/mobilecoin');
        },
        label: i18n.t('Menu.learnMoreFoundationGithub'),
      },
      {
        click() {
          shell.openExternal('https://community.mobilecoin.foundation/');
        },
        label: i18n.t('Menu.learnMoreCommunityForum'),
      },
      {
        click() {
          shell.openExternal('https://mobilecoin.foundation/get-involved');
        },
        label: i18n.t('Menu.learnMoreMobileCoinFoundation'),
      },
    ],
  };

  const menuView = [submenuAbout, submenuEdit, submenuViewProd, submenuWindow, submenuLearnMore];

  const languageMenu = config.languages.map((languageCode) => {
    return {
      checked: i18n.language === languageCode,
      click: () => {
        i18n.changeLanguage(languageCode);
      },
      label: i18n.t(`Menu.languages.${languageCode}`),
      type: 'radio',
    };
  });

  menuView.push({
    label: i18n.t('Menu.language'),
    submenu: languageMenu,
  });

  return menuView;
};

export default defaultTemplate;
