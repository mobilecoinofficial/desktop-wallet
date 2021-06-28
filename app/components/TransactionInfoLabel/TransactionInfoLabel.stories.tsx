import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { TransactionInfoLabel } from './TransactionInfoLabel.view';

export default {
  component: TransactionInfoLabel,
  title: 'General/Components/Transaction Info Label',
};

const Template: Story<ComponentProps<typeof TransactionInfoLabel>> = (args) => (
  <TransactionInfoLabel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: ' MOB',
  sign: '+',
  valuePmob: '154',
};

export const Negative = Template.bind({});
Negative.args = {
  label: ' MOB',
  sign: '-',
  valuePmob: '229',
};
