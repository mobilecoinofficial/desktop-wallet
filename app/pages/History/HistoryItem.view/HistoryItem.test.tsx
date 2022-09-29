import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';

import { store } from '../../../redux/store';
import type { TransactionLog } from '../../../types/TransactionLog.d';
import '../../../testUtils/i18nForTests';
import { HistoryItem } from './HistoryItem.view';

const CONTACT = {
  abbreviation: 'J',
  alias: 'JOHN',
  assignedAddress:
    '5XieM3EVMUm49muLwxwF8M8Y58GaNaR7tAftZ2LcgYk7ty6zAhef3RAtTBTLv2UgDRqGEbQFECjEjbPm9K6u4tVbaGVqYMxGKaEMedU3kKx',
  color: '#15A389',
  isFavorite: false,
  recipientAddress:
    'eo7bLKA1kNNgLHGUMnf5sHZ5Hj52YqGNyia52eaacEqUimqxXUM91pDKJU22cca8S4rbSvrfJhkhyTWFRwvFQZKDE5p6M52B3dbVpgLo9z',
};

describe('History Item', () => {
  test('shows sent TXO, with contact', () => {
    const { getByText } = render(
      <Provider store={store}>
        <HistoryItem
          transactionLog={
            {
              assignedAddressId: 'XYZABC123456',
              contact: CONTACT,
              direction: 'tx_direction_sent',
              finalizedBlockIndex: '123456',
              recipientAddressId: null,
              tokenId: 0,
              value: '220960000000',
            } as TransactionLog
          }
          onClick={() => undefined}
        />
      </Provider>
    );

    expect(getByText('JOHN')).toBeInTheDocument();
    expect(getByText('SENT')).toBeInTheDocument();
    expect(getByText('-0.220960000000 MOB')).toBeInTheDocument();
  });

  test('shows sent TXO, without contact', () => {
    const { getByText } = render(
      <Provider store={store}>
        <HistoryItem
          transactionLog={
            {
              assignedAddressId: 'XYZABC123456',
              contact: undefined,
              direction: 'tx_direction_sent',
              finalizedBlockIndex: '123456',
              recipientAddressId: 'eo7bLKA1kNNgLHGUMnf5sHZ5Hj52YqGNyia52e',
              tokenId: 0,
              value: '220960000000',
            } as TransactionLog
          }
          onClick={() => undefined}
        />
      </Provider>
    );

    expect(getByText('SENT')).toBeInTheDocument();
    expect(getByText('-0.220960000000 MOB')).toBeInTheDocument();
  });

  test('shows sent TXO, without contact nor addresses', () => {
    const { getByText, container } = render(
      <Provider store={store}>
        <HistoryItem
          transactionLog={
            {
              assignedAddressId: '',
              contact: undefined,
              direction: 'tx_direction_sent',
              finalizedBlockIndex: '123456',
              recipientAddressId: null,
              tokenId: 0,
              value: '220960000000',
            } as TransactionLog
          }
          onClick={() => undefined}
        />
      </Provider>
    );

    expect(container.innerHTML.includes('---')).toBeTruthy();
    expect(getByText('SENT')).toBeInTheDocument();
    expect(getByText('-0.220960000000 MOB')).toBeInTheDocument();
  });

  test('shows received TXO, without contact, with recipient address Id', () => {
    const { getByText } = render(
      <Provider store={store}>
        <HistoryItem
          transactionLog={
            {
              assignedAddressId: 'XYZABC123456',
              contact: undefined,
              direction: 'tx_direction_received',
              finalizedBlockIndex: '345678',
              recipientAddressId: '101010101010101',
              tokenId: 0,
              value: '31415926',
            } as TransactionLog
          }
          onClick={() => undefined}
        />
      </Provider>
    );

    expect(getByText('RECEIVED')).toBeInTheDocument();
    expect(getByText('+0.000031415926 MOB')).toBeInTheDocument();
  });

  test('shows received TXO, without contact, without addresses', () => {
    const { getByText, container } = render(
      <Provider store={store}>
        <HistoryItem
          transactionLog={
            {
              assignedAddressId: '',
              contact: undefined,
              direction: 'tx_direction_received',
              finalizedBlockIndex: '345678',
              recipientAddressId: null,
              tokenId: 0,
              value: '31415926',
            } as TransactionLog
          }
          onClick={() => undefined}
        />
      </Provider>
    );

    expect(container.innerHTML.includes('Orphaned')).toBeTruthy();
    expect(getByText('RECEIVED')).toBeInTheDocument();
    expect(getByText('+0.000031415926 MOB')).toBeInTheDocument();
  });
});
