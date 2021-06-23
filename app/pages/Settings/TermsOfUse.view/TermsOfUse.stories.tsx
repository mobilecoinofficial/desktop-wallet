import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { TermsOfUseView } from './TermsOfUse.view';

export default {
  component: TermsOfUseView,
  title: 'Settings/Texts/Terms Of Use',
};

const Template: Story<ComponentProps<typeof TermsOfUseView>> = (args) => (
  <TermsOfUseView {...args} />
);

export const TermsOfUse = Template.bind({});
TermsOfUse.args = {};
