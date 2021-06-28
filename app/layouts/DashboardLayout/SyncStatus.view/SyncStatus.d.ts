import type { SelectedAccount } from '../../../types/SelectedAccount.d';

export interface SyncStatusProps {
  selectedAccount: SelectedAccount;
  sendSyncStatus: (statusCode: string) => void;
}
