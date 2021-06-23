import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { FullServiceDirectory } from './FullServiceDirectory.view';

export default {
  component: FullServiceDirectory,
  title: 'Settings/Configure/Full Service Directory Paths',
};

const Template: Story<ComponentProps<typeof FullServiceDirectory>> = (args) => (
  <FullServiceDirectory {...args} />
);

export const FullServiceDirectoryPaths = Template.bind({});
FullServiceDirectoryPaths.args = {
  fullServiceDbPath: 'another/path/to/the/fullServiceDb',
  ledgerDbPath: '/some/path/to/the/ledgerDb',
};
