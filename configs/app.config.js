const languages = ['enUS'];
if (process.env.NODE_ENV === 'development' || process.env.E2E_BUILD === 'true') {
  languages.push('upDEV');
}

export default {
  fallbackLng: 'enUS',
  languages,
  namespace: 'translation',
  platform: process.platform,
  title: 'Desktop Wallet',
};
