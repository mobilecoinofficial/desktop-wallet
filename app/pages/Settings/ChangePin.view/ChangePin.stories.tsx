import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { ChangePinView } from './ChangePin.view';

export default {
  component: ChangePinView,
  title: 'Settings/Change',
};

const Template: Story<ComponentProps<typeof ChangePinView>> = (args) => <ChangePinView {...args} />;

export const ChangePin = Template.bind({});
ChangePin.args = {
  accounts: [],
  pin: '111111',
  pinThresholdPmob: '1000000000000',
};
