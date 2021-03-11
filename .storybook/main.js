const path = require('path');

module.exports = {
  "stories": [
    "../app/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../app/views/**/*.stories.@(js|jsx|ts|tsx)",
    "../app/views/**/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
}
