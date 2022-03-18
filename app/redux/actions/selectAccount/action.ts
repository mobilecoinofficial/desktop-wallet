import { StringHex, Account, Address, BalanceStatus } from '../../../types';
import { SelectAccountAction, SELECT_ACCOUNT } from './type';

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
