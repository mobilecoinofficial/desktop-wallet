import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import type { TransactionLog } from '../../../types/TransactionLog.d';
import '../../../testUtils/i18nForTests';
import { HistoryList } from './HistoryList.view';

test('Displays each TXO', () => {
  const handleClick = jest.fn();

  const { getByText } = render(
    <HistoryList
      transactionLogsList={[
        {
          assignedAddressId: 'XYZABC123456',
          contact: undefined,
          direction: 'tx_direction_sent',
          finalizedBlockIndex: '123456',
          recipientAddressId: null,
          transactionLogId: '123456',
          valuePmob: '220960000000',
        } as TransactionLog,
        {
          assignedAddressId: 'LMNTARYWATSON',
          contact: undefined,
          direction: 'tx_direction_received',
          finalizedBlockIndex: '345678',
          recipientAddressId: '101010101010101',
          transactionLogId: '789012',
          valuePmob: '31415926',
        } as TransactionLog,
      ]}
      onTransactionClick={handleClick}
    />
  );

  expect(getByText('SENT')).toBeInTheDocument();
  expect(getByText('-0.220960000000 MOB')).toBeInTheDocument();

  expect(getByText('RECEIVED')).toBeInTheDocument();
  expect(getByText('+0.000031415926 MOB')).toBeInTheDocument();
});
