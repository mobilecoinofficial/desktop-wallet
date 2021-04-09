import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { ContactCardProps } from './ContactCard.d';
import { ContactCard } from './ContactCard.view';

export default {
  component: ContactCard,
  title: 'Contacts/Card',
};

const Template: Story<ComponentProps<typeof ContactCard>> = (args: ContactCardProps) => (
  <ContactCard {...args} />
);

export const Card = Template.bind({});
Card.args = {
  abbreviation: 'FK',
  alias: 'My own person',
  assignedAddress: '1234567890',
  color: '#FF0000',
  isFavorite: true,
};
