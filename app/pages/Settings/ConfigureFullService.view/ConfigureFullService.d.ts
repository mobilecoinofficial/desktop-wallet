import type { Account } from '../../../types/Account.d';
import type { BalanceStatus } from '../../../types/BalanceStatus.d';

type SelectedAccount = {
  account: Account;
  balanceStatus: BalanceStatus;
};

type ConfigureFullServiceConfigs = {
  ledgerDbPath: string;
  fullServiceBinariesPath: string;
  fullServiceDbPath: string;
  leaveFullServiceRunning: boolean;
  toggleLeaveFullServiceRunning: () => void;
};

export interface ConfigureFullServiceViewProps {
  configureFullServiceConfigs: ConfigureFullServiceConfigs;
  exportLedger: () => void;
  exportTransactionHistory: () => void;
  importLedger: () => void;
  offlineModeEnabled?: boolean;
  onClickBack: () => void;
  selectedAccount: SelectedAccount;
}
