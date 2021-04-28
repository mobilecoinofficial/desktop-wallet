import Account from '../../../types/Account';
import BalanceStatus from '../../../types/BalanceStatus';

type SelectedAccount = {
  account: Account;
  balanceStatus: BalanceStatus;
};

type ConfigureFullServiceConfigs = {
  ledgerDbPath: string;
  fullServiceDbPath: string;
  leaveFullServiceRunning: boolean;
  toggleLeaveFullServiceRunning: () => void;
};

export interface ConfigureFullServiceViewProps {
  configureFullServiceConfigs: ConfigureFullServiceConfigs;
  selectedAccount: SelectedAccount;
  onClickBack: () => void;
}
