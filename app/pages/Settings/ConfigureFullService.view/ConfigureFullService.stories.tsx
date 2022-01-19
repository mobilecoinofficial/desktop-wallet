import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { ConfigureFullServiceView } from './ConfigureFullService.view';

export default {
  component: ConfigureFullServiceView,
  title: 'Settings/Configure/Configure Full Service',
};

const Template: Story<ComponentProps<typeof ConfigureFullServiceView>> = (args) => (
  <ConfigureFullServiceView {...args} />
);

export const ConfigureFullService = Template.bind({});
ConfigureFullService.args = {
  configureFullServiceConfigs: {
    fullServiceDbPath: 'path/to/the/fullService',
    leaveFullServiceRunning: false,
    ledgerDbPath: 'path/to/the/ledger',
    toggleLeaveFullServiceRunning: () => undefined,
  },
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
      accountBlockHeight: '158974',
      isSynced: true,
      localBlockHeight: '158974',
      networkBlockHeight: '158974',
      object: 'balance',
      orphanedPmob: '18000000000001',
      pendingPmob: '0',
      secretedPmob: '0',
      spentPmob: '35410000000000',
      unspentPmob: '908298888888888',
    },
  },
};
