import React from 'react';
import type { FC } from 'react';

import ContactView from './ContactView';

const ContactPanel: FC = () => {
  return (
    <ContactView
      onCancel={() => console.log('CANCELLED (from panel)')}
      onSaved={() => console.log('CREATED (to panel)')}
    />
  );
};

export default ContactPanel;
