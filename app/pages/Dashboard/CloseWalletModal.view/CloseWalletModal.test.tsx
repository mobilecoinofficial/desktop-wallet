import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import '../../../testUtils/i18nForTests';
import { CloseWalletModal } from './CloseWalletModal.view';

test("Modal doesn't show if button not clicked", () => {
  const handleClick = jest.fn();
  const { container } = render(<CloseWalletModal onClose={handleClick} />);

  expect(container.innerHTML.includes('No, Keep Wallet Open')).toBeFalsy();
  expect(container.innerHTML.includes('Yes, Close Wallet')).toBeFalsy();
});

test('Open modal and click to accept closing', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<CloseWalletModal onClose={handleClick} />);

  fireEvent.click(screen.getByTestId('close-wallet-button'));
  expect(getByText('No, Keep Wallet Open')).toBeInTheDocument();
  expect(getByText('Yes, Close Wallet')).toBeInTheDocument();

  fireEvent.click(screen.getByTestId('close-wallet-confirm'));
  expect(handleClick).toHaveBeenCalled();
});

test('Open modal and click to deny closing', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<CloseWalletModal onClose={handleClick} />);

  fireEvent.click(screen.getByTestId('close-wallet-button'));
  expect(getByText('No, Keep Wallet Open')).toBeInTheDocument();
  expect(getByText('Yes, Close Wallet')).toBeInTheDocument();

  fireEvent.click(screen.getByTestId('close-wallet-deny'));
  expect(handleClick).not.toHaveBeenCalled();
});
