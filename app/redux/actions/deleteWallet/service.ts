import { ipcRenderer } from 'electron';

export const deleteWallet = async (): Promise<void> => {
  ipcRenderer.sendSync('reset-wallet-db');
};

export type DeleteWalletService = typeof deleteWallet;
