// TODO - delete other
const getPercentSyncedNew = (
  networkHeight: bigint,
  accountHeight: bigint,
): number => {
  return networkHeight === BigInt(0)
    ? 0
    // eslint-disable-next-line no-mixed-operators
    : (Number(accountHeight * BigInt(100) / networkHeight) / 100);
};

export default getPercentSyncedNew;
