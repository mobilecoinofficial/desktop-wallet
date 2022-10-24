import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../../../testUtils/i18nForTests';

import { ShowEntropyModal } from './ShowEntropyModal.view';

const confirmEntropyKnown = jest.fn();
const mnemonic = 'test test test test';
const showEntropyMsg = screen.queryByText(
  'We generated a random Entropy to create your new account. Please store this code in a secure, private manner. You will need your Entropy to import this account into other wallets.'
);

describe('ShowEntropyModal', () => {
  test('does not render modal when isShown set to false', () => {
    render(<ShowEntropyModal confirmEntropyKnown={confirmEntropyKnown} isShown={false} />);

    expect(showEntropyMsg).toBeNull();
  });

  test('mnemonic is hidden and shown based on toggle', () => {
    render(<ShowEntropyModal confirmEntropyKnown={confirmEntropyKnown} isShown />);

    fireEvent.click(screen.getByText('Show Secret Entropy'));
    expect(screen.getByText(mnemonic)).toBeInTheDocument();

    fireEvent.click(screen.getByText('I have secured my Entropy'));
    fireEvent.click(screen.getByText('Yes, I have secured my Entropy'));
    expect(confirmEntropyKnown).toHaveBeenCalled();
  });
});
