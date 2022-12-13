import { useSelector } from 'react-redux';

import { MAX_TOMBSTONE_BLOCK } from '../constants/app';
import { ReduxStoreState } from '../redux/reducers/reducers';

export const useMaxTombstone: () => string = () => {
  const { selectedAccount } = useSelector((state: ReduxStoreState) => state);
  const localBlockHeightBigInt = Number(selectedAccount.balanceStatus.localBlockHeight ?? 0);
  return `${localBlockHeightBigInt + MAX_TOMBSTONE_BLOCK - 1}`;
};
