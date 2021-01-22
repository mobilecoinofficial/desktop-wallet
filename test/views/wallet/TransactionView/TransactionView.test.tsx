import React from 'react';

import { cleanup, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useMobileCoinD from '../../../../app/hooks/useMobileCoinD';
import useMobilecoindConfigs from '../../../../app/hooks/useMobilecoindConfigs';
import { TransactionView } from '../../../../app/views/wallet';
import renderSnapshot from '../../../renderSnapshot';
// import ReceiveMobPanel from '../../../../app/views/wallet/TransactionView/ReceiveMobPanel';

jest.mock('../../../../app/hooks/useMobileCoinD');
jest.mock('../../../../app/hooks/useMobilecoindConfigs');

function setupComponent() {
  const mockUseMobileCoinD = useMobileCoinD as jest.MockedFunction<
    typeof useMobileCoinD
  >;

  // @ts-ignore mock
  mockUseMobileCoinD.mockImplementation(() => {
    return {
      accountName: 'account name',
      b58Code: 'b58 code',
      mobUrl: 'string',
    };
  });

  const { asFragment } = renderSnapshot(
    <TransactionView />,
  );

  const sendQuery = screen.queryByText(/Please enter the amount of MOB you want to send and the public address of the recipient./i);
  const receiveQuery = screen.queryByText(/To receive MOB, you must share your public address code to the sender./i);

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
        cleanup();
      });

      test('ReceiveMobPanel renders correctly', async () => {
        const { sendQuery, receiveQuery } = setupComponent();
        userEvent.click(screen.getByText('Receive MOB'));
        await waitFor(() => { return expect(receiveQuery).toBeInTheDocument(); });
        expect(sendQuery).not.toBeInTheDocument();
        // expect(screen.queryByText(/To receive MOB, you must share your public address code to the sender./i)).toBeInTheDocument();
        //     expect(screen.queryByText(/Please enter the amount of MOB you want to send and the public address of the recipient./i)).not.toBeInTheDocument();
      });
    });
  });
});
