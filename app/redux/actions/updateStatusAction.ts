import { Account, BalanceStatus, SelectedAccount, WalletStatus } from '../../types';

export const UPDATE_WALLET_STATUS = 'UPDATE_WALLET_STATUS';

export type UpdateStatusAction = {
  payload: {
    selectedAccount: SelectedAccount;
    walletStatus: WalletStatus;
  };
  type: 'UPDATE_WALLET_STATUS';
};

export const updateStatusAction = (
  account: Account,
  balanceStatus: BalanceStatus,
  walletStatus: WalletStatus
): UpdateStatusAction => ({
  payload: {
    selectedAccount: {
      account,
      balanceStatus,
    },
    walletStatus,
  },
  type: 'UPDATE_WALLET_STATUS',
});
