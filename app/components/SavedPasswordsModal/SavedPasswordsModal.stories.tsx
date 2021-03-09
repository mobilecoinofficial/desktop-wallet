import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import SavedPasswords from './SavedPasswordsModal.component';

export default {
  component: SavedPasswords,
  title: 'SavedPasswords',
};

const Template: Story<ComponentProps<typeof SavedPasswords>> = (args) => (
  <>
    <div id="passwords-div" />
    <SavedPasswords {...args} />
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  accounts: [
    { account: 'main', password: 'u9813hc4242' },
    { account: 'secondary', password: 'u9813hc4242' },
    { account: 'third', password: 'u9813hc4242' },
    { account: 'fourth', password: 'u9813hc4242' },
    { account: 'fifth', password: 'u9813hc4242' },
    { account: 'sixth', password: 'u9813hc4242' },
  ],
  anchorEl: document.getElementById('passwords-div'),
  handleClose: () => {},
  setFieldValue: (field, value) => {
    // eslint-disable-next-line no-console
    console.log(field, value);
  },
};
