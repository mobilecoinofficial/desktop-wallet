import { Accounts, Addresses, SelectedAccount, WalletStatus } from '../../../types';

export const IMPORT_ACCOUNT = 'IMPORT_ACCOUNT';

export type ImportAccountAction = {
  payload: {
    accounts: Accounts;
    addresses: Addresses;
    selectedAccount: SelectedAccount;
    walletStatus: WalletStatus;
  };
  type: 'IMPORT_ACCOUNT';
};
