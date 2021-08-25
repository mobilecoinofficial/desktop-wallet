export interface UnlockWalletViewProps {
  accounts: { account: string; password: string }[];
  onClickUnlock: (password: string, startInOfflineMode: boolean) => void;
  handleDeleteWallet: () => void;
  fullServiceIsRunning: boolean;
}
