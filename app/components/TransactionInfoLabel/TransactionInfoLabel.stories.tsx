import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import TransactionInfoLabel from './TransactionInfoLabel';

export default {
  component: TransactionInfoLabel,
  title: 'Transaction Info Label',
};

const Template: Story<ComponentProps<typeof TransactionInfoLabel>> = (args) => (
  <TransactionInfoLabel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  amount: 15,
  label: 'MOB',
  sign: '+',
};
