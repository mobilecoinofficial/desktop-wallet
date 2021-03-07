import React from 'react';
import type { FC, ReactNode } from 'react';

import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import routePaths from '../../constants/routePaths';
import useMobileCoinD from '../../hooks/useMobileCoinD';

interface WalletGuardProps {
  children?: ReactNode;
}

const WalletGuard: FC<WalletGuardProps> = ({ children }) => {
  const { isAuthenticated } = useMobileCoinD();

  if (!isAuthenticated) {
    return <Redirect to={routePaths.ROOT} />;
  }

  return <>{children}</>;
};

WalletGuard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WalletGuard;
