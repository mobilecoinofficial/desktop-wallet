// TODO - delete other
const getPercentSyncedNew = (
  networkHeight: bigint,
  blockHeight: bigint,
): number => {
  return networkHeight === BigInt(0)
    ? 0
    // eslint-disable-next-line no-mixed-operators
    : (Number(blockHeight * BigInt(100) / networkHeight));
};

export default getPercentSyncedNew;
