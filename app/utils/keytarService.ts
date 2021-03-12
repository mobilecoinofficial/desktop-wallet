import { ipcRenderer } from 'electron';

export const getKeychainAccounts = (): { account: string; password: string }[] => {
  return ipcRenderer.sendSync('fetch-accounts');
};

export const setKeychainAccount = (account: string, password: string): void => {
  ipcRenderer.send('set-account', account, password);
};
