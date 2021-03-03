import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import config from '../configs/app.config';

const i18nextOptions = {
  fallbackLng: config.fallbackLng,
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
  react: {
    wait: false,
  },
  saveMissing: true,
  whitelist: config.languages,
};

i18n.use(initReactI18next);

// initialize if not already initialized
if (!i18n.isInitialized) {
  i18n.init(i18nextOptions);
}

// export default i18n;
