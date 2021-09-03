import React from 'react';
import type { FC } from 'react';

import { Box, makeStyles, useMediaQuery } from '@material-ui/core';
import { ipcRenderer } from 'electron';

// import { TIME_FOR_INACTIVITY, TIME_FOR_REACTION } from '../../../constants/app';
import useFullService from '../../../hooks/useFullService';
import { confirmEntropyKnown, setPin } from '../../../services';
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

const DashboardLayout: FC<DashboardLayoutProps> = ({ children, onClose }: DashboardLayoutProps) => {
  const { offlineModeEnabled, selectedAccount, isEntropyKnown, isPinRequired, pendingSecrets } =
    useFullService();
  const classes = useStyles();
  const matches = useMediaQuery('(min-height:768px)');
  const sendSyncStatus = (statusCode: string) => ipcRenderer.send('sync-status', statusCode);

  const importLedger = async () => {
    ipcRenderer.invoke('import-ledger-db');
  };

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
            balance={selectedAccount.balanceStatus.unspentPmob}
            importLedger={importLedger}
            isSynced={selectedAccount.balanceStatus.isSynced}
            offlineModeEnabled={offlineModeEnabled}
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
            pendingSecrets={pendingSecrets}
            setPin={setPin}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
export { DashboardLayout };
