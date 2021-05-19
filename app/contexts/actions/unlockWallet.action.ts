import type { Account, Accounts } from '../../types/Account.d';
import type { Address, Addresses } from '../../types/Address.d';
import type { BalanceStatus } from '../../types/BalanceStatus.d';
import type { Contact } from '../../types/Contact.d';
import type { SelectedAccount } from '../../types/SelectedAccount.d';
import type { StringHex, StringUInt64 } from '../../types/SpecialStrings.d';
import type { WalletStatus } from '../../types/WalletStatus.d';

export const UNLOCK_WALLET = 'UNLOCK_WALLET';

export type UnlockWalletActionType = {
  type: 'UNLOCK_WALLET';
  payload: {
    accounts: Accounts;
    addresses: Addresses;
    contacts: Contact[];
    isPinRequired: boolean;
    pin: string | undefined;
    pinThresholdPmob: StringUInt64;
    secretKey: string;
    selectedAccount: SelectedAccount;
    walletStatus: WalletStatus;
  };
};

export const unlockWalletAction = (
  accountIds: StringHex[],
  accountMap: { [accountId: string]: Account },
  addressIds: StringHex[],
  addressMap: { [addressId: string]: Address },
  contacts: Contact[],
  isPinRequired: boolean,
  pin: string | undefined,
  pinThresholdPmob: StringUInt64,
  secretKey: string,
  selectedAccount: Account,
  balanceStatus: BalanceStatus,
  walletStatus: WalletStatus
): UnlockWalletActionType => ({
  payload: {
    accounts: {
      accountIds,
      accountMap,
    },
    addresses: {
      addressIds,
      addressMap,
    },
    contacts,
    isPinRequired,
    pin,
    pinThresholdPmob,
    secretKey,
    selectedAccount: {
      account: selectedAccount,
      balanceStatus,
    },
    walletStatus,
  },
  type: UNLOCK_WALLET,
});
