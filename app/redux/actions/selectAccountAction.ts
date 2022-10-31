import { Accounts, Addresses, SelectedAccount, WalletStatus } from '../../types';

export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';

export type SelectAccountAction = {
  type: 'SELECT_ACCOUNT';
  payload: {
    accounts: Accounts;
    addresses: Addresses;
    selectedAccount: SelectedAccount;
    walletStatus: WalletStatus;
  };
};

export const selectAccountAction = (
  accounts: Accounts,
  addresses: Addresses,
  selectedAccount: SelectedAccount,
  walletStatus: WalletStatus
): SelectAccountAction => ({
  payload: {
    accounts,
    addresses,
    selectedAccount,
    walletStatus,
  },
  type: SELECT_ACCOUNT,
});
