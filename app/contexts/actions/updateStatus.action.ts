import type { Account } from '../../types/Account.d';
import type { BalanceStatus } from '../../types/BalanceStatus.d';
import type { SelectedAccount } from '../../types/SelectedAccount.d';
import { TransactionLogs } from '../../types/TransactionLog';
import type { WalletStatus } from '../../types/WalletStatus.d';

export const UPDATE_STATUS = 'UPDATE_STATUS';

export type UpdateStatusActionType = {
  payload: {
    selectedAccount: SelectedAccount;
    transactionLogs: TransactionLogs;
    walletStatus: WalletStatus;
  };
  type: 'UPDATE_STATUS';
};

export const updateStatusAction = (
  account: Account,
  balanceStatus: BalanceStatus,
  transactionLogs: TransactionLogs,
  walletStatus: WalletStatus
): UpdateStatusActionType => ({
  payload: {
    selectedAccount: {
      account,
      balanceStatus,
    },
    transactionLogs,
    walletStatus,
  },
  type: 'UPDATE_STATUS',
});
