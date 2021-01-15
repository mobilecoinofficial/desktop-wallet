import React from 'react';

import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import useMobileCoinD from '../../../../app/hooks/useMobileCoinD';
import LedgerStatus from '../../../../app/views/wallet/ConfigureMobilecoindView';

jest.mock('../../../../app/hooks/useMobileCoinD');

describe('LedgerStatus View', () => {
  test('Leddger Staus view renders along with block types', () => {
    const mockUseMobileCoinD = useMobileCoinD as jest.MockedFunction<
      typeof useMobileCoinD
    >;

    // @ts-ignore mock
    mockUseMobileCoinD.mockImplementation(() => {
      return {
        accountName: 'accountName',
        b58Code: 'string',
        balance: BigInt(2),
        encryptedEntropy: 'string',
        entropy: null,
        giftCodes: null,
        isAuthenticated: true,
        isEntropyKnown: true,
        isInitialised: true,
        localBlockIndex: 4,
        mobUrl: 'string',
        monitorId: null,
        networkHighestBlockIndex: 4,
        nextBlock: 5,
        receiver: null,
      };
    });

    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <LedgerStatus />
      </Router>
    );

    expect(screen.getByText('Ledger Status')).toBeInTheDocument();
    expect(screen.getByText('Network Blocks')).toBeInTheDocument();
    expect(screen.getByText('Local Blocks')).toBeInTheDocument();
    expect(screen.getByText('Monitor Blocks')).toBeInTheDocument();
  });
});
