import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { NotFoundPage } from './NotFound.view';

export default {
  component: NotFoundPage,
  title: 'Not Found',
};

const Template: Story<ComponentProps<typeof NotFoundPage>> = (args) => (
  <MemoryRouter>
    <NotFoundPage {...args} />
  </MemoryRouter>
);

export const Item = Template.bind({});
Item.args = {};
