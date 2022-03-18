import { Account, Address, BalanceStatus, StringHex, WalletStatus } from '../../../types';
import { ImportAccountAction, IMPORT_ACCOUNT } from './type';

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
