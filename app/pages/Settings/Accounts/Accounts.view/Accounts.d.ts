import { Accounts } from '../../../../types/Account';
import { SelectedAccount } from '../../LedgerStatus.view/LedgerStatus';

export interface AccountsViewProps {
  accounts: Accounts;
  deleteAccount: (accountId: string) => void;
  onClickBack: () => void;
  selectAccount: (accountId: string) => void;
  selectedAccount: SelectedAccount;
}
