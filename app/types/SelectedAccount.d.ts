import type { Account } from './Account.d';
import type { BalanceStatus } from './BalanceStatus.d';

export interface SelectedAccount {
  account: Account;
  balanceStatus: BalanceStatus;
}
