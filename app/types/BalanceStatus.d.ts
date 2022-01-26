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
