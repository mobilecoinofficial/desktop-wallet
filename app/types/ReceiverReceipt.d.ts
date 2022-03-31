import { StringUInt64 } from './SpecialStrings';

export interface ReceiverReceipt {
  public_key: string;
  confirmation: string;
  tombstone_block: StringUInt64;
  amount: StringUInt64;
}

export type ReceiverReceipts = [ReceiverReceipt];
