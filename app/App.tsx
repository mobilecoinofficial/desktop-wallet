/* eslint-disable react/prefer-stateless-function */
import React, { useEffect } from 'react';
import type { FC } from 'react';

import { ThemeProvider } from '@material-ui/core';
import { ipcRenderer } from 'electron';
import { SnackbarProvider } from 'notistack';
import { hot } from 'react-hot-loader/root';
import { MemoryRouter } from 'react-router-dom';

import { CrashReportModal, DebugLogModal, GlobalStyles } from './components';
import { MOBILE_COIN_DARK, MOBILE_COIN_LIGHT } from './constants/themes';
import { FullServiceProvider } from './contexts/FullServiceContext';
import routes, { renderRoutes } from './routes';
import { setTheme } from './theme';
import debugLogger from './utils/debugLogger.client';

const App: FC = () => {
  const [theme, setThemeReact] = React.useState(
    setTheme({
      responsiveFontSizes: true,
      theme: ipcRenderer.sendSync('get-theme') === 'light' ? MOBILE_COIN_LIGHT : MOBILE_COIN_DARK,
    })
  );

  useEffect(() => {
    ipcRenderer.on('set-theme-light', () => {
      setThemeReact(
        setTheme({
          responsiveFontSizes: true,
          theme: MOBILE_COIN_LIGHT,
        })
      );
    });
    ipcRenderer.on('set-theme-dark', () => {
      setThemeReact(
        setTheme({
          responsiveFontSizes: true,
          theme: MOBILE_COIN_DARK,
        })
      );
    });

    return () => {
      ipcRenderer.removeAllListeners('set-theme-light');
      ipcRenderer.removeAllListeners('set-theme-dark');
    };
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
          <FullServiceProvider>
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
          </FullServiceProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
};

export default hot(App);
