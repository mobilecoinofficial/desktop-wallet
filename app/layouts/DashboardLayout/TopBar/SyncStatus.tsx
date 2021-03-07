import React from 'react';
import type { FC } from 'react';

import { Box, makeStyles, Tooltip, CircularProgress } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { CircleMOBIcon } from '../../../components/icons';
import { GREEN, GOLD_LIGHT, RED } from '../../../constants/colors';
import useFullService from '../../../hooks/useFullService';
import getPercentSyncedNew from '../../../utils/getPercentSyncedNew';

const ERROR = 'ERROR';
const SYNCED = 'SYNCED';
const SYNCING = 'SYNCING';

const useStyles = makeStyles(() => {
  return {
    root: {},
    statusContainer: {
      margin: 'auto',
      position: 'relative',
    },
    statusIconContainer: {
      backgroundColor: '#202124',
      borderRadius: '35px',
      height: '70px',
      left: '-35px',
      position: 'absolute',
      top: '-35px',
      width: '70px',
    },
    statusLogo: {
      left: '5px',
      position: 'absolute',
      top: '5px',
    },
    statusProgress: {
      backgroundColor: 'rgba(53, 54, 58, 0.6)',
      borderRadius: '60px',
      left: '5px',
      position: 'absolute',
      top: '5px',
    },
    tooltip: { margin: 'auto', position: 'relative' },
  };
});

const SyncStatus: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('SyncStatus');
  const { selectedAccount } = useFullService();

  // Note: right now, we're only checking for the wallet and the selectedAccount.
  // We'll need a redesign where we are syncing for each account.
  // Maybe the top icon is for the entire wallet, but each account syncs with its own icon on the
  // card.
  let percentSynced;
  let isSynced;
  let statusCode;
  let title;
  let backgroundColor;
  const networkBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.networkBlockIndex);
  const localBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.localBlockIndex);
  const accountBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.accountBlockIndex);
  const acceptableDiffBigInt = BigInt(2);

  if (
    networkBlockIndexBigInt < accountBlockIndexBigInt
    || networkBlockIndexBigInt < localBlockIndexBigInt
    || localBlockIndexBigInt < accountBlockIndexBigInt
  ) {
    isSynced = false;
    percentSynced = 0;
    statusCode = ERROR;
  } else {
    isSynced = networkBlockIndexBigInt - accountBlockIndexBigInt < acceptableDiffBigInt;
    percentSynced = getPercentSyncedNew(
      networkBlockIndexBigInt,
      accountBlockIndexBigInt,
    );
    statusCode = isSynced ? SYNCED : SYNCING;
  }

  switch (statusCode) {
    case SYNCED: {
      backgroundColor = GREEN;
      title = t('synced');
      break;
    }
    case SYNCING: {
      backgroundColor = GOLD_LIGHT;
      title = `${percentSynced}%: ${t('syncing')}`;
      break;
    }
    default: {
      backgroundColor = RED;
      title = t('error');
    }
  }
  return (
    <Tooltip title={title} placement="right" arrow className={classes.tooltip}>
      <Box className={classes.statusContainer}>
        <Box className={classes.statusIconContainer}>
          <CircleMOBIcon
            backgroundColor={backgroundColor}
            color="#000"
            height={60}
            width={60}
            className={classes.statusLogo}
          />
          {statusCode === SYNCING && (
            <CircularProgress
              variant="determinate"
              size={60}
              thickness={3}
              className={classes.statusProgress}
              value={percentSynced}
            />
          )}
        </Box>
      </Box>
    </Tooltip>
  );
};

export default SyncStatus;
