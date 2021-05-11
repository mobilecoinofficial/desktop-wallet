import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface DashboardPageProps {
  onClose: () => void;
  selectedAccount: SelectedAccount;
}
