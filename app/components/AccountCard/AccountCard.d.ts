import { Accounts } from '../../types/Account';

export interface AccountCardProps {
  account: {
    accountId: string;
    b58Code: string;
    name?: string;
    balance: string;
    fogEnabled?: boolean;
  };
  accounts?: Accounts;
  isGift?: boolean;
  onClickCode?: (code: string, text: string) => void;
}
