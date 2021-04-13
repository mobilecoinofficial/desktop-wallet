import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { ContactsListProps } from './ContactsList';
import { ContactsList } from './ContactsList.view';

export default {
  component: ContactsList,
  title: 'Contacts/List',
};

const Template: Story<ComponentProps<typeof ContactsList>> = (args: ContactsListProps) => (
  <ContactsList {...args} />
);

export const FullList = Template.bind({});
FullList.args = {
  contactsList: [
    {
      abbreviation: 'F1',
      alias: 'Foxtrot Golf',
      assignedAddress: '11111',
      color: '#FF0000',
      isFavorite: true,
    },
    {
      abbreviation: 'K2',
      alias: 'Kilo Lima',
      assignedAddress: '22222',
      color: '#00FF00',
      isFavorite: false,
    },
    {
      abbreviation: 'ST',
      alias: 'Sierra Tango',
      assignedAddress: '33333',
      color: '#0000FF',
      isFavorite: true,
    },
  ],
};

export const EmptyList = Template.bind({});
EmptyList.args = { contactsList: [] };
