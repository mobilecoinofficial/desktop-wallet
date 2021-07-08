import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { ChangePasswordView } from './ChangePassword.view';

export default {
  component: ChangePasswordView,
  title: 'Settings/Change',
};

const Template: Story<ComponentProps<typeof ChangePasswordView>> = (args) => (
  <ChangePasswordView {...args} />
);

export const ChangePassword = Template.bind({});
ChangePassword.args = {
  accounts: [],
};
