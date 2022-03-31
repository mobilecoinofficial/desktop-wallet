import React, { useState } from 'react';
import type { FC } from 'react';

import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { randomColor } from '../../../constants/app';
import { ReduxStoreState } from '../../../redux/reducers/reducers';
import { updateContacts } from '../../../redux/services';
import { assignAddressForAccount } from '../../../services';
import { SelectedAccount } from '../../../types';
import type { Contact } from '../../../types/Contact.d';
import { ContactForm } from '../ContactForm.view';
import { ContactsList } from '../ContactsList.view';

type Props = ReduxProps;

const ContactsPage: FC<Props> = (props: Props): JSX.Element => {
  enum PAGE {
    ADD,
    EDIT,
    LIST,
  }

  const [status, setStatus] = useState(PAGE.LIST);
  const [current, setCurrent] = useState({} as Contact);
  const { enqueueSnackbar } = useSnackbar();
  const { contacts, selectedAccount } = props;

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
      selectedAccount.account.accountId || String(Math.random())
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

type ReduxProps = { contacts: Contact[]; selectedAccount: SelectedAccount };

const mapState = (state: ReduxStoreState): ReduxProps => ({
  contacts: state.contacts,
  selectedAccount: state.selectedAccount,
});

export const ConnectedContactsPage = connect<
  ReduxProps,
  Record<string, never>,
  Record<string, never>,
  ReduxStoreState
>(mapState)(ContactsPage);
