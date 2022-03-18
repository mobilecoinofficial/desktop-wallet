import { Account, BalanceStatus, WalletStatus } from '../../../types';
import { UpdateStatusAction } from './type';

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
