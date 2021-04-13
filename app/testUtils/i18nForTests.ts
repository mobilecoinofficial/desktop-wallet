import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enUS from '../../locales/enUS/translation.json';

i18n.use(initReactI18next);
if (!i18n.isInitialized) {
  i18n.init({
    lng: 'enUS',
    resources: {
      enUS,
    },
    supportedLngs: ['enUS'],
  });
}

export default i18n;
