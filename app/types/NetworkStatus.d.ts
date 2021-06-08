import type { StringUInt64 } from './SpecialStrings';

export interface NetworkStatus {
  localBlockIndex: StringUInt64;
  networkBlockIndex: StringUInt64;
  feePmob: StringUInt64;
}
