import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { ShowRetrievedEntropyModal } from './ShowRetrievedEntropy.view';

export default {
  component: ShowRetrievedEntropyModal,
  title: 'Settings/Entropy/Show Retrieved Entropy',
};

const Template: Story<ComponentProps<typeof ShowRetrievedEntropyModal>> = (args) => (
  <ShowRetrievedEntropyModal {...args} />
);

export const ShowRetrievedEntropy = Template.bind({});
ShowRetrievedEntropy.args = {
  entropy: '0189237809162578012341578095785623235456457863945781623480',
  open: true,
};
