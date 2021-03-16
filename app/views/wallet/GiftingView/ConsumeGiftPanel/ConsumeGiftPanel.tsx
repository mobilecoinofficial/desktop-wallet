import React from 'react';
import type { FC } from 'react';

import { Box, Container, Typography, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { MOBNumberFormat } from '../../../../components';
import { MOBIcon } from '../../../../components/icons';
import useFullService from '../../../../hooks/useFullService';
import isSyncedBuffered from '../../../../utils/isSyncedBuffered';
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
          <Box py={3.8} display="flex" alignItems="center" flexDirection="column">
            <Typography component="h2" gutterBottom variant="overline" color="textSecondary">
              {t('balance')}
            </Typography>
            <Box className={classes.valueContainer}>
              <Box className={classes.mobContainer}>
                <MOBIcon height={20} width={20} />
              </Box>
              <Typography variant="h3" color="textPrimary">
                <MOBNumberFormat
                  valueUnit="pMOB"
                  value={selectedAccount.balanceStatus.unspentPmob}
                />
              </Typography>
            </Box>
            {!isSynced && (
              <Typography variant="h6" color="primary">
                {t('syncMessage')}
              </Typography>
            )}
          </Box>
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
