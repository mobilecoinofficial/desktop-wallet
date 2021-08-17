import type { Account, Accounts } from '../../types/Account.d';
import type { Address, Addresses } from '../../types/Address.d';
import type { BalanceStatus } from '../../types/BalanceStatus.d';
import type { SelectedAccount } from '../../types/SelectedAccount.d';
import type { StringHex } from '../../types/SpecialStrings.d';

export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';

export type SelectAccountActionType = {
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
): SelectAccountActionType => ({
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
