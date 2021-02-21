import type { StringB58, StringHex, StringUInt64 } from './SpecialStrings';

export default interface Txo {
  account_status_map: {
    [account_id: string]: {
      txo_status: 'unspent' | 'pending' | 'spent' | 'secreted' | 'orphaned';
      txo_type: 'minted' | 'received'
    };
  };
  assigned_subaddress: StringB58 | null;
  e_fog_hint: StringHex;
  is_spent_recovered: boolean;
  key_image: StringHex | null;
  minted_account_id: StringHex | null;
  object: 'txo';
  offset_count: number;
  proof: StringHex | null;
  public_key: StringHex;
  received_account_id: StringHex;
  received_block_height: StringUInt64;
  spent_block_height: StringUInt64 | null;
  subaddress_index: StringUInt64 | null;
  target_key: StringHex;
  txo_id: StringHex;
  value_pmob: StringUInt64;
}
