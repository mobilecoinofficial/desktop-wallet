import React from 'react';

// import { Story } from '@storybook/react';

import ContactView from './ContactForm.view';

export default {
  component: ContactView,
  title: 'Contacts/Add or Edit',
};

export const AddMode = () => (
  <ContactView
    onCancel={() => console.log('CANCELLED (from panel)')}
    onSaved={() => console.log('CREATED (to panel)')}
  />
);

export const EditMode = () => (
  <ContactView
    abbreviation="FK"
    alias="My own person"
    isFavorite
    onCancel={() => console.log('CANCELLED (from panel)')}
    onSaved={() => console.log('CREATED (to panel)')}
    recipientAddress="220960ABCDEF"
  />
);
