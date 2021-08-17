import { Accounts } from '../../../types/Account';
import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface DashboardPageProps {
  accounts: Accounts;
  onAddAccount: () => void;
  onClose: () => void;
  selectedAccount: SelectedAccount;
  onClickCode: (code: string, text: string) => void;
}
