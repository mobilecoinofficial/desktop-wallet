import React from 'react';
import type { FC } from 'react';

import { Box, makeStyles, Tooltip, CircularProgress } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { CircleMOBIcon } from '../../../components/icons';
import { BLUE_DARK, GOLD_LIGHT, RED } from '../../../constants/colors';
import { Theme } from '../../../theme';
import { getPercentSynced } from '../../../utils/getPercentSynced';
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

const SyncStatus: FC<SyncStatusProps> = ({
  offlineModeEnabled,
  selectedAccount,
  sendSyncStatus,
}: SyncStatusProps) => {
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
  const networkBlockHeightBigInt = BigInt(selectedAccount.balanceStatus.networkBlockHeight ?? 0);
  const localBlockHeightBigInt = BigInt(selectedAccount.balanceStatus.localBlockHeight ?? 0);
  const accountBlockHeightBigInt = BigInt(selectedAccount.balanceStatus.accountBlockHeight ?? 0);
  const acceptableDiffBigInt = BigInt(2);
  if (offlineModeEnabled) {
    isSynced = localBlockHeightBigInt - accountBlockHeightBigInt < acceptableDiffBigInt;
    percentSynced = getPercentSynced(localBlockHeightBigInt, accountBlockHeightBigInt);

    statusCode = isSynced ? SYNCED : SYNCING;
  } else if (
    networkBlockHeightBigInt < accountBlockHeightBigInt ||
    networkBlockHeightBigInt < localBlockHeightBigInt
  ) {
    isSynced = false;
    percentSynced = 0;
    statusCode = ERROR;
  } else {
    const minBlockIndexBigInt =
      accountBlockHeightBigInt < localBlockHeightBigInt
        ? accountBlockHeightBigInt
        : localBlockHeightBigInt;
    percentSynced = getPercentSynced(networkBlockHeightBigInt, minBlockIndexBigInt);
    isSynced = networkBlockHeightBigInt - minBlockIndexBigInt < acceptableDiffBigInt;

    statusCode = isSynced ? SYNCED : SYNCING;
  }
  sendSyncStatus(statusCode);

  switch (statusCode) {
    case SYNCING: {
      backgroundColor = GOLD_LIGHT;
      title = `${percentSynced}%: ${t('syncing')}`;
      break;
    }
    case SYNCED: {
      backgroundColor = BLUE_DARK;
      title = t('synced');
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
