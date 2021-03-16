import React from 'react';

import { render, screen } from '@testing-library/react';

import useFullServiceConfigs from '../../../../app/hooks/useFullServiceConfigs';
import FullServiceDirectory from '../../../../app/views/wallet/ConfigureFullServiceView/FullServiceDirectory';

jest.mock('../../../../app/hooks/useFullServiceConfigs');

describe('FullServiceDirectory', () => {
  const mockUseFullServiceConfigs = useFullServiceConfigs as jest.MockedFunction<
    typeof useFullServiceConfigs
  >;

  // @ts-ignore mock
  mockUseFullServiceConfigs.mockImplementation(() => {
    return {
      ledgerDbPath: 'ledger/db/path',
      fullServiceDbPath: 'mobilecoin/db/path',
    };
  });

  test('FullServiceDirectory renders view and displays correct ledgerDbPath', () => {
    render(<FullServiceDirectory />);
    expect(screen.getByText('ledger/db/path')).toBeInTheDocument();
  });

  test('FullServiceDirectory renders view and displays correct fullServiceDbPath', () => {
    render(<FullServiceDirectory />);
    expect(screen.getByText('mobilecoin/db/path')).toBeInTheDocument();
  });
});
