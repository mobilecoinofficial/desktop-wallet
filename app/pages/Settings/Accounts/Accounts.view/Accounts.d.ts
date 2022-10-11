import { GetViewOnlyAccountSyncRequestResult } from '../../../../fullService/api/getViewOnlyAccountSyncRequest';
import { Accounts } from '../../../../types/Account';
import { SelectedAccount } from '../../LedgerStatus.view/LedgerStatus';

export interface AccountsViewProps {
  accounts: Accounts;
  deleteAccount: (accountId: string) => void;
  onClickAddAccount: () => void;
  onClickBack: () => void;
  saveViewOnlySyncRequest: (syncRequest: GetViewOnlyAccountSyncRequestResult) => Promise<void>;
  selectAccount: (accountId: string) => void;
  selectedAccount: SelectedAccount;
}
