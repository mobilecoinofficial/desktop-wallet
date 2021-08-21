import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import type { TransactionLog } from '../../../../types/TransactionLog.d';
import { HistoryItem } from '../../../History/HistoryItem.view';

export default {
  component: HistoryItem,
  title: 'Pages/History/Item',
};

const Template: Story<ComponentProps<typeof HistoryItem>> = (args) => <HistoryItem {...args} />;

export const Item = Template.bind({});
Item.args = {
  transactionLog: {
    assignedAddressId:
      'dx6H3G2PJtmlcQDtBun3wRzw0lUkR5iqcIu7mGAZsfgi69X43u25VARu1ewpqy54siUae8kQcdLdA9tShh712qpZnAMicizvJ9s',
    direction: 'tx_direction_received',
    finalizedBlockIndex: '1234124',
    valuePmob: '1520000',
  } as TransactionLog,
};
