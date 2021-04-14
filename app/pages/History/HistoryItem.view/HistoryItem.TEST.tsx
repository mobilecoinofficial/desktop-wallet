// __tests__/fetch.test.js
import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import '../../../testUtils/i18nForTests';
import { HistoryItem } from './HistoryItem.view';

test('Displays sent TXO', () => {
  const { getByText } = render(
    <HistoryItem
      assignedAddressId="XYZABC123456"
      contact={null}
      direction="tx_direction_sent"
      finalizedBlockIndex={123456}
      recipientAddressId={null}
      valuePmob="220960000000"
    />
  );

  expect(getByText('SENT')).toBeInTheDocument();
  expect(getByText('220960')).toBeInTheDocument();
});

test('Displays received TXO', () => {
  const { getByText } = render(
    <HistoryItem
      contact=""
      direction="tx_direction_received"
      finalizedBlockIndex={123456}
      recipientAddressId="101010101010101"
      valuePmob="31415926"
    />
  );

  expect(getByText('RECEIVED')).toBeInTheDocument();
  expect(getByText('31415926')).toBeInTheDocument();
});
