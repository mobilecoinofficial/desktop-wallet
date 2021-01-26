import React from 'react';

import { screen } from '@testing-library/react';

import SendMobPanel from '../../../../../app/views/wallet/TransactionView';
import renderSnapshot from '../../../../renderSnapshot';

function setupComponent() {
  renderSnapshot(
    <SendMobPanel />,
  );

  const sendQuery = screen.queryByText(/Please enter the amount of MOB you want to send and the public address of the recipient./i);
  const acctName = screen.queryByText('Account Name');
  const acctBalance = screen.queryByText('Account Balance');
  const recipientInput = screen.queryByText('Recipient Public Address');

  return {
    acctBalance,
    acctName,
    recipientInput,
    sendQuery,
  };
}

describe('SendMobPanel', () => {
  describe('component', () => {
    describe('render', () => {
      test('SendMobPanel renders correctly with query text', () => {
        const { sendQuery } = setupComponent();
        expect(sendQuery).toBeInTheDocument();
      });

      test('Account Name renders', () => {
        const { acctName } = setupComponent();
        expect(acctName).toBeInTheDocument();
      });

      test('Account Balance renders', () => {
        const { acctBalance } = setupComponent();
        expect(acctBalance).toBeInTheDocument();
      });

      test('Recipient input exists', () => {
        const { recipientInput } = setupComponent();
        expect(recipientInput).toBeInTheDocument();
      });
    });
  });
});
