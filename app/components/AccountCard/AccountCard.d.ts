import { Accounts } from '../../types/Account';

export interface AccountCardProps {
  account: { accountId: string; b58Code: string; name?: string; balance: string };
  accounts?: Accounts;
  isGift?: boolean;
  onClickCode?: (code: string, text: string) => void;
}
