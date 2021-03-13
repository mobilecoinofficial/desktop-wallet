import React from 'react';

import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useMobileCoinD from '../../../../app/hooks/useMobileCoinD';
import { TransactionView } from '../../../../app/views/wallet';
import renderSnapshot from '../../../renderSnapshot';

jest.mock('../../../../app/hooks/useMobileCoinD');

function setupComponent() {
  const mockUseMobileCoinD = useMobileCoinD as jest.MockedFunction<typeof useMobileCoinD>;

  // @ts-ignore mock
  mockUseMobileCoinD.mockImplementation(() => ({
    accountName: 'account name',
    b58Code: 'b58 code',
    mobUrl: 'string',
  }));

  const { asFragment } = renderSnapshot(<TransactionView />);

  const sendQuery = screen.queryByText(
    'Please enter the amount of MOB you want to send and the public address of the recipient.'
  );
  const receiveQuery = screen.queryByText(
    'To receive MOB, you must share your public address code to the sender.'
  );

  return {
    asFragment,
    receiveQuery,
    sendQuery,
  };
}

describe('TransactionView', () => {
  describe('component', () => {
    describe('render', () => {
      test('TransactionView renders correctly', () => {
        const { asFragment } = setupComponent();
        expect(asFragment()).toMatchSnapshot();
      });

      test('SendMobPanel renders correctly', () => {
        const { sendQuery, receiveQuery } = setupComponent();
        userEvent.click(screen.getByText('Send MOB'));
        expect(sendQuery).toBeInTheDocument();
        expect(receiveQuery).not.toBeInTheDocument();
      });

      test('ReceiveMobPanel renders correctly', async () => {
        const { sendQuery } = setupComponent();
        userEvent.click(screen.getByText('Receive MOB'));
        await waitFor(() =>
          expect(
            screen.queryByText(
              /To receive MOB, you must share your public address code to the sender./i
            )
          ).toBeInTheDocument()
        );
        expect(sendQuery).not.toBeInTheDocument();
      });
    });
  });
});
