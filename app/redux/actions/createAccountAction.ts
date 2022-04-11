import {
  Account,
  Accounts,
  Address,
  Addresses,
  BalanceStatus,
  PendingSecrets,
  SelectedAccount,
  StringHex,
  WalletStatus,
} from '../../types';

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

export const createAccountAction = (
  accountIds: StringHex[],
  accountMap: { [accountId: string]: Account },
  addressIds: StringHex[],
  addressMap: { [addressId: string]: Address },
  pendingSecrets: PendingSecrets,
  account: Account,
  balanceStatus: BalanceStatus,
  walletStatus: WalletStatus
): CreateAccountAction => ({
  payload: {
    accounts: {
      accountIds,
      accountMap,
    },
    addresses: {
      addressIds,
      addressMap,
    },
    pendingSecrets,
    selectedAccount: {
      account,
      balanceStatus,
    },
    walletStatus,
  },
  type: CREATE_ACCOUNT,
});
