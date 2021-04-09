import React from 'react';
import type { FC } from 'react';

import { action } from '@storybook/addon-actions';

import { ContactFormProps } from './ContactForm';
import ContactForm from './ContactForm.view';

export default {
  component: ContactForm,
  title: 'Contacts/Add or Edit',
};

export const AddMode: FC<ContactFormProps> = () => (
  <ContactForm onCancel={action('oncancel click')} onSaved={action('onsaved click')} />
);

export const EditMode: FC<ContactFormProps> = () => (
  <ContactForm
    abbreviation="FK"
    alias="My own person"
    isFavorite
    onCancel={action('oncancel click')}
    onSaved={action('onsaved click')}
    recipientAddress="220960ABCDEF"
  />
);
