import { Account, Accounts } from '../../types/Account';

export interface AccountCardProps {
  account: Account;
  accounts?: Accounts;
  isGift?: boolean;
  onClickCode: (code: string, text: string) => void;
}
