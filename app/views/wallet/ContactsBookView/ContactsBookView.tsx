import React, { useState } from 'react';
import type { FC } from 'react';

import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';

import useFullService from '../../../hooks/useFullService';
import ContactView from './ContactView';
import ContactsList from './ContactsList';

const randomColor = () => {
  const RANDOM_COLORS = ['#8B35E0', '#1F639A', '#EAA520', '#15A389', '#8D969D', '#D82E26'];
  return RANDOM_COLORS[Math.floor(RANDOM_COLORS.length * Math.random())];
};

const ContactsBookView: FC = () => {
  const SHOW_ADD = 'SHOW_ADD';
  const SHOW_EDIT = 'SHOW_EDIT';
  const SHOW_LIST = 'SHOW_LIST';

  const [status, setStatus] = useState(SHOW_LIST);
  const [current, setCurrent] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const { contacts, selectedAccount, assignAddressForAccount, updateContacts } = useFullService();

  const { t } = useTranslation('ContactsBookView');

  const sortedContacts = [...contacts].sort((a, b) => {
    if (a.isFavorite !== b.isFavorite) {
      return a.isFavorite ? -1 : 1;
    }
    if (a.alias.toUpperCase() !== b.alias.toUpperCase()) {
      return a.alias.toUpperCase() > b.alias.toUpperCase() ? 1 : -1;
    }
    return 0;
  });

  switch (status) {
    case SHOW_LIST:
      return (
        <ContactsList
          contactsList={sortedContacts}
          onAdd={() => setStatus(SHOW_ADD)}
          onEdit={(idToEdit: string) => {
            setCurrent(sortedContacts.find((x) => x.assignedAddress === idToEdit));
            setStatus(SHOW_EDIT);
          }}
        />
      );

    case SHOW_ADD:
      return (
        <ContactView
          onCancel={() => setStatus(SHOW_LIST)}
          onSaved={async ({ abbreviation, alias, isFavorite, recipientAddress }) => {
            const result = await assignAddressForAccount({
              accountId: selectedAccount.account.accountId || Math.random(),
            });

            setStatus(SHOW_LIST);
            contacts.push({
              abbreviation,
              alias,
              assignedAddress: result.address.publicAddress,
              color: randomColor(),
              isFavorite,
              recipientAddress,
            });
            updateContacts(contacts);

            enqueueSnackbar(t('added'), { variant: 'success' });
          }}
        />
      );

    case SHOW_EDIT:
      return (
        <ContactView
          abbreviation={current.abbreviation}
          alias={current.alias}
          assignedAddress={current.assignedAddress}
          color={current.color}
          isFavorite={current.isFavorite}
          recipientAddress={current.recipientAddress}
          onCancel={() => setStatus(SHOW_LIST)}
          onDelete={() => {
            contacts.splice(
              contacts.findIndex((x) => x.assignedAddress === current.assignedAddress),
              1
            );
            updateContacts(contacts);
            setStatus(SHOW_LIST);
            enqueueSnackbar(t('removed'), { variant: 'success' });
          }}
          onSaved={({ abbreviation, alias, color, isFavorite, recipientAddress }) => {
            contacts[contacts.findIndex((x) => x.assignedAddress === current.assignedAddress)] = {
              abbreviation,
              alias,
              assignedAddress: current.assignedAddress,
              color: color || randomColor(),
              isFavorite,
              recipientAddress,
            };
            updateContacts(contacts);
            setStatus(SHOW_LIST);
            enqueueSnackbar(t('updated'), { variant: 'success' });
          }}
        />
      );

    default:
      return <Redirect to="-" />;
  }
};

export default ContactsBookView;
