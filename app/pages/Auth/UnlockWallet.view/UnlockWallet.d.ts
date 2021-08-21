export interface UnlockWalletViewProps {
  accounts: { account: string; password: string }[];
  onClickUnlock: (password: string) => void;
  handleDeleteWallet: () => void;
}
