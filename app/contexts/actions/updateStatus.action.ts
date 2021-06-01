import type { Account } from '../../types/Account.d';
import type { BalanceStatus } from '../../types/BalanceStatus.d';
import type { SelectedAccount } from '../../types/SelectedAccount.d';
import type { WalletStatus } from '../../types/WalletStatus.d';

export const UPDATE_STATUS = 'UPDATE_STATUS';

export type UpdateStatusActionType = {
  payload: {
    selectedAccount: SelectedAccount;
    walletStatus: WalletStatus;
  };
  type: 'UPDATE_STATUS';
};

export const updateStatusAction = (
  account: Account,
  balanceStatus: BalanceStatus,
  walletStatus: WalletStatus
): UpdateStatusActionType => ({
  payload: {
    selectedAccount: {
      account,
      balanceStatus,
    },
    walletStatus,
  },
  type: 'UPDATE_STATUS',
});
