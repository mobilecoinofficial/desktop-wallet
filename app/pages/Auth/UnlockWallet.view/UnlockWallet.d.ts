import type { FullServiceContextValue } from '../../../contexts/FullServiceContext';

export interface UnlockWalletViewProps {
  unlockWallet: FullServiceContextValue['unlockWallet'];
  accounts: { account: string; password: string }[];
}
