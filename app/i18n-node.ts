import i18n from 'i18n';

import enUS from '../locales/en-US.json';

i18n.configure({
  defaultLocale: 'en',
  fallbacks: { 'en-*': 'en' },
  objectNotation: true,
  staticCatalog: {
    en: enUS,
    'en-US': enUS,
  },
});

/* TO DO: remove this when everything's fine:
console.log('*******************************************************************************');
console.log(i18n.__('BalanceIndicator.syncMessage'), 'should be a long sentence');
console.log('*******************************************************************************');
*/

export default i18n;
