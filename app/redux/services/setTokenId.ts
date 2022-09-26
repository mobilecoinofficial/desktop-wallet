import { setTokenIdAction } from '../actions';
import { store } from '../store';

export const setTokenId = async (tokenId: number): Promise<void> => {
  store.dispatch(setTokenIdAction(tokenId));
};
