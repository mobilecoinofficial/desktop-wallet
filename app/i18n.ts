import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import config from '../configs/app.config';
import enUS from '../locales/en-US/translation.json';
import upDEV from '../locales/up-DEV/translation.json'; // this is uppercased and for dev only

i18n.use(initReactI18next);

if (!i18n.isInitialized) {
  i18n.init({
    debug: true,
    fallbackLng: config.fallbackLng,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      wait: false,
    },
    resources: {
      'en-US': enUS,
      'up-DEV': upDEV,
    },
    supportedLngs: config.languages,
  });
}

export default i18n;
