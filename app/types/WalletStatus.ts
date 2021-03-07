import type Account from './FullServiceAccount';
import type { StringHex, StringUInt64 } from './SpecialStrings';

export default interface WalletStatus {
  accountIds: StringHex[];
  accountMap: { [accountId: string]: Account };
  isSyncedAll: boolean
  localBlockIndex: StringUInt64;
  minSyncedBlockIndex: StringUInt64;
  networkBlockIndex: StringUInt64;
  object: 'wallet_status'
  totalOrphanedPmob: StringUInt64;
  totalPendingPmob: StringUInt64;
  totalSecretedPmob: StringUInt64;
  totalSpentPmob: StringUInt64;
  totalUnspentPmob: StringUInt64;
}
