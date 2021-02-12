import i18next from 'i18next';

import enUS from '../locales/en-US.json';

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

/* TO DO: Remove this... when it works!
console.log('*******************************************************************************');
console.log(Object.keys(newInstance));
console.log(newInstance.t('Alpha'), enUS.Alpha);
console.log(newInstance.t('Gamma'));
console.log(newInstance.t('BalanceIndicator.title'));
console.log('*******************************************************************************');
*/

export default newInstance;
