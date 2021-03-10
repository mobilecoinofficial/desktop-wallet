import { ipcRenderer } from 'electron';

export const getKeychainAccounts = () => {
  return ipcRenderer.sendSync('fetch-accounts');
};

export const setKeychainAccount = (account: string, password: string) => {
  ipcRenderer.send('set-account', account, password);
};
