import { Accounts } from '../../../../types/Account';
import { SelectedAccount } from '../../LedgerStatus.view/LedgerStatus';

export interface AccountsViewProps {
  accounts: Accounts;
  deleteAccount: (accountId: string) => void;
  onClickAddAccount: () => void;
  importViewOnlySync: () => Promise<void>;
  onClickBack: () => void;
  downloadJson: (json: string, title: string) => Promise<void>;
  selectAccount: (accountId: string) => void;
  selectedAccount: SelectedAccount;
}
