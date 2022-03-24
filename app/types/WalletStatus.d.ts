import type { Account } from './Account.d';
import type { StringHex, StringUInt64 } from './SpecialStrings';

export interface WalletStatus {
  accountIds: StringHex[];
  accountMap: { [accountId: string]: Account };
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
