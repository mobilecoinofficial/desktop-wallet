import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import type { TransactionLog } from '../../../types/TransactionLog.d';
import { HistoryList } from './HistoryList.view';

export default {
  component: HistoryList,
  title: 'Pages/History/List',
};

const Template: Story<ComponentProps<typeof HistoryList>> = (args) => <HistoryList {...args} />;

const fake = (
  transactionLogId: string,
  assignedAddressId: string,
  direction: string,
  finalizedBlockIndex: string,
  valuePmob: string
) => ({
  assignedAddressId,
  direction,
  finalizedBlockIndex,
  transactionLogId,
  valuePmob,
});

const FAKE_DATA = [
  fake(
    'hjk',
    'dx6H3G2PJtmlcQDtBun3wRzw0lUkR5iqcIu7mGAZsfgi69X43u25VARu1ewpqy54siUae8kQcdLdA9tShh712qpZnAMicizvJ9s',
    'tx_direction_sent',
    '1231241',
    '123'
  ),
  fake(
    'hjk',
    'dx6H3G2PJtmlcQDtBun3wRzw0lUkR5iqcIu7mGAZsfgi69X43u25VARu1ewpqy54siUae8kQcdLdA9tShh712qpZnAMicizvJ9s',
    'tx_direction_sent',
    '1231241',
    '123'
  ),
  fake(
    'hjk',
    'dx6H3G2PJtmlcQDtBun3wRzw0lUkR5iqcIu7mGAZsfgi69X43u25VARu1ewpqy54siUae8kQcdLdA9tShh712qpZnAMicizvJ9s',
    'tx_direction_received',
    '1231241',
    '123'
  ),
  fake(
    'hjk',
    'dx6H3G2PJtmlcQDtBun3wRzw0lUkR5iqcIu7mGAZsfgi69X43u25VARu1ewpqy54siUae8kQcdLdA9tShh712qpZnAMicizvJ9s',
    'tx_direction_sent',
    '1231241',
    '123'
  ),
  fake(
    'hjk',
    'dx6H3G2PJtmlcQDtBun3wRzw0lUkR5iqcIu7mGAZsfgi69X43u25VARu1ewpqy54siUae8kQcdLdA9tShh712qpZnAMicizvJ9s',
    'tx_direction_received',
    '1231241',
    '123'
  ),
  fake(
    'hjk',
    'dx6H3G2PJtmlcQDtBun3wRzw0lUkR5iqcIu7mGAZsfgi69X43u25VARu1ewpqy54siUae8kQcdLdA9tShh712qpZnAMicizvJ9s',
    'tx_direction_received',
    '41241213',
    '123'
  ),
  fake(
    'hjk',
    'dx6H3G2PJtmlcQDtBun3wRzw0lUkR5iqcIu7mGAZsfgi69X43u25VARu1ewpqy54siUae8kQcdLdA9tShh712qpZnAMicizvJ9s',
    'tx_direction_received',
    '2313232',
    '123'
  ),
  fake(
    'hjk',
    'dx6H3G2PJtmlcQDtBun3wRzw0lUkR5iqcIu7mGAZsfgi69X43u25VARu1ewpqy54siUae8kQcdLdA9tShh712qpZnAMicizvJ9s',
    'tx_direction_sent',
    '313115',
    '123'
  ),
];

export const List = Template.bind({});
List.args = {
  transactionLogsList: FAKE_DATA as TransactionLog[],
};
