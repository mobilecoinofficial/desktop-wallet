/* eslint-disable react/prefer-stateless-function */
import React, { useEffect } from 'react';
import type { FC } from 'react';

import { ThemeProvider } from '@material-ui/core';
import { ipcRenderer } from 'electron';
import { SnackbarProvider } from 'notistack';
import { hot } from 'react-hot-loader/root';
import { MemoryRouter } from 'react-router-dom';

import { CrashReportModal, DebugLogModal, GlobalStyles } from './components';
import { MOBILE_COIN_DARK } from './constants/themes';
import { MobileCoinDProvider } from './contexts/MobileCoinDContext';
import client from './mobilecoind/client';
import routes, { renderRoutes } from './routes';
import { setTheme } from './theme';
import debugLogger from './utils/debugLogger.client';

const App: FC = () => {
  const theme = setTheme({
    responsiveFontSizes: true,
    theme: MOBILE_COIN_DARK,
  });

  const [openCrashReportModal, setOpenCrashReportModal] = React.useState(false);
  const [debugModalOpen, setDebugModalOpen] = React.useState(false);
  const [debugModalLog, setDebugModalLog] = React.useState('');

  useEffect(() => {
    ipcRenderer.on('open-debug-logs-modal', () => {
      setDebugModalOpen(true);
      setDebugModalLog(debugLogger.getLogForCurrentSession());
    });

    ipcRenderer.on('open-crash-report-modal', () => {
      setOpenCrashReportModal(true);
    });

    return () => {
      ipcRenderer.removeAllListeners('open-debug-logs-modal');
      ipcRenderer.removeAllListeners('open-crash-report-modal');
    };
  }, []);

  const handleCloseDebugLogModal = () => {
    setDebugModalOpen(false);
  };

  const handleSendDebugLog = () => {};
  const handleOpenLogsFolder = () => {
    debugLogger.openLogsFolder();
  };

  return (
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <SnackbarProvider dense maxSnack={5}>
          <MobileCoinDProvider client={client}>
            <GlobalStyles />
            {renderRoutes(routes)}
            <CrashReportModal open={openCrashReportModal} />
            <DebugLogModal
              debugLog={debugModalLog}
              onClose={handleCloseDebugLogModal}
              onOpenLogsFolder={handleOpenLogsFolder}
              onSendReport={handleSendDebugLog}
              open={debugModalOpen}
            />
          </MobileCoinDProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
};

export default hot(App);
