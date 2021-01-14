import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import HistoryItem from './HistoryItem';

export default {
  component: HistoryItem,
  title: 'History/Item',
};

const Template: Story<ComponentProps<typeof HistoryItem>> = (args) => <HistoryItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onClick: () => {},
  transactionLog: {
    assignedAddressId:
      'dx6H3G2PJtmlcQDtBun3wRzw0lUkR5iqcIu7mGAZsfgi69X43u25VARu1ewpqy54siUae8kQcdLdA9tShh712qpZnAMicizvJ9s',
    direction: 'tx_direction_received',
    finalizedBlockIndex: '1234124',
    valuePmob: '1520000',
  },
};
