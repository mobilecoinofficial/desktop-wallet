import {
  StringHex,
  Account,
  Address,
  BalanceStatus,
  Accounts,
  Addresses,
  SelectedAccount,
} from '../../types';

export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';

export type SelectAccountAction = {
  type: 'SELECT_ACCOUNT';
  payload: {
    accounts: Accounts;
    addresses: Addresses;
    selectedAccount: SelectedAccount;
  };
};

export const selectAccountAction = (
  accountIds: StringHex[],
  accountMap: { [accountId: string]: Account },
  addressIds: StringHex[],
  addressMap: { [addressId: string]: Address },
  selectedAccount: Account,
  balanceStatus: BalanceStatus
): SelectAccountAction => ({
  payload: {
    accounts: {
      accountIds,
      accountMap,
    },
    addresses: {
      addressIds,
      addressMap,
    },
    selectedAccount: {
      account: selectedAccount,
      balanceStatus,
    },
  },
  type: SELECT_ACCOUNT,
});
