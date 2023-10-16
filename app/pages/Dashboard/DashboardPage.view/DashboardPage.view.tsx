import React from 'react';
import type { FC } from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { AccountCard } from '../../../components';
import { ReduxStoreState } from '../../../redux/reducers/reducers';
import { CloseWalletModal } from '../CloseWalletModal.view/CloseWalletModal.view';
import type { DashboardPageProps } from './DashboardPage.d';

const useStyles = makeStyles(() => ({
  root: {
    padding: '0',
  },
}));

const DashboardView: FC<DashboardPageProps> = ({
  accounts,
  onClickCode,
  onClose,
  selectedAccount,
}: DashboardPageProps) => {
  const classes = useStyles();
  const { tokenId } = useSelector((state: ReduxStoreState) => state);

  return (
    <Container data-testid="DashboardOverview" className={classes.root} maxWidth="sm">
      <Box alignItems="center" />
      <AccountCard
        account={{
          accountId: selectedAccount.account.accountId,
          b58Code: selectedAccount.account.mainAddress,
          balance: selectedAccount.balanceStatus.balancePerToken[tokenId].unspentPmob,
          fogEnabled: selectedAccount.account.fogEnabled,
          name: selectedAccount.account.name as string,
        }}
        accounts={accounts}
        onClickCode={onClickCode}
      />
      <Box py={2} />
      <CloseWalletModal onClose={onClose} />
    </Container>
  );
};

export default DashboardView;
export { DashboardView };
