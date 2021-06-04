import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import { SnackbarProvider } from 'notistack';

import { BuildGiftPanelProps } from './BuildGiftPanel';
import { BuildGiftPanel } from './BuildGiftPanel.view';

export default {
  component: BuildGiftPanel,
  title: 'Gift/Build Gift Panel',
};

const Template: Story<ComponentProps<typeof BuildGiftPanel>> = (args: BuildGiftPanelProps) => (
  <SnackbarProvider>
    <BuildGiftPanel {...args} />
  </SnackbarProvider>
);

export const GiftPanel = Template.bind({});
GiftPanel.args = {
  buildGiftCode: () => console.log('buildGiftCode!'),
  codeClicked: () => console.log('codeClicked!'),
  deleteStoredGiftCodeB58: () => console.log('deleteStoredGiftCodeB58!'),
  existingPin: '12345678',
  getAllGiftCodes: () => console.log('getAllGiftCodes!'),
  giftCodes: [
    {
      accountId: 'dc46d2ce3f4e676b3b9178d4833f6bf89b4d1f79634694e895fb3111af81ff4e',
      entropy: '328073c0b0395e90bd416cf302c1ee826528db94412004137c133dbac192a387',
      giftCodeB58:
        'J4AsnTwog3dYpsxJ7hMT2xhtoRxJJ5zTZ9KtsEUC7nppfnJmTxQWx5uWevjevckVjrLn71XMNipgWABXbp78TcBEC5Jpd7Dpf55uwwaS',
      memo: '',
      object: 'gift_code',
      txoIdHex: 'ef262c80940108ec2e988a1ef0f836bdff97a8aa4fe826cfde706b89f54dcc12',
      valuePmob: '2010000000000',
    },
    {
      accountId: '044f7330d84e083e9e3badfc881f7a303556df45708c5c736eeee6757a66e061',
      entropy: '072f55a15b14d936e9f000084697d151eae784ae9f22edfd37ff8b71d9c171b5',
      giftCodeB58:
        'QExwRRQCbMZWLcN7qhxosP8MEceLHzZ79LuvHRUT28T8RUKxAXJhwMSuHFpjv3yHmAETTtPLJZ4sMSm7kGUvJy1BfuBGCZinhRKFsrBv',
      memo: '',
      object: 'gift_code',
      txoIdHex: 'a6dff07163f7baee4d3dbd67b58b7f8537abd156505e385d2e51ecb434ea31f2',
      valuePmob: '2010000000000',
    },
    {
      accountId: '044f7330d84e083e9e3badfc881f7a303556df45708c5c736eeee6757a66e061',
      entropy: '3275304c3343b5d6018fe9cf295dc044f9b1677e681761340bb007b95db3f921',
      giftCodeB58:
        'HcCU4VaCG8ykDx6tmH4tTprjQcnoLuTw9Xixhy7MKusTKTDW9o1eFB349UKKm4UZffaa9Nbzg5QXsBxJGZxyMEMonRfFaqm3FRxqu7q9',
      memo: '',
      object: 'gift_code',
      txoIdHex: '82692dbaf5302bc1d3cb248e9dfc549550b8943384d143a231a3a53149088d82',
      valuePmob: '2010000000000',
    },
  ],
  isSyncedBuffered: () => true,
  pinThresholdPmob: '10000000000000',
  selectedAccount: {
    account: {
      accountId: '43ab3ec7d6c232a9ff89fb5112d9416fd150b9d977f1bc5ddf805d77122e6f55',
      firstBlockIndex: '159565',
      keyDerivationVersion: '2',
      mainAddress:
        'eo7bLKA1kNNgLHGUMnf5sHZ5Hj52YqGNyia52eaacEqUimqxXUM91pDKJU22cca8S4rbSvrfJhkhyTWFRwvFQZKDE5p6M52B3dbVpgLo9z',
      name: 'Moe Mob',
      nextSubaddressIndex: '2',
      object: 'account',
      recoveryMode: false,
    },
    balanceStatus: {
      accountBlockIndex: '159586',
      isSynced: true,
      localBlockIndex: '159586',
      networkBlockIndex: '159586',
      object: 'balance',
      orphanedPmob: '0',
      pendingPmob: '0',
      secretedPmob: '0',
      spentPmob: '22900000000000',
      unspentPmob: '22890000000000',
    },
  },
  submitGiftCode: () => console.log('submitGiftCode!'),
};
