const languages = ['en-US'];
if (process.env.NODE_ENV === 'development' || process.env.E2E_BUILD === 'true') {
  languages.push('up-DEV');
}

export default {
  fallbackLng: 'en-US',
  languages,
  namespace: 'translation',
  platform: process.platform,
  title: 'Desktop Wallet',
};
