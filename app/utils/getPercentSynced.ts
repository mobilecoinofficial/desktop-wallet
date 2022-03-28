export const getPercentSynced = (networkBlockIndex: bigint, blockBlockIndex: bigint): number =>
  networkBlockIndex === BigInt(0) ? 0 : Number((blockBlockIndex * BigInt(100)) / networkBlockIndex);
