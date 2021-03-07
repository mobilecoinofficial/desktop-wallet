import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import TransactionInfoLabel from './TransactionInfoLabel.component';

export default {
  component: TransactionInfoLabel,
  title: 'Components/Transaction Info Label',
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
