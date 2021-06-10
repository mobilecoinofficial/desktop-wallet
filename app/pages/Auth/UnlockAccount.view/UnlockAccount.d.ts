import type { UnlockWalletService } from '../../../services';

export interface UnlockAccountViewProps {
  unlockWallet: UnlockWalletService;
  accounts: { account: string; password: string }[];
}
