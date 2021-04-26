import React from 'react';
import type { FC, ReactNode } from 'react';

import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import routePaths from '../constants/routePaths';
import useFullService from '../hooks/useFullService';
import SplashScreen from './SplashScreen';

interface AuthFlowGuardProps {
  children?: ReactNode;
}

const AuthFlowGuard: FC<AuthFlowGuardProps> = ({ children }) => {
  const { isAuthenticated, isInitialized } = useFullService();

  if (!isInitialized) {
    return <SplashScreen />;
  }

  if (isAuthenticated) {
    return <Redirect to={routePaths.APP_DASHBOARD} />;
  }

  return <>{children}</>;
};

AuthFlowGuard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthFlowGuard;
