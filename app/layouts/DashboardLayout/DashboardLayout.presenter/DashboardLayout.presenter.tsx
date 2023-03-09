import React from 'react';
import type { FC } from 'react';

import { Box, makeStyles, useMediaQuery } from '@material-ui/core';
import { ipcRenderer } from 'electron';
// import { TIME_FOR_INACTIVITY, TIME_FOR_REACTION } from '../../../constants/app';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import snakeCaseKeys from 'snakecase-keys';

import {
  getViewOnlyAccountSyncRequest,
  syncViewOnlyAccount,
  syncViewOnlyAccountWithLedger,
} from '../../../fullService/api';
import { camelCaseObjectKeys } from '../../../fullService/utils';
import { setLoadingAction } from '../../../redux/actions';
import { ReduxStoreState } from '../../../redux/reducers/reducers';
import {
  confirmEntropyKnown,
  updatePin,
  getAllTransactionLogsForAccount,
  updateStatus,
} from '../../../redux/services';
import type { Theme } from '../../../theme';
import { BalanceIndicator } from '../BalanceIndicator.view';
// import { InactivityDetect } from '../InactivityDetect';
import { OnboardingModal } from '../OnboardingModal.view';
import { SyncStatus } from '../SyncStatus.view';
import { TopBar } from '../TopBar';
import { DashboardLayoutProps } from './DashboardLayout';

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflowX: 'hidden',
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    overflow: 'hidden',
    paddingTop: 72,
  },
}));

export const DashboardLayout: FC<DashboardLayoutProps> = (
  props: DashboardLayoutProps
): JSX.Element => {
  const { offlineModeEnabled, selectedAccount, isEntropyKnown, isPinRequired, tokenId } =
    useSelector((state: ReduxStoreState) => state);
  const dispatch = useDispatch();
  const { children } = props;
  const classes = useStyles();
  const matches = useMediaQuery('(min-height:768px)');
  const sendSyncStatus = (statusCode: string) => ipcRenderer.send('sync-status', statusCode);
  const { enqueueSnackbar } = useSnackbar();

  const importLedger = async () => {
    ipcRenderer.invoke('import-ledger-db');
  };

  const downloadJson = async (json: string, title: string) => {
    const success = await ipcRenderer.invoke('download-json', json, title);
    enqueueSnackbar(success ? 'Success' : 'Failure', { variant: success ? 'success' : 'error' });
  };

  const importViewOnlySync = async () => {
    const rawRequest = await ipcRenderer.invoke('import-file');
    const parsedParams = camelCaseObjectKeys(JSON.parse(rawRequest).params);
    dispatch(setLoadingAction(true));
    await syncViewOnlyAccount(parsedParams);
    await getAllTransactionLogsForAccount(selectedAccount.account.accountId);
    await updateStatus(selectedAccount.account.accountId, selectedAccount.account);
    dispatch(setLoadingAction(false));
    enqueueSnackbar('Account Synced', { variant: 'success' });
  };

  const getViewOnlySync = async () => {
    const response = await getViewOnlyAccountSyncRequest({
      accountId: selectedAccount.account.accountId,
    });
    await downloadJson(JSON.stringify(snakeCaseKeys(response)), 'view_only_sync_request');
  };

  const syncAccountWithLedger = async () => {
    // enqueueSnackbar('You may be prompted to confirm on your Ledger device', { variant: 'info' });
    console.log('syncAccountWithLedger');

    try {
      await syncViewOnlyAccountWithLedger({
        accountId: selectedAccount.account.accountId,
      });
      enqueueSnackbar('Success', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(
        "You may need to confirm on your Ledger device. If you're sure you've confirmed, try again or reconnect your Ledger device.",
        { variant: 'error' }
      );
    }
  };

  const accountBalance = selectedAccount.balanceStatus.balancePerToken[tokenId];
  const balance = selectedAccount.account.viewOnly
    ? (Number(accountBalance.unspentPmob) + Number(accountBalance.unverifiedPmob)).toString()
    : accountBalance.unspentPmob;
  const containsUnverified =
    selectedAccount.account.viewOnly && Number(accountBalance.unverifiedPmob) > 0;

  return (
    <Box className={classes.root}>
      <TopBar />
      <Box className={classes.wrapper}>
        <Box
          display="flex"
          flexDirection="column"
          p={3}
          style={matches ? {} : { padding: '12px 0 6px' }}
        >
          <SyncStatus
            offlineModeEnabled={offlineModeEnabled}
            selectedAccount={selectedAccount}
            sendSyncStatus={sendSyncStatus}
          />
          <BalanceIndicator
            balance={balance}
            containsUnverified={containsUnverified}
            importViewOnlySync={importViewOnlySync}
            getViewOnlySync={getViewOnlySync}
            syncAccountWithLedger={syncAccountWithLedger}
            importLedger={importLedger}
            isSynced={selectedAccount.balanceStatus.isSynced}
            offlineModeEnabled={offlineModeEnabled}
            viewOnly={selectedAccount.account.viewOnly}
            managedByHardwareWallet={selectedAccount.account.managedByHardwareWallet}
          />
        </Box>
        <Box className={classes.contentContainer}>
          {/* <InactivityDetect
            handleCloseApp={onClose}
            selectedAccount={selectedAccount}
            TIME_FOR_INACTIVITY={TIME_FOR_INACTIVITY}
            TIME_FOR_REACTION={TIME_FOR_REACTION}
          /> */}
          <Box className={classes.content}>{children}</Box>
          <OnboardingModal
            confirmEntropyKnown={confirmEntropyKnown}
            isEntropyKnown={isEntropyKnown}
            isPinRequired={isPinRequired}
            updatePin={updatePin}
          />
        </Box>
      </Box>
    </Box>
  );
};
