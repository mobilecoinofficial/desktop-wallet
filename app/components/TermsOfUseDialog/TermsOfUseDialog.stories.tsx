import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import TermsOfUseDialog from './TermsOfUseDialog.component';

export default {
  component: TermsOfUseDialog,
  title: 'Components/TermsOfUseDialog',
};

const Template: Story<ComponentProps<typeof TermsOfUseDialog>> = (args) => (
  <TermsOfUseDialog {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  handleCloseTerms: () => {},
  open: true,
};
