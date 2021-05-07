import React from 'react';
import type { FC } from 'react';

import { Box, makeStyles, Tooltip, CircularProgress } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { CircleMOBIcon } from '../../../components/icons';
import { BLUE_DARK, GOLD_LIGHT, RED } from '../../../constants/colors';
import { Theme } from '../../../theme';
import getPercentSynced from '../../../utils/getPercentSynced';
import { SyncStatusProps } from './SyncStatus';

const ERROR = 'ERROR';
const SYNCED = 'SYNCED';
const SYNCING = 'SYNCING';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  statusContainer: {
    margin: 'auto',
    position: 'relative',
  },
  statusIconContainer: {
    backgroundColor: theme.palette.background.dark,
    borderRadius: '35px',
    height: '70px',
    left: '-35px',
    top: '-35px',
    width: '70px',
  },
  statusLogo: {
    fill: theme.palette.background.dark,
    left: '5px',
    position: 'absolute',
    top: '5px',
  },
  statusProgress: {
    backgroundColor: 'rgba(53, 54, 58, 0.6)',
    borderRadius: '60px',
    color: GOLD_LIGHT,
    left: '5px',
    position: 'absolute',
    top: '5px',
  },
  tooltip: { margin: 'auto', position: 'relative' },
}));

const SyncStatus: FC<SyncStatusProps> = ({ selectedAccount, sendSyncStatus }: SyncStatusProps) => {
  const classes = useStyles();
  const { t } = useTranslation('SyncStatus');

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
    networkBlockIndexBigInt < accountBlockIndexBigInt ||
    networkBlockIndexBigInt < localBlockIndexBigInt
  ) {
    isSynced = false;
    percentSynced = 0;
    statusCode = ERROR;
  } else {
    const minBlockIndexBigInt =
      accountBlockIndexBigInt < localBlockIndexBigInt
        ? accountBlockIndexBigInt
        : localBlockIndexBigInt;
    percentSynced = getPercentSynced(networkBlockIndexBigInt, minBlockIndexBigInt);
    isSynced = networkBlockIndexBigInt - minBlockIndexBigInt < acceptableDiffBigInt;

    statusCode = isSynced ? SYNCED : SYNCING;
  }
  sendSyncStatus(statusCode);

  switch (statusCode) {
    case SYNCED: {
      backgroundColor = BLUE_DARK;
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
    <Tooltip
      title={title}
      placement="right"
      arrow
      className={classes.tooltip}
      data-testid="tooltip-title"
    >
      <Box className={classes.statusContainer}>
        <Box className={classes.statusIconContainer}>
          <CircleMOBIcon
            backgroundColor={backgroundColor}
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
export { SyncStatus };
