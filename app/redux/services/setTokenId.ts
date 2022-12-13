import { setTokenIdAction } from '../actions';
import { store } from '../store';

export const setTokenId = (tokenId: number): void => {
  store.dispatch(setTokenIdAction(tokenId));
};
