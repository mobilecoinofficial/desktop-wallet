import type { StringUInt64 } from './SpecialStrings';

export interface BalanceStatus {
  accountBlockHeight?: StringUInt64;
  isSynced: boolean;
  localBlockHeight?: StringUInt64;
  networkBlockHeight?: StringUInt64;
  object?: 'balance';
  orphanedPmob: StringUInt64;
  pendingPmob: StringUInt64;
  secretedPmob: StringUInt64;
  spentPmob: StringUInt64;
  unspentPmob: StringUInt64;
}

export interface BalanceFromV2Api {
  // The max spendable amount in a single transaction.
  max_spendable: StringUInt64;
  // Unverified pico MOB. The Unverified value represents the Txos which were
  // NOT view-key matched, but do have an assigned subaddress.
  unverified: StringUInt64;
  // Unspent pico MOB for this account at the current account_block_height.
  // If the account is syncing, this value may change.
  unspent: StringUInt64;
  // Pending, out-going pico MOB. The pending value will clear once the
  // ledger processes the outgoing txos. The available_pmob will reflect the
  // change.
  pending: StringUInt64;
  // Spent pico MOB. This is the sum of all the Txos in the wallet which have
  // been spent.
  spent: StringUInt64;
  // Secreted (minted) pico MOB. This is the sum of all the Txos which have
  // been created in the wallet for outgoing transactions.
  secreted: StringUInt64;
  // Orphaned pico MOB. The orphaned value represents the Txos which were
  // view-key matched, but which can not be spent until their subaddress
  // index is recovered.
  orphaned: StringUInt64;
}
