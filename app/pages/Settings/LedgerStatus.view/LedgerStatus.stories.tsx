import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { LedgerStatus } from './LedgerStatus.view';

export default {
  component: LedgerStatus,
  title: 'Settings/Ledger Status',
};

const Template: Story<ComponentProps<typeof LedgerStatus>> = (args) => <LedgerStatus {...args} />;

export const story = Template.bind({});
story.args = {
  selectedAccount: {
    account: {
      accountId: '1234',
      firstBlockIndex: '1',
      key_derivation_version: '1',
      mainAddress: 'b58 code',
      name: null,
      nextSubaddressIndex: '1235',
      object: 'account',
    },
    balanceStatus: {
      accountBlockIndex: '1234',
      isSynced: true,
      localBlockIndex: '1234',
      networkBlockIndex: '12345',
      object: 'balance',
      orphanedPmob: '1234',
      pendingPmob: '1234',
      secretedPmob: '1234',
      spentPmob: '1234',
      unspentPmob: '1234',
    },
  },
};
