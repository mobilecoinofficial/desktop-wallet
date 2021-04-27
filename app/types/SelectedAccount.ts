import Account from './Account';
import BalanceStatus from './BalanceStatus';

export default interface SelectedAccount {
  account: Account;
  balanceStatus: BalanceStatus;
}
