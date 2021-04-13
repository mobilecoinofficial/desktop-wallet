/*
import React from 'react';

import { screen } from '@testing-library/react';

import { AuthFlowGuard } from '../../app/components';
import { FullServiceContextValue } from '../../app/contexts/FullServiceContext';
import renderSnapshot from '../renderSnapshot';

jest.mock('../../app/hooks/useFullService');

function setupComponent(contextOverides?: FullServiceContextValue) {
  const defaultContext = {
    encryptedEntropy: null,
    isAuthenticated: false,
  };

  renderSnapshot(<AuthFlowGuard>children</AuthFlowGuard>, {
    ...defaultContext,
    ...contextOverides,
  });

  const children = screen.queryByText('children');

  return {
    children,
  };
}

describe('AuthFlowGuard', () => {
  test('renders SplashScreen if app is not initalized', () => {
    // @ts-ignore mock
    const { children } = setupComponent({
      isInitialised: false,
    });

    expect(screen.queryByTestId('SplashScreen')).toBeInTheDocument();
    expect(children).not.toBeInTheDocument();
  });

  test('redirects to DashboardOverview with encryptedEntropy and isAthenticated', () => {
    // @ts-ignore mock
    const { children } = setupComponent({
      encryptedEntropy: 'entropy',
      isAuthenticated: true,
    });

    expect(screen.queryByTestId('DashboardOverview')).toBeInTheDocument();
    expect(children).not.toBeInTheDocument();
  });

  test('renders children with !encryptedEntropy', () => {
    // @ts-ignore mock
    const { children } = setupComponent({ isAuthenticated: true });

    expect(children).toBeInTheDocument();
  });

  test('renders children with !isAthenticated', () => {
    // @ts-ignore mock
    const { children } = setupComponent({ encryptedEntropy: 'entropy' });

    expect(children).toBeInTheDocument();
  });
});
*/
