import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface DashboardPageProps {
  onClose: () => void;
  selectedAccount: SelectedAccount;
  codeClicked: (code: string, text: string) => void;
}
