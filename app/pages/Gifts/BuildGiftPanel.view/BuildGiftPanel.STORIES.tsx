import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import { SnackbarProvider } from 'notistack';

import { BuildGiftPanelProps } from './BuildGiftPanel';
import { BuildGiftPanel } from './BuildGiftPanel.view';

export default {
  component: BuildGiftPanel,
  title: 'Gift/Build Form',
};

const Template: Story<ComponentProps<typeof BuildGiftPanel>> = (args: BuildGiftPanelProps) => (
  <SnackbarProvider>
    <BuildGiftPanel {...args} />
  </SnackbarProvider>
);

export const GiftForm = Template.bind({});
GiftForm.args = {
  buildGiftCode: () => undefined,
  existingPin: '111111',
  giftCodes: [
    {
      accountId: 'ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8',
      entropy: '2b25a1535454226a70bd999fbe36a7dd2a53fc3fee3dc48b0c9fb7b088ee305c',
      giftCodeB58:
        '7kaRstJZ77fNg7mYpr2HPHBvXmFBATvFH2UfVLkC9X3iWLeR1xbkshVDqLZ13zRag7usgyVvVp8dD6JwQJkcmWhX1YTQfHwC5hS6rCqT',
      memo: '',
      object: 'gift_code',
      txoIdHex: 'db7845b3acc4db4161c770be0b5c10e65989224523e435b0e71a6ce1ab5e03f7',
      valuePmob: '2010000000000',
    },
    {
      accountId: 'ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8',
      entropy: '3c294516932aa50b61e728bb3ee1123f353525e39f4edad48d1d41e2f4df4532',
      giftCodeB58:
        '3ct94dFPNKwYZ2mBqnaNdVYBTQ6nD8Lu39YyDoqnY2rW1sn3L8gT34vrgkSk5a1roAxbY8fwXLcJFufT8dxuemNoV1h77BEVZX942gAK',
      memo: 'some memo',
      object: 'gift_code',
      txoIdHex: '2a2c62ff6ad21073a561a4375fdd256a3b60a25a5e2d6524d4e4839d4d2a0d86',
      valuePmob: '3010000000000',
    },
  ],
  isSyncedBuffered: () => true,
  pinThresholdPmob: '1',
  selectedAccount: {
    account: {
      accountId: 'ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8',
      firstBlockIndex: '0',
      keyDerivationVersion: '1',
      mainAddress:
        'syJAd2QoH7xSkZvMDV8Q6DdWhnRsmAKqx3LZ5BaLXKezCDjf6nUfps2b8ywm1scSMp5WDbYxNMu5mNniVkmb1fehAGaKQdNQWEEg4vHrCH',
      name: 'fktt22',
      nextSubaddressIndex: '5',
      object: 'account',
      recoveryMode: false,
    },
    balanceStatus: {
      accountBlockIndex: '158974',
      isSynced: true,
      localBlockIndex: '158974',
      networkBlockIndex: '158974',
      object: 'balance',
      orphanedPmob: '18000000000001',
      pendingPmob: '0',
      secretedPmob: '0',
      spentPmob: '35410000000000',
      unspentPmob: '908298888888888',
    },
  },
  submitGiftCode: () => undefined,
};
