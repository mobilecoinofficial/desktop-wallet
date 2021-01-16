import React from 'react';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { UnlockWalletView } from '../../../../app/views/auth';
import renderSnapshot from '../../../renderSnapshot';

jest.mock('../../../../app/hooks/useMobileCoinD');

function setupComponent() {
  // Default Context
  const defaultContext = {
    isAuthenticated: false,
  };

  // @ts-ignore mock
  const { asFragment } = renderSnapshot(<UnlockWalletView />, defaultContext);

  // Render Elements
  const importButton = screen.getByRole('button', {
    name: 'Import account from Entropy instead',
  });

  return {
    asFragment,
    importButton,
  };
}

describe('UnlockWalletView', () => {
  describe('component', () => {
    test('it navigates to UnlockWalletView with button click', () => {
      const { importButton } = setupComponent();

      expect(importButton).toBeInTheDocument();

      userEvent.click(importButton);

      expect(importButton).not.toBeInTheDocument();
      expect(
        screen.getByTestId('ImportAccountView'),
      ).toBeInTheDocument();
    });

    describe('render', () => {
      test('it renders correctly', () => {
        const { asFragment } = setupComponent();
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
