import { Accounts, Addresses, SelectedAccount } from '../../../types';

export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';

export type SelectAccountAction = {
  type: 'SELECT_ACCOUNT';
  payload: {
    accounts: Accounts;
    addresses: Addresses;
    selectedAccount: SelectedAccount;
  };
};
