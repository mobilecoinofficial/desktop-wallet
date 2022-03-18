import { SelectedAccount, WalletStatus } from '../../../types';

export const UPDATE_WALLET_STATUS = 'UPDATE_WALLET_STATUS';

export type UpdateStatusAction = {
  payload: {
    selectedAccount: SelectedAccount;
    walletStatus: WalletStatus;
  };
  type: 'UPDATE_WALLET_STATUS';
};
