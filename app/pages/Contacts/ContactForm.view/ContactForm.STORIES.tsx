import React, { ComponentProps } from 'react';

import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

import { ContactFormProps } from './ContactForm';
import { ContactForm } from './ContactForm.view';

export default {
  component: ContactForm,
  title: 'Contacts/Add or Edit',
};

const Template: Story<ComponentProps<typeof ContactForm>> = (args: ContactFormProps) => (
  <ContactForm {...args} />
);

export const AddMode = Template.bind({});
AddMode.args = {
  onCancel: action('oncancel click'),
  onSaved: action('onsaved click'),
};

export const EditMode = Template.bind({});
EditMode.args = {
  abbreviation: 'FK',
  alias: 'My own person',
  color: '#FF0000',
  isFavorite: true,
  onCancel: action('oncancel click'),
  onSaved: action('onsaved click'),
  recipientAddress: '220960ABCDEF',
};
