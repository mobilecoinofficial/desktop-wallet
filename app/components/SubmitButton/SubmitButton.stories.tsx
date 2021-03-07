import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import SubmitButton from './SubmitButton.component';

export default {
  component: SubmitButton,
  title: 'Components/Submit Button',
};

const Template: Story<ComponentProps<typeof SubmitButton>> = (args) => <SubmitButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonClass: '',
  children: 'Submit',
  disabled: false,
  isSubmitting: false,
  onClick: () => {},
  testID: '',
};
