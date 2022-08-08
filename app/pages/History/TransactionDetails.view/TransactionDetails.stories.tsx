import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { TransactionLog } from '../../../types/TransactionLog';
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

Primary.args = {
  onChangedComment: () => console.log('onChangeComment!'), // eslint-disable-line no-console
  onClickBack: () => console.log('onClickBack!'), // eslint-disable-line no-console
  transactionLog: currentTransactionLog as TransactionLog,
};
