import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { ImportAccountView } from './ImportAccount.view';

export default {
  component: ImportAccountView,
  title: 'Account/Import',
};

const Template: Story<ComponentProps<typeof ImportAccountView>> = (args) => (
  <ImportAccountView {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
