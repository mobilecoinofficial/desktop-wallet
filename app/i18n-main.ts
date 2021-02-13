import i18next from 'i18next';

import enUS from '../locales/en-US.json';

// see https://github.com/mashpie/i18n-node

const newInstance = i18next.createInstance();

newInstance.init({
  debug: true,
  fallbackLng: 'en-US',
  lng: 'en-US',
  resources: {
    'en-US': enUS,
  },
  supportedLngs: ['en-US', 'en'],
});

/* TO DO: remove when everything's OK -- or this module is dropped
console.log('*******************************************************************************');
console.log(Object.keys(newInstance));
console.log(newInstance.t('BalanceIndicator.title'));
console.log('*******************************************************************************');
*/

export default newInstance;
