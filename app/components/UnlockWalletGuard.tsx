import React from 'react';
import type { FC, ReactNode } from 'react';

import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import routePaths from '../constants/routePaths';
import useMobileCoinD from '../hooks/useMobileCoinD';

interface UnlockWalletGuardProps {
  children?: ReactNode;
}

const UnlockWalletGuard: FC<UnlockWalletGuardProps> = ({ children }) => {
  const { encryptedEntropy, isAuthenticated } = useMobileCoinD();

  if (!encryptedEntropy || !isAuthenticated) {
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
