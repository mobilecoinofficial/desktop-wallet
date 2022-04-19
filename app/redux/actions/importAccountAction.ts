import {
  Account,
  Accounts,
  Address,
  Addresses,
  BalanceStatus,
  SelectedAccount,
  StringHex,
  WalletStatus,
} from '../../types';

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

export const importAccountAction = (
  accountIds: StringHex[],
  accountMap: { [accountId: string]: Account },
  addressIds: StringHex[],
  addressMap: { [addressId: string]: Address },
  account: Account,
  balanceStatus: BalanceStatus,
  walletStatus: WalletStatus
): ImportAccountAction => ({
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
      account,
      balanceStatus,
    },
    walletStatus,
  },
  type: IMPORT_ACCOUNT,
});
