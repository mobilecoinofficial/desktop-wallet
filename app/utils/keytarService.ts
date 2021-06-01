import { ipcRenderer } from 'electron';

export const getKeychainAccounts = (): { account: string; password: string }[] =>
  ipcRenderer.sendSync('fetch-accounts');

export const setKeychainAccount = (account: string, password: string): void => {
  ipcRenderer.send('set-account', account, password);
};

export const removeKeychainAccounts = (): void => {
  ipcRenderer.send('remove-accounts');
};
