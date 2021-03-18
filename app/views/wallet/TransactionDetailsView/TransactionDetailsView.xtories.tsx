import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import { SnackbarProvider } from 'notistack';

import TransactionDetailsView from './TransactionDetailsView';

export default {
  component: TransactionDetailsView,
  title: 'History/Transaction/Details View',
};

const Template: Story<ComponentProps<typeof TransactionDetailsView>> = (args) => (
  <TransactionDetailsView {...args} />
);

export const Primary = Template.bind({});

Primary.decorators = [
  (StoryComponent) => (
    <SnackbarProvider>
      <StoryComponent />
    </SnackbarProvider>
  ),
];

Primary.args = {
  onChangedComment: () => console.log('onChangeComment!'),
  onClickBack: () => console.log('onClickBack!'),
  transactionLog: {
    assignedAddressId:
      'CaE5bdbQxLG2BqAYAz84mhND79iBSs13ycQqN8oZKZtHdr6KNr1DzoX93c6LQWYHEi5b7YLiJXcTRzqhDFB563Kr1uxD6iwERFbw7KLWA6',
    comment: 'Some comment here',
    direction: 'tx_direction_received',
    finalizedBlockIndex: '88888888',
    outputTxoIds: [
      '591bc7632cd3823e970d83d043515bf7e6d6370740242490125dd1b9e909e305',
      '5bf7e6d6370742490125dd1b9e909e5bf7e6d6370742490125dd1b9e909e',
      '0740242490125dd1b9e909e25dd1b90740242490125dd1b9e909e25dd1b9',
    ],
    status: 'tx_status_pending',
    transactionLogId: 'nfr291k9vm42v3',
    valuePmob: '1234124',
  },
  txos: {
    txoMap: {
      '0740242490125dd1b9e909e25dd1b90740242490125dd1b9e909e25dd1b9': { valuePmob: '1230000' },
      '5bf7e6d6370742490125dd1b9e909e5bf7e6d6370742490125dd1b9e909e': { valuePmob: '4000' },
      '591bc7632cd3823e970d83d043515bf7e6d6370740242490125dd1b9e909e305': { valuePmob: '124' },
    },
  },
};
