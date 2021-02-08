import React from 'react';
import type { FC } from 'react';

import { Box } from '@material-ui/core';

import { AccountCard } from '../../../components';
import useMobileCoinD from '../../../hooks/useMobileCoinD';
import BalanceIndicator from './BalanceIndicator';
import CloseWalletModal from './CloseWalletModal';

interface OverviewProps {
  className?: string;
}

const DashboardOverview: FC<OverviewProps> = () => {
  const { accountName, b58Code, balance, mobUrl, networkHighestBlockIndex, nextBlock } = useMobileCoinD();

  // TODO consolidate the isSynced logic throughout app to one location.
  // consider using a specific context when we split the MobileCoinDContext
  const isSynced =
    nextBlock === null || networkHighestBlockIndex === null
      ? false
      : Number(networkHighestBlockIndex) - Number(nextBlock) < 2;

  return (
    <Box data-testid="DashboardOverview">
      <Box alignItems="center">
        <BalanceIndicator balance={balance?.toString() || ''} isSynced={isSynced} />
      </Box>
      {b58Code !== null && mobUrl !== null && (
        <AccountCard
          account={{
            b58Code,
            balance: balance?.toString() || '',
            mobUrl,
            name: accountName,
          }}
        />
      )}
      <Box py={2} />
      <CloseWalletModal />
    </Box>
  );
};

export default DashboardOverview;
