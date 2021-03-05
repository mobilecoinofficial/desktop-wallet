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
  amount: 15,
  comment: 'Some comment here',
  dateTime: new Date(),
  direction: 'receiving',
  id: 'nfr291k9vm42v3',
  name: 'George Costanza',
  onChangedComment: null,
  onClickBack: null,
  sign: '+',
  status: 'pending',
};
