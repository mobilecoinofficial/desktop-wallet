import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import { SnackbarProvider } from 'notistack';

import { SendMob } from './SendMob.view';

export default {
  component: SendMob,
  title: 'Pages/Send_Receive/Send Mob',
};

const Template: Story<ComponentProps<typeof SendMob>> = (args) => (
  <SnackbarProvider>
    <SendMob {...args} />;
  </SnackbarProvider>
);

export const Standard = Template.bind({});
Standard.args = {
  contacts: [
    {
      abbreviation: 'F1',
      alias: 'Foxtrot Golf',
      assignedAddress: '11111',
      color: '#FF0000',
      isFavorite: true,
    },
    {
      abbreviation: 'K2',
      alias: 'Kilo Lima',
      assignedAddress: '22222',
      color: '#00FF00',
      isFavorite: false,
    },
    {
      abbreviation: 'ST',
      alias: 'Sierra Tango',
      assignedAddress: '33333',
      color: '#0000FF',
      isFavorite: true,
    },
  ],
  feePmob: '5000000000',
  isSyncedBuffered: () => true,
  pinThresholdPmob: 10,
  selectedAccount: {
    account: {
      accountId: 'ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8',
      firstBlockIndex: '0',
      key_derivation_version: '1',
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
};
