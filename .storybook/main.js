const path = require('path');

module.exports = {
  stories: [
    '../app/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../app/pages/**/*.stories.@(js|jsx|ts|tsx)',
    '../app/views/**/*.stories.@(js|jsx|ts|tsx)',
    '../app/views/**/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // webpackFinal: async (config, { configType }) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     'fs': path.resolve(__dirname, 'fsMock.js'),
  //   };
  //   return config
  // }
};
