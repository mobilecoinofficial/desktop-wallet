import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { TransactionLog } from '../../../types/TransactionLog';
import { Txos } from '../../../types/Txo';
import { TransactionDetails } from './TransactionDetails.view';

export default {
  component: TransactionDetails,
  title: 'Pages/History/Transaction Details View',
};

const Template: Story<ComponentProps<typeof TransactionDetails>> = (args) => (
  <TransactionDetails {...args} />
);

export const Primary = Template.bind({});

const currentTransactionLog = {
  accountId: '43ab3ec7d6c232a9ff89fb5112d9416fd150b9d977f1bc5ddf805d77122e6f55',
  assignedAddressId:
    'eo7bLKA1kNNgLHGUMnf5sHZ5Hj52YqGNyia52eaacEqUimqxXUM91pDKJU22cca8S4rbSvrfJhkhyTWFRwvFQZKDE5p6M52B3dbVpgLo9z',
  changeTxoIds: [],
  comment: '',
  direction: 'tx_direction_received',
  failureCode: null,
  failureMessage: null,
  feePmob: null,
  finalizedBlockIndex: '159566',
  inputTxoIds: [],
  isSentRecovered: null,
  object: 'transaction_log',
  offsetCount: 1,
  outputTxoIds: ['f788d762c70d81a91a36b2b625b299e2ecf84a800ba31deab5ac2ef1f58891b8'],
  recipientAddressId: null,
  sentTime: null,
  status: 'tx_status_succeeded',
  submittedBlockIndex: null,
  transactionLogId: 'f788d762c70d81a91a36b2b625b299e2ecf84a800ba31deab5ac2ef1f58891b8',
  valuePmob: '22900000000000',
};

const txos = {
  txoIds: ['f788d762c70d81a91a36b2b625b299e2ecf84a800ba31deab5ac2ef1f58891b8'],
  txoMap: {
    f788d762c70d81a91a36b2b625b299e2ecf84a800ba31deab5ac2ef1f58891b8: {
      accountStatusMap: {
        '43Ab3Ec7D6C232A9Ff89Fb5112D9416Fd150B9D977F1Bc5Ddf805D77122E6F55': {
          txoStatus: 'txo_status_unspent',
          txoType: 'txo_type_received',
        },
      },
      assignedAddress:
        'eo7bLKA1kNNgLHGUMnf5sHZ5Hj52YqGNyia52eaacEqUimqxXUM91pDKJU22cca8S4rbSvrfJhkhyTWFRwvFQZKDE5p6M52B3dbVpgLo9z',
      confirmation: null,
      eFogHint:
        '0a548e31516379f6a26de1f6df02283a1c3a86abb255b7aa481e1596b7accfe6f401a9b524fb83cf59b59a60eea4c2647604bb150f087e13cd532ea29ed90b9b8991320fa36d59e023f246adf9b30fd9ecb4da280100',
      isSpentRecovered: false,
      keyImage: '0a2060f66a814d1641f166271ec87e2d5bccfb35e33c6b19220ac39157d3bc21c97a',
      mintedAccountId: null,
      object: 'txo',
      offsetCount: 109,
      publicKey: '0a2050938924d6f13bdb9546a9b78fdb0881c0ae4e34fa481544890e01d8993ae706',
      receivedAccountId: '43ab3ec7d6c232a9ff89fb5112d9416fd150b9d977f1bc5ddf805d77122e6f55',
      receivedBlockIndex: '159566',
      spentBlockIndex: null,
      subaddressIndex: '0',
      targetKey: '0a202806521291ac36b6232ed5fb8ee37356a8928fd7242ae5d93de3ee4b37bf3d61',
      txoIdHex: 'f788d762c70d81a91a36b2b625b299e2ecf84a800ba31deab5ac2ef1f58891b8',
      valuePmob: '22900000000000',
    },
  },
};

Primary.args = {
  onChangedComment: () => console.log('onChangeComment!'),
  onClickBack: () => console.log('onClickBack!'),
  transactionLog: currentTransactionLog as TransactionLog,
  txos: txos as Txos,
};
