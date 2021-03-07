import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import TermsOfUse from './TermsOfUse.component';

export default {
  component: TermsOfUse,
  title: 'Components/TermsOfUse',
};

const Template: Story<ComponentProps<typeof TermsOfUse>> = () => <TermsOfUse />;

export const Primary = Template.bind({});
Primary.args = {};
