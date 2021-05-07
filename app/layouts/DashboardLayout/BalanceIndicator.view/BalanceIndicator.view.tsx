import React from 'react';
import type { FC } from 'react';

import { Box, makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { MOBNumberFormat } from '../../../components';
import { MOBIcon } from '../../../components/icons';
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
  isSynced,
}: BalanceIndicatorProps) => {
  const classes = useStyles();
  const { t } = useTranslation('BalanceIndicator');

  return (
    <Box className={classes.item}>
      <Typography variant="h3" color="textSecondary" gutterBottom>
        {t('title')}
      </Typography>
      <Box className={classes.valueContainer}>
        <MOBIcon className={classes.icon} />
        <Typography data-testid="balance-figure" variant="h3" color="textPrimary">
          <MOBNumberFormat valueUnit="pMOB" value={balance} />
        </Typography>
      </Box>
      {!isSynced && (
        <Typography data-testid="balance-sync-message" variant="h6" color="primary">
          {t('syncMessage')}
        </Typography>
      )}
    </Box>
  );
};

export default BalanceIndicator;
export { BalanceIndicator };
