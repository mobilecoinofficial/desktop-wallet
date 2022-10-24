import type { BalanceFromV2Api } from './BalanceStatus';
import type { StringB58, StringHex, StringUInt64 } from './SpecialStrings';

export interface Account {
  accountId: StringHex;
  accountHeight?: StringUInt64;
  firstBlockIndex: StringUInt64;
  mainAddress: StringB58;
  name: string | null;
  nextSubaddressIndex: StringUInt64;
  recoveryMode: boolean;
}

export interface AccountV2 {
  // Unique identifier for the account. Constructed from the public key
  // materials of the account key.
  id: StringHex;
  // Display name for the account.
  name: string;
  // Key Derivation Version
  keyDerivationVersion: string;
  // B58 Address Code for the account's main address. The main address is
  // determined by the seed subaddress. It is not assigned to a single
  // recipient, and should be consider a free-for-all address.
  mainAddress: StringB58;
  // This index represents the next subaddress to be assigned as an address.
  // This is useful information in case the account is imported elsewhere.
  nextSubaddressIndex: StringUInt64;
  // Index of the first block when this account may have received funds.
  // No transactions before this point will be synchronized.
  firstBlockIndex: StringUInt64;
  // Index of the next block this account needs to sync.
  nextBlockIndex: StringUInt64;
  // A flag that indicates this imported account is attempting to un-orphan
  // found TXOs. It is recommended to move all MOB to another account after
  // recovery if the user is unsure of the assigned addresses.
  recoveryMode: boolean;
  // A flag that indicates if this account is FOG enabled, which means that
  // it will send any change to it's main subaddress (index 0) instead of
  // the default change subaddress (index 1). It also generates
  // PublicAddressB58's with fog credentials.
  fogEnabled: boolean;
  // A flag that indicates if this account is a watch only account.
  viewOnly: boolean;
}

export interface AccountStatus {
  account: AccountV2;
  networkBlockHeight: StringUInt64;
  localBlockHeight: StringUInt64;
  balancePerToken: {
    [tokenId: StringUInt64]: BalanceFromV2Api;
  };
}

export type Accounts = {
  accountIds: StringHex[];
  accountMap: { [accountId: string]: Account };
};

export type AccountsV2 = {
  accountIds: StringHex[];
  accountMap: { [accountId: string]: AccountV2 };
};
