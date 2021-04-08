import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { ContactsList } from './ContactsList.view';

export default {
  component: ContactsList,
  title: 'Contacts/List',
};

const Template: Story<ComponentProps<typeof ContactsList>> = (args) => <ContactsList {...args} />;

export const StandardList = Template.bind({});
StandardList.args = {
  contactsList: [
    { abbreviation: 'F1', alias: 'Foxtrot Golf', color: '#FF0000', isFavorite: true },
    { abbreviation: 'K2', alias: 'Kilo Lima', color: '#00FF00', isFavorite: false },
    { abbreviation: 'ST', alias: 'Sierra Tango', color: '#0000FF', isFavorite: true },
  ],
};

export const EmptyList = Template.bind({});
EmptyList.args = {
  contactsList: [],
};
