// TODO - change to just Account; delete the other Account type
import type { StringUInt64 } from './SpecialStrings';

// TODO fixup
export default interface BalanceStatus {
  localBlockCount: StringUInt64;
  orphaned: StringUInt64;
  pending: StringUInt64;
  secreted: StringUInt64;
  spent: StringUInt64;
  syncedBlocks: StringUInt64;
  unspent: StringUInt64;
}
