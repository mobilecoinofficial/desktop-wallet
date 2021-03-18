import React from 'react';

import { Story } from '@storybook/react';

import ContactView from './ContactView';

export default {
  component: ContactView,
  title: 'Contacts/Add or Edit',
};

const Template: Story<React.ComponentProps<typeof ContactView>> = (args) => (
  <ContactView {...args} />
);

export const AddMode = Template.bind({});

AddMode.args = {
  onCancel: () => console.log('CANCELLED (from panel)'),
  onSaved: () => console.log('CREATED (to panel)'),
};

export const EditMode = Template.bind({});

EditMode.args = {
  abbreviation: 'FK',
  addressCode: '220960ABCDEF',
  contactAlias: 'My own person',
  favoriteContact: true,
  onCancel: () => console.log('CANCELLED (from panel)'),
  onSaved: () => console.log('SAVED (to panel)'),
};
