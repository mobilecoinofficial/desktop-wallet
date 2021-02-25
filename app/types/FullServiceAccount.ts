// TODO - change to just Account; delete the other Account type
import type { StringB58, StringHex, StringUInt64 } from './SpecialStrings';

export default interface FullServiceAccount {
  accountHeight: StringUInt64;
  accountId: StringHex;
  availablePmob: StringUInt64;
  isSynced: boolean;
  localHeight: StringUInt64;
  mainAddress: StringB58;
  name: string | null;
  networkHeight: StringUInt64;
  nextSubaddressIndex: StringUInt64;
  offsetCount: number;
  pendingPmob: StringUInt64;
  recoveryMode: boolean;
}
