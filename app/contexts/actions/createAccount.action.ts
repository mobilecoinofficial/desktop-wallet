import type { Account, Accounts } from '../../types/Account.d';
import type { Address, Addresses } from '../../types/Address.d';
import { BalanceStatus } from '../../types/BalanceStatus';
import type { PendingSecrets } from '../../types/PendingSecrets.d';
import type { SelectedAccount } from '../../types/SelectedAccount.d';
import type { StringHex } from '../../types/SpecialStrings.d';
import type { WalletStatus } from '../../types/WalletStatus.d';

export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';

export type CreateAccountActionType = {
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
): CreateAccountActionType => ({
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
