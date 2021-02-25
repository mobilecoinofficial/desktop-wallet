// TODO - change to just Account; delete the other Account type
import type { StringUInt64 } from './SpecialStrings';

export default interface WalletStatus {
  isSyncedAll: boolean;
  localHeight: StringUInt64;
  networkHeight: StringUInt64;
  totalAvailablePmob: StringUInt64;
  totalPendingPmob: StringUInt64;
}
