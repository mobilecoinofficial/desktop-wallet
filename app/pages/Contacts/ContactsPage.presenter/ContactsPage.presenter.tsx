import React, { useState } from 'react';
import type { FC } from 'react';

import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { randomColor } from '../../../constants/app';
import { ReduxStoreState } from '../../../redux/reducers/reducers';
import { updateContacts } from '../../../redux/services';
import { assignAddressForAccount } from '../../../services';
import type { Contact } from '../../../types/Contact.d';
import { ContactForm } from '../ContactForm.view';
import { ContactsList } from '../ContactsList.view';

export const ContactsPage: FC = (): JSX.Element => {
  enum PAGE {
    ADD,
    EDIT,
    LIST,
  }

  const { contacts, selectedAccount } = useSelector((state: ReduxStoreState) => state);
  const [status, setStatus] = useState(PAGE.LIST);
  const [current, setCurrent] = useState({} as Contact);
  const { enqueueSnackbar } = useSnackbar();

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
    id,
    recipientAddress,
  }: Contact) => {
    const result = await assignAddressForAccount(
      selectedAccount.account.accountId || String(Math.random())
    );

    setStatus(PAGE.LIST);
    contacts.push({
      abbreviation,
      alias,
      assignedAddress: result.address.publicAddressB58,
      color,
      id,
      isFavorite,
      recipientAddress,
    });
    await updateContacts(contacts);

    enqueueSnackbar(t('added'), { variant: 'success' });
  };

  const deleteContact = async () => {
    contacts.splice(
      contacts.findIndex((c) => c.id === current.id),
      1
    );
    await updateContacts(contacts);
    setStatus(PAGE.LIST);
    enqueueSnackbar(t('removed'), { variant: 'success' });
  };

  const editContact = (id: string) => {
    setCurrent(sortedContacts.find((c) => c.id === id) as Contact);
    setStatus(PAGE.EDIT);
  };

  const updateContact = async ({
    abbreviation,
    alias,
    color,
    id,
    isFavorite,
    recipientAddress,
  }: Contact) => {
    contacts[contacts.findIndex((c) => c.id === current.id)] = {
      abbreviation,
      alias,
      assignedAddress: current.assignedAddress,
      color: color || randomColor(),
      id,
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
          onClickAdd={() => setStatus(PAGE.ADD)}
          onClickEdit={editContact}
        />
      );

    case PAGE.ADD:
      return (
        <ContactForm onClickCancel={() => setStatus(PAGE.LIST)} onClickSaved={addNewContact} />
      );

    case PAGE.EDIT:
      return (
        <ContactForm
          id={current.id}
          abbreviation={current.abbreviation}
          alias={current.alias}
          assignedAddress={current.assignedAddress}
          color={current.color}
          isFavorite={current.isFavorite}
          recipientAddress={current.recipientAddress}
          onClickCancel={() => setStatus(PAGE.LIST)}
          onClickDelete={deleteContact}
          onClickSaved={updateContact}
        />
      );

    default:
      return <Redirect to="-" />;
  }
};
