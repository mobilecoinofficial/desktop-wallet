import React from 'react';
import type { FC } from 'react';

import {
  Box, makeStyles, Tooltip, CircularProgress,
} from '@material-ui/core';

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
  const networkHeightBigInt = BigInt(selectedAccount.account.networkHeight);
  const localHeightBigInt = BigInt(selectedAccount.account.localHeight);
  const accountHeightBigInt = BigInt(selectedAccount.account.accountHeight);
  const acceptableDiffBigInt = BigInt(2);

  if (
    networkHeightBigInt < accountHeightBigInt
    || networkHeightBigInt < localHeightBigInt
    || localHeightBigInt < accountHeightBigInt
  ) {
    isSynced = false;
    percentSynced = 0;
    statusCode = ERROR;
  } else {
    isSynced = networkHeightBigInt - accountHeightBigInt < acceptableDiffBigInt;
    percentSynced = getPercentSyncedNew(
      networkHeightBigInt,
      accountHeightBigInt,
    );
    statusCode = isSynced ? SYNCED : SYNCING;
  }

  switch (statusCode) {
    case SYNCED: {
      backgroundColor = GREEN;
      title = '100%: synced with the ledger';
      break;
    }
    case SYNCING: {
      backgroundColor = GOLD_LIGHT;
      title = `${percentSynced}%: Syncing with the ledger`;
      break;
    }
    default: {
      backgroundColor = RED;
      title = 'Please see Admin Panel in Settings.';
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
              variant="static"
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
