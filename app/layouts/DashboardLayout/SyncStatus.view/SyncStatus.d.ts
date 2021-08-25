import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface SyncStatusProps {
  offlineModeEnabled: boolean;
  selectedAccount: SelectedAccount;
  sendSyncStatus: (statusCode: string) => void;
}
