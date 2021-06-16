import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { PrivacyPolicyView } from './PrivacyPolicy.view';

export default {
  component: PrivacyPolicyView,
  title: 'Settings/Texts/Privacy Policy',
};

const Template: Story<ComponentProps<typeof PrivacyPolicyView>> = (args) => (
  <PrivacyPolicyView {...args} />
);

export const PrivacyPolicy = Template.bind({});
PrivacyPolicy.args = {};
