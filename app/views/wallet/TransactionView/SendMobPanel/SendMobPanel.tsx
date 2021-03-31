import React from 'react';
import type { FC } from 'react';

import { Box, Container, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import useFullService from '../../../../hooks/useFullService';
import isSyncedBuffered from '../../../../utils/isSyncedBuffered';
import BalanceIndicator from '../../DashboardView/BalanceIndicator';
import SendMobForm from './SendMobForm';

const SendMobPanel: FC = () => {
  const { t } = useTranslation('SendMobPanel');
  const { selectedAccount } = useFullService();

  const networkBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.networkBlockIndex);
  const accountBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.accountBlockIndex);
  const isSynced = isSyncedBuffered(networkBlockIndexBigInt, accountBlockIndexBigInt);
  return (
    <Container maxWidth="sm">
      <BalanceIndicator balance={selectedAccount.balanceStatus.unspentPmob} isSynced={isSynced} />
      <Box alignItems="center" display="flex" justifyContent="space-between" mb={3}>
        <Box>
          <Typography variant="body2" color="textSecondary">
            {t('header')}
          </Typography>
        </Box>
      </Box>
      <Box flexGrow={1} mt={3}>
        <SendMobForm />
      </Box>
    </Container>
  );
};

export default SendMobPanel;
