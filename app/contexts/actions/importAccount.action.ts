import type { Account, Accounts } from '../../types/Account.d';
import type { Address, Addresses } from '../../types/Address.d';
import { BalanceStatus } from '../../types/BalanceStatus';
import type { SelectedAccount } from '../../types/SelectedAccount.d';
import type { StringHex } from '../../types/SpecialStrings.d';
import type { WalletStatus } from '../../types/WalletStatus.d';

export const IMPORT_ACCOUNT = 'IMPORT_ACCOUNT';

export type ImportAccountActionType = {
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
): ImportAccountActionType => ({
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
