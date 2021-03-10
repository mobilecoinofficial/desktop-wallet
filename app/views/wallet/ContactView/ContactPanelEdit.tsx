import React from 'react';
import type { FC } from 'react';

import ContactView from './ContactView';

const ContactPanel: FC = () => {
  return (
    <ContactView
      abbreviation="FK"
      addressCode="220960ABCDEF"
      contactAlias="My own person"
      favoriteContact
      onCancel={() => console.log('CANCELLED (from panel)')}
      onSaved={() => console.log('SAVED (to panel)')}
    />
  );
};

export default ContactPanel;
