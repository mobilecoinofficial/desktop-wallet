import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import PrivacyPolicy from './PrivacyPolicy.component';

export default {
  component: PrivacyPolicy,
  title: 'Components/PrivacyPolicy',
};

const Template: Story<ComponentProps<typeof PrivacyPolicy>> = () => <PrivacyPolicy />;

export const Primary = Template.bind({});
Primary.args = {};
