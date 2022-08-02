// TODO - change to just Account; delete the other Account type
import type { AccountKey } from './AccountSecrets';
import type { BalanceFromV2Api } from './BalanceStatus';
import type { StringB58, StringHex, StringUInt64 } from './SpecialStrings';

// type AccountSyncStatus = {
//   object: 'account_balance';
//   accountId: StringHex;
//   accountBlockCount: StringUInt64;
//   localBlockCount: StringUInt64;
//   networkBlockCount: StringUInt64;
//   isSynced: boolean
// };

// type AccountBalance = {
//   object: 'account_balance';
//   accountId: StringHex;
//   orphanedPmob: StringUInt64;
//   pendingPmob: StringUInt64;
//   secretedPmob: StringUInt64;
//   spentPmob: StringUInt64;
//   unspentPmob: StringUInt64;
// };
// export default interface Account {
//   object: 'account';
//   accountBalance: AccountBalance;
//   accountHeight: StringUInt64; // why do we have this?
//   accountId: StringHex;
//   accountKey: AccountKey;
//   accountSyncStatus: AccountSyncStatus;
//   entropy: StringHex;
//   mainAddress: StringB58;
//   // metadata: string used as a wildcard, stringified json object?
//   name: string | null;
//   nextSubaddressIndex: StringUInt64;
//   // offsetCount: number; TODO - follow up on why we removed this? to discourage n accounts?
//   recoveryMode: boolean;
// }

export interface Account {
  // metadata: string used as a wildcard, stringified json object?
  accountId: StringHex;
  accountHeight?: StringUInt64;
  accountKey?: AccountKey;
  entropy?: StringHex;
  firstBlockIndex: StringUInt64;
  keyDerivationVersion: string;
  mainAddress: StringB58;
  name: string | null;
  nextSubaddressIndex: StringUInt64;
  object: 'account';
  recoveryMode: boolean;
}

export interface AccountFromV2Api {
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
  account: AccountFromV2Api;
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
