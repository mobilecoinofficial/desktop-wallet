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
  shortCode: '7AqV3PSf',
};
