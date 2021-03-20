import React, { useState } from 'react';
import type { FC } from 'react';

import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';

import * as localStore from '../../../utils/LocalStore';
import ContactView from './ContactView';
import ContactsList from './ContactsList';

const listOfContacts = localStore.getContacts();

const ContactsBookView: FC = () => {
  const SHOW_ADD = 'SHOW_ADD';
  const SHOW_EDIT = 'SHOW_EDIT';
  const SHOW_LIST = 'SHOW_LIST';

  const [status, setStatus] = useState(SHOW_LIST);
  const [current, setCurrent] = useState({});
  const { enqueueSnackbar } = useSnackbar();

  const { t } = useTranslation('ContactsBookView');

  const sortedContacts = listOfContacts.sort((a, b) =>
    a.alias.toUpperCase() > b.alias.toUpperCase() ? 1 : -1
  );

  switch (status) {
    case SHOW_LIST:
      return (
        <ContactsList
          contactsList={sortedContacts}
          onAdd={() => setStatus(SHOW_ADD)}
          onEdit={(idToEdit: string) => {
            setCurrent(sortedContacts.find((x) => x.id === idToEdit));
            setStatus(SHOW_EDIT);
          }}
        />
      );

    case SHOW_ADD:
      return (
        <ContactView
          onCancel={() => setStatus(SHOW_LIST)}
          onSaved={({ abbreviation, alias, isFavorite, recipientAddress }) => {
            listOfContacts.push({
              abbreviation,
              alias,
              id: recipientAddress.substr(1, 5),
              isFavorite,
              recipientAddress,
            });
            localStore.setContacts(listOfContacts);
            setStatus(SHOW_LIST);
            enqueueSnackbar(t('added'), { variant: 'success' });
          }}
        />
      );

    case SHOW_EDIT:
      return (
        <ContactView
          abbreviation={current.abbreviation}
          alias={current.alias}
          isFavorite={current.isFavorite}
          recipientAddress={current.recipientAddress}
          onCancel={() => setStatus(SHOW_LIST)}
          onDelete={() => {
            listOfContacts.splice(
              listOfContacts.findIndex((x) => x.id === current.id),
              1
            );
            localStore.setContacts(listOfContacts);
            setStatus(SHOW_LIST);
            enqueueSnackbar(t('removed'), { variant: 'success' });
          }}
          onSaved={({ abbreviation, alias, isFavorite, recipientAddress }) => {
            listOfContacts[listOfContacts.findIndex((x) => x.id === current.id)] = {
              abbreviation,
              alias,
              id: current.id,
              isFavorite,
              recipientAddress,
            };
            localStore.setContacts(listOfContacts);
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
