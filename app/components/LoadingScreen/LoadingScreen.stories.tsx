import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import LoadingScreen from './LoadingScreen.component';

export default {
  component: LoadingScreen,
  title: 'Components/LoadingScreen',
};

const Template: Story<ComponentProps<typeof LoadingScreen>> = (args) => <LoadingScreen {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
