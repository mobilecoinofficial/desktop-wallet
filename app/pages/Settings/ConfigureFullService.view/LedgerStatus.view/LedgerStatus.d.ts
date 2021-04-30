import Account from '../../../../types/Account';
import BalanceStatus from '../../../../types/BalanceStatus';

type SelectedAccount = {
  account: Account;
  balanceStatus: BalanceStatus;
};

export interface LedgerStatusProps {
  selectedAccount: SelectedAccount;
}
