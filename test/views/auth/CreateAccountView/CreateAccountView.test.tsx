import React from 'react';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { MobileCoinDContextValue } from '../../../../app/contexts/MobileCoinDContext';
import { CreateAccountView } from '../../../../app/views/auth';
import renderSnapshot from '../../../renderSnapshot';

jest.mock('../../../../app/hooks/useMobileCoinD');

function setupComponent(contextOverrides?: MobileCoinDContextValue) {
  // Default Context
  const defaultContext = {
    encryptedEntropy: 'existing encrypted entropy',
    isAuthenticated: false,
  };

  const { asFragment } = renderSnapshot(<CreateAccountView isTest />, {
    ...defaultContext,
    ...contextOverrides,
  });

  // Render Elements
  const importButton = screen.getByRole('button', {
    name: 'Import account instead',
  });
  const overwriteWarningQuery = screen.queryByTestId('overwrite-warning');

  return {
    asFragment,
    importButton,
    overwriteWarningQuery,
  };
}

describe('CreateAccountView', () => {
  describe('component', () => {
    test('it navigates to ImportAccountView with button click', () => {
      const { importButton } = setupComponent();

      expect(importButton).toBeInTheDocument();

      userEvent.click(importButton);

      expect(importButton).not.toBeInTheDocument();
      expect(screen.getByTestId('ImportAccountView')).toBeInTheDocument();
    });

    describe('unlock warning', () => {
      test('when there is an existing user, it renders the warning', () => {
        const { overwriteWarningQuery } = setupComponent();

        expect(overwriteWarningQuery).toBeInTheDocument();
      });

      test('warning allow you to navigate to unlock wallet', () => {
        setupComponent();
        const unlockButton = screen.getByRole('button', {
          name: 'Unlock this wallet',
        });

        userEvent.click(unlockButton);

        expect(unlockButton).not.toBeInTheDocument();
        expect(screen.getByTestId('UnlockWalletView')).toBeInTheDocument();
      });

      test('it does not render warning without existing user', () => {
        // @ts-ignore mock
        const { overwriteWarningQuery } = setupComponent({ encryptedEntropy: undefined });

        expect(overwriteWarningQuery).not.toBeInTheDocument();
      });
    });

    describe('render', () => {
      test('it renders correctly', () => {
        const { asFragment } = setupComponent();
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
