import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import CloseWalletModal from '../../../../app/views/wallet/DashboardView/CloseWalletModal';

describe('CloseWalletModal', () => {
  test('modal and buttons are not visible until close wallet button is clicked', () => {
    render(<CloseWalletModal />);

    expect(screen.queryByTestId('close-wallet-modal')).toBeNull();
    expect(screen.queryByTestId('close-wallet-deny')).toBeNull();
    expect(screen.queryByTestId('close-wallet-confirm')).toBeNull();

    fireEvent.click(screen.getByTestId('close-wallet-button'));

    expect(screen.queryByTestId('close-wallet-modal')).not.toBeNull();
    expect(screen.queryByTestId('close-wallet-deny')).not.toBeNull();
    expect(screen.queryByTestId('close-wallet-confirm')).not.toBeNull();
  });
});
