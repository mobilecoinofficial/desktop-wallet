import React, { useState } from 'react';
import type { FC } from 'react';

import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';

import useFullService from '../../../hooks/useFullService';
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
  const { selectedAccount, assignAddressForAccount } = useFullService();

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
              accountId: selectedAccount.account.accountId,
            });

            setStatus(SHOW_LIST);
            listOfContacts.push({
              abbreviation,
              alias,
              assignedAddress: result.address.publicAddress,
              isFavorite,
              recipientAddress,
            });
            localStore.setContacts(listOfContacts);
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
          isFavorite={current.isFavorite}
          recipientAddress={current.recipientAddress}
          onCancel={() => setStatus(SHOW_LIST)}
          onDelete={() => {
            listOfContacts.splice(
              listOfContacts.findIndex((x) => x.assignedAddress === current.assignedAddress),
              1
            );
            localStore.setContacts(listOfContacts);
            setStatus(SHOW_LIST);
            enqueueSnackbar(t('removed'), { variant: 'success' });
          }}
          onSaved={({ abbreviation, alias, isFavorite, recipientAddress }) => {
            listOfContacts[
              listOfContacts.findIndex((x) => x.assignedAddress === current.assignedAddress)
            ] = {
              abbreviation,
              alias,
              assignedAddress: current.assignedAddress,
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
