import React from 'react';

import { render, screen } from '@testing-library/react';

import useMobilecoindConfigs from '../../../../app/hooks/useMobilecoindConfigs';
import MobilecoindDirectory from '../../../../app/views/wallet/ConfigureMobilecoindView/MobilecoindDirectory';

jest.mock('../../../../app/hooks/useMobilecoindConfigs');

describe('MobilecoindDirectory', () => {
  const mockUseMobilecoindConfigs = useMobilecoindConfigs as jest.MockedFunction<
    typeof useMobilecoindConfigs
  >;

  // @ts-ignore mock
  mockUseMobilecoindConfigs.mockImplementation(() => ({
    ledgerDbPath: 'ledger/db/path',
    mobilecoindDbPath: 'mobilecoin/db/path',
  }));

  test('MobilecoindDirectory renders view and displays correct ledgerDbPath', () => {
    render(<MobilecoindDirectory />);
    expect(screen.getByText('ledger/db/path')).toBeInTheDocument();
  });

  test('MobilecoindDirectory renders view and displays correct mobilecoindDbPath', () => {
    render(<MobilecoindDirectory />);
    expect(screen.getByText('mobilecoin/db/path')).toBeInTheDocument();
  });
});
