// TODO - change to just Account; delete the other Account type
import type { StringB58, StringHex, StringUInt64 } from './SpecialStrings';

export default interface FullServiceAccount {
  account_height: StringUInt64;
  account_id: StringHex;
  available_pmob: StringUInt64;
  is_synced: boolean;
  local_height: StringUInt64;
  main_address: StringB58;
  name: string | null;
  network_height: StringUInt64;
  next_subaddress_index: StringUInt64;
  object: 'account';
  offset_count: number;
  pending_pmob: StringUInt64;
  recovery_mode: boolean;
}
