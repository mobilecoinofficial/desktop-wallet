import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { KeyIcon, LockIcon, ToolsIcon } from '../../../components/icons';
import { SettingsOptionsList } from './SettingsOptionsList.view';

export default {
  component: SettingsOptionsList,
  title: 'Settings/Options/List',
};

const Template: Story<ComponentProps<typeof SettingsOptionsList>> = (args) => (
  <SettingsOptionsList {...args} />
);

const handleOnClick = () => {};

export const List = Template.bind({});
List.args = {
  settingOptionsList: [
    {
      Icon: LockIcon,
      handleOnClick,
      label: 'Lock',
      path: '/lock',
    },
    {
      Icon: KeyIcon,
      handleOnClick,
      label: 'Key',
      path: '/key',
    },
    {
      Icon: ToolsIcon,
      handleOnClick,
      label: 'Tools',
      path: '/tools',
    },
  ],
};
