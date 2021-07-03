import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { RetrieveEntropyView } from './RetrieveEntropy.view';

export default {
  component: RetrieveEntropyView,
  title: 'Settings/Entropy/Retrieve Entropy',
};

const Template: Story<ComponentProps<typeof RetrieveEntropyView>> = (args) => (
  <RetrieveEntropyView {...args} />
);

export const RetrieveEntropy = Template.bind({});
RetrieveEntropy.args = {
  accounts: [],
  retrieveEntropy: () =>
    Promise.resolve('220960220960120456120456220960220960120456120456220960220960120456120456'),
};
