import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { CreateAccountView } from './CreateAccount.view';

export default {
  component: CreateAccountView,
  title: 'Account/Create',
};

const Template: Story<ComponentProps<typeof CreateAccountView>> = (args) => (
  <CreateAccountView {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
