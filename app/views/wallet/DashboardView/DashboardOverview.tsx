import React from 'react';
import type { FC } from 'react';

import { Box } from '@material-ui/core';

import { AccountCard } from '../../../components';
import useFullService from '../../../hooks/useFullService';
import BalanceIndicator from './BalanceIndicator';
import CloseWalletModal from './CloseWalletModal';

interface OverviewProps {
  className?: string;
}

const DashboardOverview: FC<OverviewProps> = () => {
  const {
    selectedAccount,
  } = useFullService();

  return (
    <Box>
      <Box alignItems="center">
        <BalanceIndicator
          balance={selectedAccount.balanceStatus.unspent}
          isSynced={selectedAccount.account.isSynced}
        />
      </Box>
      <AccountCard
        account={{
          b58Code: selectedAccount.account.mainAddress,
          balance: selectedAccount.balanceStatus.unspent,
          mobUrl: selectedAccount.mobUrl,
          name: selectedAccount.account.name,
        }}
      />
      <Box py={2} />
      <CloseWalletModal />
    </Box>
  );
};

export default DashboardOverview;
