import React from 'react';
import type { FC } from 'react';

import { Box, Container, Typography, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import useFullService from '../../../../hooks/useFullService';
import isSyncedBuffered from '../../../../utils/isSyncedBuffered';
import BalanceIndicator from '../../DashboardView/BalanceIndicator';
import ConsumeGiftForm from './ConsumeGiftForm';

const useStyles = makeStyles(() => ({
  mobContainer: {
    alignSelf: 'center',
    display: 'flex',
    paddingRight: 4,
  },
  root: {},
  valueContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const ConsumeGiftPanel: FC = () => {
  const classes = useStyles();
  const { selectedAccount } = useFullService();

  const { t } = useTranslation('ConsumeGiftPanel');
  // TODO consolidate the isSynced logic throughout app to one location.
  const networkBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.networkBlockIndex);
  const accountBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.accountBlockIndex);

  const isSynced = isSyncedBuffered(networkBlockIndexBigInt, accountBlockIndexBigInt);

  return (
    <Container className={classes.root} maxWidth="sm">
      <Box alignItems="center" display="flex" justifyContent="space-between" mb={3}>
        <Box width="100%">
          <BalanceIndicator
            balance={selectedAccount.balanceStatus.unspentPmob}
            isSynced={isSynced}
          />
          <Box>
            <Typography variant="body2" color="textSecondary">
              {t('description')}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box flexGrow={1} mt={3}>
        <ConsumeGiftForm />
      </Box>
    </Container>
  );
};

export default ConsumeGiftPanel;
