/*
  It seems that stories involving BigInts do not run...
*/

import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { SendMob } from './SendMob.view';

export default {
  component: SendMob,
  title: 'Pages/Send Receive',
};

const Template: Story<ComponentProps<typeof SendMob>> = (args) => <SendMob {...args} />;

export const SendMobsOne = Template.bind({});
SendMobsOne.args = {
  confirmation: {
    feeConfirmation: BigInt(400),
    totalValueConfirmation: BigInt(5),
  },
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
  existingPin: '111111',
  fee: '5000000000',
  isSynced: true,
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
  showing: 0,
};

export const SendMobsTwo = Template.bind({});
SendMobsTwo.args = {
  confirmation: {
    feeConfirmation: BigInt(400),
    totalValueConfirmation: BigInt(5),
  },
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
  existingPin: '111111',
  fee: '5000000000',
  isSynced: true,
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
  showing: 1,
};

export const SendMobsThree = Template.bind({});
SendMobsThree.args = {
  confirmation: {
    feeConfirmation: BigInt(400),
    totalValueConfirmation: BigInt(5),
  },
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
  existingPin: '111111',
  fee: '5000000000',
  isSynced: true,
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
  showing: 2,
};
