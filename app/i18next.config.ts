import path from 'path';

import { app } from 'electron';
import i18n from 'i18next';
import i18nextBackend from 'i18next-node-fs-backend';

import config from '../configs/app.config';

const IS_PROD = process.env.NODE_ENV === 'production';
const root = process.cwd();
const { isPackaged } = app;

const i18nextOptions = {
  backend: {
    addPath: './locales/{{lng}}/{{ns}}.missing.json',
    jsonIndent: 2,
    loadPath:
      IS_PROD && isPackaged
        ? path.join(process.resourcesPath, '..', 'locales/{{lng}}/{{ns}}.json')
        : path.join(root, 'locales/{{lng}}/{{ns}}.json'),
  },
  fallbackLng: config.fallbackLng,
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: false,
  },
  supportedLngs: config.languages,
};

i18n.use(i18nextBackend);

if (!i18n.isInitialized) {
  i18n.init(i18nextOptions);
}

export default i18n;
