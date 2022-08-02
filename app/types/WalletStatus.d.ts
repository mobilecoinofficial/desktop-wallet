import type { Account } from './Account.d';
import type { StringHex, StringUInt64 } from './SpecialStrings';

export interface WalletStatus {
  accountIds?: StringHex[];
  accountMap?: { [accountId: string]: Account };
  isSyncedAll: boolean;
  localBlockHeight?: StringUInt64;
  minSyncedBlockIndex: StringUInt64;
  networkBlockHeight?: StringUInt64;
  object?: 'wallet_status';
  totalOrphanedPmob: StringUInt64;
  totalPendingPmob: StringUInt64;
  totalSecretedPmob: StringUInt64;
  totalSpentPmob: StringUInt64;
  totalUnspentPmob: StringUInt64;
}

export interface WalletStatusFromV2Api {
  // The block count of MobileCoin's distributed ledger.
  networkBlockHeight: StringUInt64;
  // The local block count downloaded from the ledger. The local database
  // is synced when the local_block_height reaches the network_block_height.
  // The account_block_height can only sync up to local_block_height.
  localBlockHeight: StringUInt64;
  // Whether ALL accounts are synced up to the network_block_height. Balances
  // may not appear correct if any account is still syncing.
  isSyncedAll: boolean;
  // The minimum synced block across all accounts
  minSyncedBlockIndex: StringUInt64;
  balancePerToken: {
    [tokenId: string]: {
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
    };
  };
}
