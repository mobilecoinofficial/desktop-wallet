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

  // TODO - figure out if we should calculate isSynced with a buffer.
  // We should pull that into a util
  return (
    <Box>
      <Box alignItems="center">
        <BalanceIndicator
          balance={selectedAccount.balanceStatus.unspentPmob}
          isSynced={selectedAccount.balanceStatus.isSynced}
        />
      </Box>
      <AccountCard
        account={{
          b58Code: selectedAccount.account.mainAddress,
          balance: selectedAccount.balanceStatus.unspentPmob,
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
