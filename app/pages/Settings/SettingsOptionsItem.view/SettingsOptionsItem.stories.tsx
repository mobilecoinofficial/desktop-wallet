import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { LockIcon } from '../../../components/icons';
import { SettingsOptionsItem } from './SettingsOptionsItem.view';

export default {
  component: SettingsOptionsItem,
  title: 'Settings/Options/Item',
};

const Template: Story<ComponentProps<typeof SettingsOptionsItem>> = (args) => (
  <SettingsOptionsItem {...args} />
);

const handleOnClick = () => {};

export const Item = Template.bind({});
Item.args = {
  Icon: LockIcon,
  handleOnClick,
  label: 'Lock',
  path: '/lock',
};
