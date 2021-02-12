import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import enUS from '../locales/en-US.json';

const newInstance = i18next.createInstance();

newInstance // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    lng: 'en-US',
    react: {
      wait: false,
    },
    resources: {
      'en-US': enUS,
    },
    supportedLngs: ['en-US', 'en'],
  });

export default newInstance;
