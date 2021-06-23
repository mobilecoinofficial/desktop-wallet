import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import { SnackbarProvider } from 'notistack';

import { ChangePasswordView } from './ChangePassword.view';

export default {
  component: ChangePasswordView,
  title: 'Settings/Change Password',
};

const Template: Story<ComponentProps<typeof ChangePasswordView>> = (args) => (
  <SnackbarProvider>
    <ChangePasswordView {...args} />
  </SnackbarProvider>
);

export const ChangePassword = Template.bind({});
ChangePassword.args = {
  accounts: [],
  changePassword: () => Promise.resolve(undefined),
};
