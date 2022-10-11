import { Account } from '../../../../types/Account';

export interface AccountItemProps {
  account: Account;
  onClick: () => void;
  onClickExport: () => void;
  onClickSyncExport: () => void;
  onClickSyncImport: () => void;
  onDelete: () => void;
  selected: boolean;
}
