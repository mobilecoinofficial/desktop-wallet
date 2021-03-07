import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import SplashScreen from './SplashScreen.component';

export default {
  component: SplashScreen,
  title: 'Components/SplashScreen',
};

const Template: Story<ComponentProps<typeof SplashScreen>> = (args) => <SplashScreen {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
