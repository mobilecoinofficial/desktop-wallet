import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface InactivityDetectProps {
  handleCloseApp: () => void;
  selectedAccount: SelectedAccount;
  TIME_FOR_INACTIVITY: number;
  TIME_FOR_REACTION: number;
}
