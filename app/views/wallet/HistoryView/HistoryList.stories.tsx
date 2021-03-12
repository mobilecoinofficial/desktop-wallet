import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import HistoryList from './HistoryList';

export default {
  component: HistoryList,
  title: 'History/List',
};

const Template: Story<ComponentProps<typeof HistoryList>> = (args) => <HistoryList {...args} />;

type Direction = 'received' | 'sent';
type Status = 'pending' | 'received' | 'succeeded';

const fake = (
  id: string,
  dateTime: Date,
  name: string,
  amount: number,
  direction: Direction,
  status: Status,
  comment: string
) => ({
  amount,
  comment,
  dateTime,
  direction,
  id,
  name,
  status,
});

const FAKE_DATA = [
  fake(
    'lkj',
    new Date('2022-02-04T16:32:00'),
    'Peter Smithson',
    4.6478654,
    'sent',
    'pending',
    'First comment'
  ),
  fake('hjk', new Date('2021-01-30T20:49:00'), 'John Doe', 30.237, 'sent', 'succeeded', ''),
  fake('asd', new Date('2021-01-16T18:46:00'), '7fg3-6ds2', 20.0, 'received', 'received', ''),
  fake(
    'mnb',
    new Date('2020-12-22T23:54:00'),
    '8gh5-3fh5',
    5.645,
    'sent',
    'succeeded',
    'No comment here'
  ),
  fake('vbn', new Date('2020-12-18T20:17:00'), '4hd2-2ahj4', 14.0, 'received', 'received', ''),
  fake('rty', new Date('2020-11-28T16:32:00'), '3gh4-9jkl3', 1.356, 'received', 'received', ''),
  fake('oiu', new Date('2020-11-14T08:56:00'), '5hj5-lcv3', 2.824, 'sent', 'succeeded', ''),
  fake('poi', new Date('2020-11-11T19:11:00'), 'Ellaine Brisbane', 0.567, 'sent', 'succeeded', ''),
  fake('qwe', new Date('2020-10-28T16:32:00'), '0vi4-s24k', 1.356, 'received', 'received', ''),
  fake(
    'ytr',
    new Date('2020-10-14T20:56:00'),
    '9kj3-vm3f',
    2.824,
    'sent',
    'succeeded',
    'Next to last comment'
  ),
  fake(
    'rew',
    new Date('2020-10-11T19:11:00'),
    'Richard Simpson',
    0.567,
    'sent',
    'succeeded',
    'No more comments'
  ),
];

export const Primary = Template.bind({});
Primary.args = {
  onTransactionClick: () => {},
  transactionsList: FAKE_DATA,
};
