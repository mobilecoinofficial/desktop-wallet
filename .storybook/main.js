module.exports = {
  stories: ['../app/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    'storybook-formik/register',
  ],
};

/*
https://github.com/storybookjs/storybook/issues/6633
https://github.com/storybookjs/storybook/issues/12967


FIX? https://github.com/storybookjs/storybook/issues/4082
FIX? https://stackoverflow.com/questions/53325876/storyshot-for-storybook-vue-broken-with-error-module-not-found-error-cant-res
FIX? https://lifesaver.codes/answer/how-to-enable-storybook-on-node-server
*/
