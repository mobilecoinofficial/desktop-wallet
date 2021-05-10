import SelectedAccount from '../../../types/SelectedAccount';

export interface SyncStatusProps {
  selectedAccount: SelectedAccount;
  sendSyncStatus: (statusCode: string) => void;
}
