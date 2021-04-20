import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { LockIcon } from '../../../components/icons';
import { SettingsOptionsItemProps } from './SettingsOptionsItem.d';
import SettingsOptionsItem from './SettingsOptionsItem.view';

export default {
  component: SettingsOptionsItem,
  title: 'Settings/Options Item',
};

const Template: Story<ComponentProps<typeof SettingsOptionsItem>> = (
  args: SettingsOptionsItemProps
) => <SettingsOptionsItem {...args} />;

export const Item = Template.bind({});
Item.args = {
  Icon: LockIcon,
  label: 'Lock',
  path: '/lock',
};
