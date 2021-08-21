import React from 'react';

import { render, screen } from '@testing-library/react';

import { TermsOfUse } from './TermsOfUse.view';

describe('TermsOfUse', () => {
  test('renders beginning of terms', () => {
    render(<TermsOfUse />);

    expect(screen.getByTestId('tos-header').textContent).toEqual(
      'TERMS OF USE FOR MOBILECOINS AND MOBILECOIN WALLETS'
    );
  });

  test('renders middle of terms', () => {
    render(<TermsOfUse />);

    expect(screen.getByTestId('nature-of-mob').textContent).toEqual(
      'Nature of MobileCoins and Transactions in MobileCoins'
    );
  });

  test('renders end of terms', () => {
    render(<TermsOfUse />);

    expect(screen.getByTestId('end-of-tos').textContent).toEqual('Language and Contact');
  });
});
