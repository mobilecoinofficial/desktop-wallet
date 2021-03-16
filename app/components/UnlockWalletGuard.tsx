import React from 'react';
import type { FC, ReactNode } from 'react';

import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import routePaths from '../constants/routePaths';
import SplashScreen from './SplashScreen';
import useFullService from '../hooks/useFullService';

interface UnlockWalletGuardProps {
  children?: ReactNode;
}

const UnlockWalletGuard: FC<UnlockWalletGuardProps> = ({ children }) => {
  const { hashedPassword, isAuthenticated, isInitialized } = useFullService();

  if (!isInitialized) {
    return <SplashScreen />;
  } else if (!hashedPassword) {
    return <Redirect to={routePaths.CREATE} />;
  } else if (isAuthenticated) {
    return <Redirect to={routePaths.APP_DASHBOARD} />;
  }

  return <>{children}</>;
};

UnlockWalletGuard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UnlockWalletGuard;
