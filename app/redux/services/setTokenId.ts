import { TokenIds } from '../../constants/app';
import { setTokenIdAction } from '../actions';
import { store } from '../store';

export const setTokenId = async (tokenId: TokenIds): Promise<void> => {
  store.dispatch(setTokenIdAction(tokenId));
};
