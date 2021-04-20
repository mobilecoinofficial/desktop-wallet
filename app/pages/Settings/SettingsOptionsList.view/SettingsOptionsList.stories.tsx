import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { KeyIcon, LockIcon, ToolsIcon } from '../../../components/icons';
import { SettingsOptionsListProps } from './SettingsOptionsList';
import SettingsOptionsList from './SettingsOptionsList.view';

export default {
  component: SettingsOptionsList,
  title: 'Settings/Options List',
};

const Template: Story<ComponentProps<typeof SettingsOptionsList>> = (
  args: SettingsOptionsListProps
) => <SettingsOptionsList {...args} />;

export const FullList = Template.bind({});
FullList.args = {
  settingOptionsList: [
    {
      Icon: LockIcon,
      label: 'Lock',
      path: '/lock',
    },
    {
      Icon: KeyIcon,
      label: 'Key',
      path: '/key',
    },
    {
      Icon: ToolsIcon,
      label: 'Tools',
      path: '/tools',
    },
  ],
};
