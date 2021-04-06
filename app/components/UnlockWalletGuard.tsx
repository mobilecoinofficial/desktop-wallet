import React from 'react';
import type { FC, ReactNode } from 'react';

import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import routePaths from '../constants/routePaths';
import useFullService from '../hooks/useFullService';
import SplashScreen from './SplashScreen';

interface UnlockWalletGuardProps {
  children?: ReactNode;
}

const UnlockWalletGuard: FC<UnlockWalletGuardProps> = ({ children }) => {
  const { encryptedPassphrase, isAuthenticated, isInitialized } = useFullService();

  if (!isInitialized) {
    return <SplashScreen />;
  }
  if (!encryptedPassphrase) {
    return <Redirect to={routePaths.CREATE} />;
  }
  if (isAuthenticated) {
    return <Redirect to={routePaths.APP_DASHBOARD} />;
  }

  return <>{children}</>;
};

UnlockWalletGuard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UnlockWalletGuard;
