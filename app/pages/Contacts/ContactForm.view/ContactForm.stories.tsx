import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { ContactForm } from './ContactForm.view';

export default {
  component: ContactForm,
  title: 'Pages/Contacts/Add or Edit',
};

const Template: Story<ComponentProps<typeof ContactForm>> = (args) => <ContactForm {...args} />;

export const Adding = Template.bind({});
Adding.args = {};

export const Editing = Template.bind({});
Editing.args = {
  abbreviation: 'FK',
  alias: 'My own person',
  color: '#FF0000',
  isFavorite: true,
  recipientAddress: '220960ABCDEF',
};
