import type { StringUInt64 } from './SpecialStrings';

export interface NetworkStatus {
  localBlockHeight: StringUInt64;
  networkBlockHeight: StringUInt64;
  feePmob: StringUInt64;
}

export interface NetworkStatusV2 {
  // The block count of MobileCoin's distributed ledger.
  networkBlockHeight: string;
  // The local block count downloaded from the ledger. The local database
  // is synced when the local_block_height reaches the network_block_height.
  localBlockHeight: string;
  // The current network fee per token_id.
  fees: {
    [tokenId: StringUInt64]: StringUInt64;
  };
  // The current block version
  blockVersion: StringUInt64;
}
