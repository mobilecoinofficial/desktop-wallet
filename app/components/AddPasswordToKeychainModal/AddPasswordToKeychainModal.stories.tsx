import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import AddPasswordToKeychainModal from './AddPasswordToKeychainModal.component';

export default {
  component: AddPasswordToKeychainModal,
  title: 'AddPasswordToKeychainModal',
};

const Template: Story<ComponentProps<typeof AddPasswordToKeychainModal>> = (args) => (
  <AddPasswordToKeychainModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  passwordLength: 15,
};
