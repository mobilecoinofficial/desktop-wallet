import i18n from 'i18next';
import i18nextBackend from 'i18next-node-fs-backend';

import config from '../configs/app.config';

const i18nextOptions = {
  backend: {
    addPath: './locales/{{lng}}/{{ns}}.missing.json',
    jsonIndent: 2,
    loadPath: './locales/{{lng}}/{{ns}}.json',
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
