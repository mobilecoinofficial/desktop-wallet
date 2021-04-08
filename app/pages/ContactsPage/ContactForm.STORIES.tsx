import React from 'react';

import { action } from '@storybook/addon-actions';

import ContactView from './ContactForm.view';

export default {
  component: ContactView,
  title: 'Contacts/Add or Edit',
};

export const AddMode = () => (
  <ContactView onCancel={action('oncancel click')} onSaved={action('onsaved click')} />
);

export const EditMode = () => (
  <ContactView
    abbreviation="FK"
    alias="My own person"
    isFavorite
    onCancel={action('oncancel click')}
    onSaved={action('onsaved click')}
    recipientAddress="220960ABCDEF"
  />
);
