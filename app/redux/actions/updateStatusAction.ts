import type { Account, BalanceStatus, SelectedAccount } from '../../types';

export const UPDATE_WALLET_STATUS = 'UPDATE_WALLET_STATUS';

export type UpdateStatusAction = {
  payload: {
    selectedAccount: SelectedAccount;
  };
  type: 'UPDATE_WALLET_STATUS';
};

export const updateStatusAction = (
  account: Account,
  balanceStatus: BalanceStatus
): UpdateStatusAction => ({
  payload: {
    selectedAccount: {
      account,
      balanceStatus,
    },
  },
  type: 'UPDATE_WALLET_STATUS',
});
