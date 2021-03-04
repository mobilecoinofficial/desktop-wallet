import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import HistoryItem from './HistoryItem';

export default {
  component: HistoryItem,
  title: 'History Item',
};

const Template: Story<ComponentProps<typeof HistoryItem>> = (args) => <HistoryItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  amount: 15,
  comment: 'Some Comment',
  dateTime: new Date(),
  direction: 'received',
  name: 'Bob Barker',
  onClick: null,
  sign: '+',
  status: 'succeeded',
};
