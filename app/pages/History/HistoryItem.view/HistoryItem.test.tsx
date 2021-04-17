import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TransactionLog from '../../../types/TransactionLog';
import '../../../testUtils/i18nForTests';
import { HistoryItem } from './HistoryItem.view';

test('Displays sent TXO', () => {
  const { getByText } = render(
    <HistoryItem
      transactionLog={
        {
          assignedAddressId: 'XYZABC123456',
          contact: undefined,
          direction: 'tx_direction_sent',
          finalizedBlockIndex: '123456',
          recipientAddressId: null,
          valuePmob: '220960000000',
        } as TransactionLog
      }
      onClick={() => undefined}
    />
  );

  expect(getByText('SENT')).toBeInTheDocument();
  expect(getByText('-0.220960000000 MOB')).toBeInTheDocument();
});

test('Displays received TXO', () => {
  const { getByText } = render(
    <HistoryItem
      transactionLog={
        {
          assignedAddressId: 'XYZABC123456',
          contact: undefined,
          direction: 'tx_direction_received',
          finalizedBlockIndex: '345678',
          recipientAddressId: '101010101010101',
          valuePmob: '31415926',
        } as TransactionLog
      }
      onClick={() => undefined}
    />
  );

  expect(getByText('RECEIVED')).toBeInTheDocument();
  expect(getByText('+0.000031415926 MOB')).toBeInTheDocument();
});
