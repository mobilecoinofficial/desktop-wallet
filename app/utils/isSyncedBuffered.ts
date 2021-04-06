const BUFFER = 3;

const isSyncedBuffered = (
  networkBlockIndex: bigint,
  blockBlockIndex: bigint,
): boolean => {
  if (networkBlockIndex === BigInt(0)) {
    return false;
  }
  return networkBlockIndex - blockBlockIndex < BigInt(BUFFER);
};

export default isSyncedBuffered;
