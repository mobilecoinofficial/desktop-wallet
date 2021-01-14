import { Menu } from 'electron';

import config from '../configs/app.config';
import darwinTemplate from './menus/darwinMenu';
import otherTemplate from './menus/otherMenu';

const menu = null;

function buildMenu(app, mainWindow, i18next) {
  if (config.platform === 'darwin') {
    this.menu = Menu.buildFromTemplate(darwinTemplate(app, mainWindow, i18next));
    Menu.setApplicationMenu(this.menu);
  } else {
    this.menu = Menu.buildFromTemplate(otherTemplate(app, mainWindow, i18next));
    mainWindow.setMenu(this.menu);
  }
}

function MenuFactoryService(newMenu) {
  this.menu = newMenu;

  this.buildMenu = buildMenu;
}

export default new MenuFactoryService(menu);
