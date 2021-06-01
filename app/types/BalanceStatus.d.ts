import type { StringUInt64 } from './SpecialStrings';

export interface BalanceStatus {
  accountBlockIndex?: StringUInt64;
  accountBlockCount?: StringUInt64;
  isSynced: boolean;
  localBlockIndex?: StringUInt64;
  localBlockCount?: StringUInt64;
  networkBlockIndex?: StringUInt64;
  networkBlockCount?: StringUInt64;
  object?: 'balance';
  orphanedPmob: StringUInt64;
  pendingPmob: StringUInt64;
  secretedPmob: StringUInt64;
  spentPmob: StringUInt64;
  unspentPmob: StringUInt64;
}
