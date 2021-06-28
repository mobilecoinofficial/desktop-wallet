import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { ShortCode } from './ShortCode.view';

export default {
  component: ShortCode,
  title: 'General/Components',
};

const Template: Story<ComponentProps<typeof ShortCode>> = (args) => <ShortCode {...args} />;

export const ShortCodeExample = Template.bind({});
ShortCodeExample.args = {
  code: '1241cm3g',
};
