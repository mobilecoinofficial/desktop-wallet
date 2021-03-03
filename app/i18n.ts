import i18n from 'i18next';
// import i18nextBackend from 'i18next-node-fs-backend';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en/translation.json';
import up from '../locales/up/translation.json'; // this is uppercased and for dev only

i18n
  // pass the i18n instance to react-i18next.
  // .use(i18nextBackend)
  .use(initReactI18next);

if (!i18n.isInitialized) {
  i18n.init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    lng: 'en',
    react: {
      wait: false,
    },
    resources: {
      en,
      up,
    },
    supportedLngs: ['en', 'up'],
  });
}

export default i18n;
