import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { LeaveFullServiceRunning } from './LeaveFullServiceRunning.view';

export default {
  component: LeaveFullServiceRunning,
  title: 'Settings/Configure/Leave Service Running',
};

const Template: Story<ComponentProps<typeof LeaveFullServiceRunning>> = (args) => (
  <LeaveFullServiceRunning {...args} />
);

export const LeaveServiceRunning = Template.bind({});
LeaveServiceRunning.args = {
  leaveFullServiceRunning: true,
};
