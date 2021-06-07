import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { CloseWalletModal } from './CloseWalletModal.view';

export default {
  component: CloseWalletModal,
  title: 'Pages/Dashboard',
};

const Template: Story<ComponentProps<typeof CloseWalletModal>> = (args) => (
  <CloseWalletModal {...args} />
);

export const Close = Template.bind({});
Close.args = {};
