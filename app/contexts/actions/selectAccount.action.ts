import type { Account } from '../../types/Account.d';
import type { Address, Addresses } from '../../types/Address.d';
import type { BalanceStatus } from '../../types/BalanceStatus.d';
import type { SelectedAccount } from '../../types/SelectedAccount.d';
import type { StringHex } from '../../types/SpecialStrings.d';

export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';

export type SelectAccountActionType = {
  type: 'SELECT_ACCOUNT';
  payload: {
    addresses: Addresses;
    selectedAccount: SelectedAccount;
  };
};

export const selectAccountAction = (
  addressIds: StringHex[],
  addressMap: { [addressId: string]: Address },
  selectedAccount: Account,
  balanceStatus: BalanceStatus
): SelectAccountActionType => ({
  payload: {
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
