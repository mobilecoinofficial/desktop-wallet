import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { ContactCard } from './ContactCard.view';

export default {
  component: ContactCard,
  title: 'Contacts/Card',
};

const Template: Story<ComponentProps<typeof ContactCard>> = (args) => <ContactCard {...args} />;

export const StandardCard = Template.bind({});

StandardCard.args = {
  abbreviation: 'FK',
  alias: 'My own person',
  color: '#FF0000',
  isFavorite: true,
};
