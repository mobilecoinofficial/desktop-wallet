import SelectedAccount from '../../../types/SelectedAccount';

export interface DashboardPageProps {
  onClose: () => void;
  selectedAccount: SelectedAccount;
}
