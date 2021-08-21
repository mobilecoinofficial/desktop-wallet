import { ipcRenderer } from 'electron';

const deleteWallet = async (): Promise<void> => {
  ipcRenderer.sendSync('reset-wallet-db');
};

export default deleteWallet;
export { deleteWallet };
export type DeleteWalletService = typeof deleteWallet;
