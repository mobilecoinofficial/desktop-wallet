import type { StringB58, StringHex, StringUInt64 } from './SpecialStrings';

export default interface TransactionLog {
  account_id: StringHex;
  assigned_address_id: StringB58;
  change_txo_ids: StringHex[];
  comment: string;
  direction: 'received' | 'sent';
  failure_code: number | null;
  failure_message: string | null;
  fee_pmob: StringUInt64 | null;
  finalized_block_height: StringUInt64 | null;
  input_txo_ids: StringHex[];
  is_sent_recovered: boolean | null;
  object: 'transaction_log';
  offset_count: number;
  output_txo_ids: StringHex[];
  recipient_address_id: StringB58 | null;
  sent_time: string | null; // FIX-ME: Confirm type
  status: 'built' | 'pending' | 'received' | 'succeded' | 'failed';
  submitted_block_height: StringUInt64 | null;
  transaction_log_id: StringHex;
  value_pmob: StringUInt64;
}
