import React from 'react';
import type { FC } from 'react';

import { Box, Button, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { MOBNumberFormat } from '../../../components';
import { MOBIcon } from '../../../components/icons';
import { GOLD_LIGHT } from '../../../constants/colors';
import { Theme } from '../../../theme';
import { BalanceIndicatorProps } from './BalanceIndicator';

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    height: 25,
    paddingRight: 5,
    width: 25,
  },
  item: {
    padding: theme.spacing(3, 0, 0, 0),
    textAlign: 'center',
  },
  valueContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const BalanceIndicator: FC<BalanceIndicatorProps> = ({
  balance,
  importLedger,
  isSynced,
  offlineModeEnabled,
}: BalanceIndicatorProps) => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-height:768px)');

  const { t } = useTranslation('BalanceIndicator');

  return (
    <Box className={classes.item} style={matches ? {} : { padding: '0' }}>
      <Typography variant="h3" color="textSecondary" gutterBottom>
        {t('title')}
      </Typography>
      <Box className={classes.valueContainer}>
        <MOBIcon className={classes.icon} />
        <Typography data-testid="balance-figure" variant="h3" color="textPrimary">
          <MOBNumberFormat valueUnit="pMOB" value={balance} />
        </Typography>
      </Box>
      {!isSynced && !offlineModeEnabled && (
        <Typography data-testid="balance-sync-message" variant="h6">
          <span style={{ color: GOLD_LIGHT }}>{t('syncMessage')}</span>
        </Typography>
      )}

      {offlineModeEnabled && (
        <Typography data-testid="balance-sync-message" variant="h6" color="primary">
          {t('offlineMode')}
        </Typography>
      )}

      {offlineModeEnabled && (
        <Button onClick={importLedger}>
          <Typography variant="h6">Import Ledger</Typography>
        </Button>
      )}
    </Box>
  );
};

export default BalanceIndicator;
export { BalanceIndicator };
