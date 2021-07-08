import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { UnlockWalletView } from './UnlockWallet.view';

export default {
  component: UnlockWalletView,
  title: 'Account/Unlock Wallet',
};

const Template: Story<ComponentProps<typeof UnlockWalletView>> = (args) => (
  <UnlockWalletView {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
