import React from 'react';
import type { FC } from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';

import { AccountCard } from '../../../components';
import { CloseWalletModal } from '../CloseWalletModal.view/CloseWalletModal.view';
import type { DashboardPageProps } from './DashboardPage.d';

const useStyles = makeStyles(() => ({
  root: {
    padding: '0',
  },
}));

const DashboardView: FC<DashboardPageProps> = ({
  onClickCode,
  onClose,
  selectedAccount,
}: DashboardPageProps) => {
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
          name: selectedAccount.account.name as string,
        }}
        onClickCode={onClickCode}
      />
      <Box py={2} />
      <CloseWalletModal onClose={onClose} />
    </Container>
  );
};

export default DashboardView;
export { DashboardView };
