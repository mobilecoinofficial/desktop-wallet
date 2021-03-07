import type { StringB58, StringHex, StringUInt64 } from './SpecialStrings';

export default interface Txo {
  accountStatusMap: {
    [accountId: string]: {
      txoStatus: 'unspent' | 'pending' | 'spent' | 'secreted' | 'orphaned';
      txoType: 'minted' | 'received'
    };
  };
  assignedSubaddress: StringB58 | null;
  eFogHint: StringHex;
  isSpentRecovered: boolean;
  keyImage: StringHex | null;
  mintedAccountId: StringHex | null;
  object: 'txo';
  offsetCount: number;
  proof: StringHex | null;
  publicKey: StringHex;
  receivedAccountId: StringHex;
  receivedBlockIndex: StringUInt64;
  spentBlockIndex: StringUInt64 | null;
  subaddressIndex: StringUInt64 | null;
  targetKey: StringHex;
  txoId: StringHex;
  valuePmob: StringUInt64;
}
