// TODO - delete other
const getPercentSyncedNew = (
  networkBlockIndex: bigint,
  blockBlockIndex: bigint,
): number => {
  return networkBlockIndex === BigInt(0)
    ? 0
    // eslint-disable-next-line no-mixed-operators
    : (Number(blockBlockIndex * BigInt(100) / networkBlockIndex));
};

export default getPercentSyncedNew;
