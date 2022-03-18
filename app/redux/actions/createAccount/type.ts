import { Accounts, Addresses, PendingSecrets, SelectedAccount, WalletStatus } from '../../../types';

export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';

export type CreateAccountAction = {
  payload: {
    accounts: Accounts;
    addresses: Addresses;
    pendingSecrets: PendingSecrets;
    selectedAccount: SelectedAccount;
    walletStatus: WalletStatus;
  };
  type: 'CREATE_ACCOUNT';
};
