// TODO - change to just Account; delete the other Account type
import type { StringUInt64 } from './SpecialStrings';

export default interface BalanceStatus {
  local_block_count: StringUInt64;
  orphaned: StringUInt64;
  pending: StringUInt64;
  secreted: StringUInt64;
  spent: StringUInt64;
  synced_blocks: StringUInt64;
  unspent: StringUInt64;
}
