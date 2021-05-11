import type { Account } from '../../../../types/Account.d';
import type { BalanceStatus } from '../../../../types/BalanceStatus.d';

type SelectedAccount = {
  account: Account;
  balanceStatus: BalanceStatus;
};

export interface LedgerStatusProps {
  selectedAccount: SelectedAccount;
}
