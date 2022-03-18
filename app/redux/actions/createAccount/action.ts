import {
  Account,
  Address,
  BalanceStatus,
  PendingSecrets,
  StringHex,
  WalletStatus,
} from '../../../types';
import { CreateAccountAction, CREATE_ACCOUNT } from './type';

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
