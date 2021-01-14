import React from 'react';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useMobileCoinD from '../../../app/hooks/useMobileCoinD';
import NotFoundView from '../../../app/views/errors/NotFoundView';
import renderSnapshot from '../../renderSnapshot';

jest.mock('../../../app/hooks/useMobileCoinD');

function setupComponent() {
  const mockIsAuthenticated = false;
  const mockEncryptedEntropy = 'a entropy string';
  const mockUseMobileCoinD = useMobileCoinD as jest.MockedFunction<
    typeof useMobileCoinD
  >;

  // @ts-ignore mock
  mockUseMobileCoinD.mockImplementation(() => {
    return {
      encryptedEntropy: mockEncryptedEntropy,
      isAuthenticated: mockIsAuthenticated,
    };
  });

  const { asFragment } = renderSnapshot(<NotFoundView />);

  const homeButton = screen.getByRole('button', { name: 'Back to home' });

  return {
    asFragment,
    homeButton,
    mockEncryptedEntropy,
    mockIsAuthenticated,
  };
}

describe('Unlock Wallet Guard', () => {
  describe('component', () => {
    test('unauthenticated with entropy string', async () => {
      setupComponent();

      expect(
        screen.getByText('404: The page you are looking for isn’t here'),
      ).toBeInTheDocument();
    });

    test('authenticated and entropy string', async () => {
      const { homeButton } = setupComponent();

      const firstScreen = screen.getByText(
        '404: The page you are looking for isn’t here',
      );
      expect(firstScreen).toBeInTheDocument();

      userEvent.click(homeButton);

      expect(firstScreen).not.toBeInTheDocument();
      expect(screen.getByTestId('DashboardView')).toBeInTheDocument();
    });
  });

  describe('render', () => {
    test('it renders correctly', async () => {
      const { asFragment } = setupComponent();

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
