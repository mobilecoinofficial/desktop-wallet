import React from 'react';

import { action } from '@storybook/addon-actions';

import { ContactCard } from './ContactCard.view';

export default {
  component: ContactCard,
  title: 'Contacts/Card',
};

export const Card = () => (
  <ContactCard
    abbreviation="FK"
    alias="My own person"
    assignedAddress="1234567890"
    color="#FF0000"
    isFavorite
    onEdit={action('onedit click')}
  />
);
