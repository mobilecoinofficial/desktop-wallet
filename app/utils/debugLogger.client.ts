import { ipcRenderer } from 'electron';

const prettifyDebugLogs = (debugLogs: string): string => {
  const prettifiedLogs = debugLogs
    .split(/\r?\n/)
    .map((logLine: string) => {
      const logObj = JSON.parse(logLine);
      return `INFO ${logObj.time} ${logObj.msg}`;
    })
    .join('\n');
  return prettifiedLogs;
};

const crashApplication = (): void => {
  ipcRenderer.send('crash-application');
};

const getLogForCurrentSession = (): string => {
  return prettifyDebugLogs(ipcRenderer.sendSync('debug-logs-for-current-session'));
};

const recordLog = (msg: string): void => {
  ipcRenderer.send('record-log', msg);
};

const openLogsFolder = (): void => {
  ipcRenderer.send('open-logs-folder');
};

export default { crashApplication, getLogForCurrentSession, openLogsFolder, recordLog };
