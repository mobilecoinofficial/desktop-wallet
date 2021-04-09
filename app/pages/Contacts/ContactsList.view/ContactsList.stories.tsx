import React from 'react';
import type { FC } from 'react';

import { action } from '@storybook/addon-actions';

import { ContactsListProps } from './ContactsList';
import ContactsList from './ContactsList.view';

export default {
  component: ContactsList,
  title: 'Contacts/List',
};

export const FullList: FC<ContactsListProps> = () => (
  <ContactsList
    contactsList={[
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
    ]}
    onAdd={action('onadd click')}
    onEdit={action('onedit click')}
  />
);

export const EmptyList: FC<ContactsListProps> = () => (
  <ContactsList contactsList={[]} onAdd={action('onadd click')} onEdit={action('onedit click')} />
);
