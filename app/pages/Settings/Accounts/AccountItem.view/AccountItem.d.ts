import { Account } from '../../../../types/Account';

export interface AccountItemProps {
  account: Account;
  onClick: () => void;
  onDelete: () => void;
  selected: boolean;
}
