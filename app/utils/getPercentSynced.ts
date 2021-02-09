const getPercentSynced = (
  networkHighestBlockIndex: number,
  block: number,
  blockType: 'nextBlock' | 'localBlockIndex'
): number => {
  const sanitizedBlocks = blockType === 'nextBlock' ? block - 1 : block;
  return networkHighestBlockIndex === 0
    ? 0
    : parseFloat(((sanitizedBlocks / networkHighestBlockIndex) * 100).toFixed(1));
};

export default getPercentSynced;
