import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { DeleteAccountConfirmationView } from './DeleteAccountConfirmation.view';

export default {
  component: DeleteAccountConfirmationView,
  title: 'Settings/Accounts/DeleteAccountConfirmationView',
};

const Template: Story<ComponentProps<typeof DeleteAccountConfirmationView>> = (args) => (
  <DeleteAccountConfirmationView {...args} />
);

export const DeleteAccountConfirmation = Template.bind({});
DeleteAccountConfirmation.args = {
  cancel: undefined,
  confirm: undefined,
  selectedAccountId: '3b4522e8e42a2269f802f16f6999062c1c0e6aafe765eef8f7b78156f9d6b2c5',
  shortCode: '7AqV3PSf',
};
