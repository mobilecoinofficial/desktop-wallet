import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { CrashShowLog } from './CrashShowLog.view';

export default {
  component: CrashShowLog,
  title: 'Pages/Dashboard',
};

const Template: Story<ComponentProps<typeof CrashShowLog>> = (args) => <CrashShowLog {...args} />;

export const CrashLog = Template.bind({});
CrashLog.args = {
  errorLog: '1. first line\n2. second line of the log\n3. third log line\n',
};
