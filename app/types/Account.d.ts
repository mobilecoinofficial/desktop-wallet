// TODO - change to just Account; delete the other Account type
import { AccountKey } from './AccountSecrets';
import { BalanceStatus } from './BalanceStatus';
import type { StringB58, StringHex, StringUInt64 } from './SpecialStrings';

// type AccountKey = {
//   object: 'account_key';
//   accountId: StringHex;
//   fogAuthoritySpki: string;
//   fogReportId: string;
//   fogReportUrl: string;
//   spendPrivateKey: StringHex;
//   viewPrivateKey: StringHex;
// };

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
  balanceStatus: BalanceStatus;
  entropy?: StringHex;
  firstBlockIndex: StringUInt64;
  key_derivation_version: string;
  publicAddress: StringB58;
  name: string | null;
  nextSubaddressIndex: StringUInt64;
  object: 'account';
  recoveryMode: boolean;
}

export type Accounts = {
  accountIds: StringHex[];
  accountMap: { [accountId: string]: Account };
};
