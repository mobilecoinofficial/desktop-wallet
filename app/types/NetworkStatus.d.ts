import type { StringUInt64 } from './SpecialStrings';

export interface NetworkStatus {
  localBlockHeight: StringUInt64;
  networkBlockHeight: StringUInt64;
  feePmob: StringUInt64;
}
