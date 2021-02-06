import React from 'react';

import { screen } from '@testing-library/react';

import SendMobPanel from '../../../../../app/views/wallet/TransactionView/SendMobPanel';
import renderSnapshot from '../../../../renderSnapshot';

function setupComponent() {
  renderSnapshot(
    <SendMobPanel />,
  );

  const sendQuery = screen.queryByText('Please enter the amount of MOB you want to send and the public address of the recipient.');

  return {
    sendQuery,
  };
}

describe('SendMobPanel', () => {
  describe('component', () => {
    describe('render', () => {
      test('SendMobPanel renders correctly with appropriate header', () => {
        const { sendQuery } = setupComponent();
        expect(sendQuery).toBeInTheDocument();
      });
    });
  });
});
