import SelectedAccount from '../../../types/SelectedAccount';

export interface InactivityDetectProps {
  handleCloseApp: () => void;
  selectedAccount: SelectedAccount;
  TIME_FOR_INACTIVITY: number;
  TIME_FOR_REACTION: number;
}
