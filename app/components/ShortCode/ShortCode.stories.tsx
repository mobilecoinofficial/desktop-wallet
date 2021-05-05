import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { ShortCode } from './ShortCode.view';

export default {
  component: ShortCode,
  title: 'ShortCode',
};

const Template: Story<ComponentProps<typeof ShortCode>> = (args) => <ShortCode {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  code: '1241cm3g',
};
