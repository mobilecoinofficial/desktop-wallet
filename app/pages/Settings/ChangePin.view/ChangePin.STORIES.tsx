import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import { SnackbarProvider } from 'notistack';

import { ChangePinView } from './ChangePin.view';

export default {
  component: ChangePinView,
  title: 'Settings/Change Pin',
};

const Template: Story<ComponentProps<typeof ChangePinView>> = (args) => (
  <SnackbarProvider>
    <ChangePinView {...args} />
  </SnackbarProvider>
);

export const ChangePin = Template.bind({});
ChangePin.args = {
  accounts: [],
  pin: '111111',
  pinThresholdPmob: '1000000000000',
  setPin: () => Promise.resolve(undefined),
};
