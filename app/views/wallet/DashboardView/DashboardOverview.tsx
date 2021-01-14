import React from 'react';
import type { FC } from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';

import { AccountCard } from '../../../components';
import useFullService from '../../../hooks/useFullService';
import CloseWalletModal from './CloseWalletModal';

const useStyles = makeStyles(() => ({
  root: {
    padding: '0',
  },
}));

const DashboardOverview: FC = () => {
  const { selectedAccount } = useFullService();
  const classes = useStyles();

  // TODO - figure out if we should calculate isSynced with a buffer.
  // We should pull that into a util
  return (
    <Container data-testid="DashboardOverview" className={classes.root} maxWidth="sm">
      <Box alignItems="center" />
      <AccountCard
        account={{
          b58Code: selectedAccount.account.mainAddress,
          balance: selectedAccount.balanceStatus.unspentPmob,
          name: selectedAccount.account.name,
        }}
      />
      <Box py={2} />
      <CloseWalletModal />
    </Container>
  );
};

export default DashboardOverview;
