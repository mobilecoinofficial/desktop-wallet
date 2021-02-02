import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enUS from '../locales/enUS.json';

const resources = {
  enUS,
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true,
    fallbackLng: 'enUS',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    lng: 'enUS',
    react: {
      wait: false,
    },
    resources,
    supportedLngs: ['enUS'],
  });

export default i18n;
