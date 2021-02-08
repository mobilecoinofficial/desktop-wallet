import React from 'react';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { MobileCoinDContextValue } from '../../../../app/contexts/MobileCoinDContext';
import { ImportAccountView } from '../../../../app/views/auth';
import renderSnapshot from '../../../renderSnapshot';

jest.mock('../../../../app/hooks/useMobileCoinD');

function setupComponent(contextOverrides?: MobileCoinDContextValue) {
  // Default Context
  const defaultContext = {
    encryptedEntropy: 'existing encrypted entropy',
    isAuthenticated: false,
  };

  const { asFragment } = renderSnapshot(
    <ImportAccountView isTest />,
    {
      ...defaultContext,
      ...contextOverrides,
    },
  );

  // Render Elements
  const createButton = screen.getByRole('button', {
    name: 'Create account instead',
  });
  const overwriteWarningQuery = screen.queryByTestId('overwrite-warning');

  return {
    asFragment,
    createButton,
    overwriteWarningQuery,
  };
}

describe('ImportAccountView', () => {
  describe('component', () => {
    test('it navigates to ImportAccountView with button click', () => {
      const { createButton } = setupComponent();

      expect(createButton).toBeInTheDocument();

      userEvent.click(createButton);

      expect(createButton).not.toBeInTheDocument();
      expect(
        screen.getByTestId('CreateAccountView'),
      ).toBeInTheDocument();
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
        expect(
          screen.getByTestId('UnlockWalletView'),
        ).toBeInTheDocument();
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
