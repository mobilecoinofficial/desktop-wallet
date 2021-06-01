import type { UnlockWalletService } from '../../../services';

export interface UnlockWalletViewProps {
  unlockWallet: UnlockWalletService;
  accounts: { account: string; password: string }[];
}
