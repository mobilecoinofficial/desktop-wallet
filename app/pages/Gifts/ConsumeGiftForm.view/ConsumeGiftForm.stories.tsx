import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import { SnackbarProvider } from 'notistack';

import { ConsumeGiftFormProps } from './ConsumeGiftForm';
import { ConsumeGiftForm } from './ConsumeGiftForm.view';

export default {
  component: ConsumeGiftForm,
  title: 'Pages/Gift/Consume Gift Form',
};

const Template: Story<ComponentProps<typeof ConsumeGiftForm>> = (args: ConsumeGiftFormProps) => (
  <SnackbarProvider>
    <ConsumeGiftForm {...args} />
  </SnackbarProvider>
);

const selectedAccount = {
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
};

const confirmation = {
  giftCodeB58:
    'KT2xjDefXi3g4ZS1hEiwZxSx7zS2WYxpkuXVgXPi7RHj3xxSeyL2JXvkytY9V4a1aNVuPGgmjCoMjiZhwCiWtc1rodSmV6jib92oWso5',
  giftCodeStatus: 'GiftCodeAvailable',
  giftValue: 1000400000000,
};

export const InitialForm = Template.bind({});
InitialForm.args = {
  confirmation,
  feePmob: '0.004',
  selectedAccount,
  showModal: false,
};

export const ConfirmationForm = Template.bind({});
ConfirmationForm.args = {
  confirmation,
  feePmob: '0.004',
  selectedAccount,
  showModal: true,
};
