import type { FullServiceContextValue } from '../../../contexts/FullServiceContext';

export interface UnlockWalletViewProps {
  unlockWallet: FullServiceContextValue['unlockWallet'];
  makePassword: (accountName: string, password: string) => void;
  getPassword: (accountName: string) => Promise<void>;
}
