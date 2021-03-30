import languageConstants from '../app/constants/languages';

const languages = [languageConstants.EN_US, languageConstants.EL_GR, languageConstants.ZH_CN];
if (process.env.NODE_ENV === 'development' || process.env.E2E_BUILD === 'true') {
  languages.push(languageConstants.UP_DEV);
}

export default {
  fallbackLng: languageConstants.EN_US,
  languages,
  namespace: 'translation',
  platform: process.platform,
  title: 'Desktop Wallet',
};
