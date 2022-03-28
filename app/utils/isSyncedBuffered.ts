const BUFFER = 3;

export const isSyncedBuffered = (networkBlockIndex: bigint, blockBlockIndex: bigint): boolean => {
  if (networkBlockIndex === BigInt(0)) {
    return false;
  }
  return networkBlockIndex - blockBlockIndex < BigInt(BUFFER);
};
