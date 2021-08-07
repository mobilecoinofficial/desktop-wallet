import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { CreateWalletView } from './CreateWallet.view';

export default {
  component: CreateWalletView,
  title: 'Wallet/Create',
};

const Template: Story<ComponentProps<typeof CreateWalletView>> = (args) => (
  <CreateWalletView {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
