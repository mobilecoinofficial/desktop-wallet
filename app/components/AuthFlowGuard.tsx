import React from 'react';
import type { FC, ReactNode } from 'react';

import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import routePaths from '../constants/routePaths';
import useMobileCoinD from '../hooks/useMobileCoinD';

interface AuthFlowGuardProps {
  children?: ReactNode;
}

const AuthFlowGuard: FC<AuthFlowGuardProps> = ({ children }) => {
  const { isAuthenticated } = useMobileCoinD();

  if (isAuthenticated) {
    return <Redirect to={routePaths.APP_DASHBOARD} />;
  }

  return <>{children}</>;
};

AuthFlowGuard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthFlowGuard;
