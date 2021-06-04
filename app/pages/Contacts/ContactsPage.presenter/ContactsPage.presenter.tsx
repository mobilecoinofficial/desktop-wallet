import React, { useState } from 'react';
import type { FC } from 'react';

import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';

import { randomColor } from '../../../constants/app';
import useFullService from '../../../hooks/useFullService';
import { assignAddressForAccount, updateContacts } from '../../../services';
import type { Contact } from '../../../types/Contact.d';
import { ContactForm } from '../ContactForm.view';
import { ContactsList } from '../ContactsList.view';

const ContactsPage: FC = () => {
  enum PAGE {
    ADD,
    EDIT,
    LIST,
  }

  const [status, setStatus] = useState(PAGE.LIST);
  const [current, setCurrent] = useState({} as Contact);
  const { enqueueSnackbar } = useSnackbar();
  const { contacts, selectedAccount } = useFullService();

  const { t } = useTranslation('ContactsPage');

  const sortedContacts: Contact[] = [...contacts].sort((a, b) => {
    if (a.isFavorite !== b.isFavorite) {
      return a.isFavorite ? -1 : 1;
    }
    if (a.alias.toUpperCase() !== b.alias.toUpperCase()) {
      return a.alias.toUpperCase() > b.alias.toUpperCase() ? 1 : -1;
    }
    return 0;
  }) as Contact[];

  const addNewContact = async ({
    abbreviation,
    alias,
    color,
    isFavorite,
    recipientAddress,
  }: Contact) => {
    const result = await assignAddressForAccount(
      selectedAccount.account.accountId || Math.random()
    );

    setStatus(PAGE.LIST);
    contacts.push({
      abbreviation,
      alias,
      assignedAddress: result.address.publicAddress,
      color,
      isFavorite,
      recipientAddress,
    });
    await updateContacts(contacts);

    enqueueSnackbar(t('added'), { variant: 'success' });
  };

  const deleteContact = async () => {
    contacts.splice(
      contacts.findIndex((x) => x.assignedAddress === current.assignedAddress),
      1
    );
    await updateContacts(contacts);
    setStatus(PAGE.LIST);
    enqueueSnackbar(t('removed'), { variant: 'success' });
  };

  const editContact = (idToEdit: string) => {
    setCurrent(sortedContacts.find((x) => x.assignedAddress === idToEdit) as Contact);
    setStatus(PAGE.EDIT);
  };

  const updateContact = async ({
    abbreviation,
    alias,
    color,
    isFavorite,
    recipientAddress,
  }: Contact) => {
    contacts[contacts.findIndex((x) => x.assignedAddress === current.assignedAddress)] = {
      abbreviation,
      alias,
      assignedAddress: current.assignedAddress,
      color: color || randomColor(),
      isFavorite,
      recipientAddress,
    };
    await updateContacts(contacts);
    setStatus(PAGE.LIST);
    enqueueSnackbar(t('updated'), { variant: 'success' });
  };

  switch (status) {
    case PAGE.LIST:
      return (
        <ContactsList
          contactsList={sortedContacts}
          onAdd={() => setStatus(PAGE.ADD)}
          onEdit={editContact}
        />
      );

    case PAGE.ADD:
      return <ContactForm onCancel={() => setStatus(PAGE.LIST)} onSaved={addNewContact} />;

    case PAGE.EDIT:
      return (
        <ContactForm
          abbreviation={current.abbreviation}
          alias={current.alias}
          assignedAddress={current.assignedAddress}
          color={current.color}
          isFavorite={current.isFavorite}
          recipientAddress={current.recipientAddress}
          onCancel={() => setStatus(PAGE.LIST)}
          onDelete={deleteContact}
          onSaved={updateContact}
        />
      );

    default:
      return <Redirect to="-" />;
  }
};

export default ContactsPage;
export { ContactsPage };
