import { useSelector } from 'react-redux';

import { TOKENS, Token } from '../constants/tokens';
import { ReduxStoreState } from '../redux/reducers/reducers';

export const useCurrentToken: () => Token = () => {
  const { tokenId } = useSelector((state: ReduxStoreState) => state);
  const currentToken = Object.values(TOKENS).find((token) => token.id === tokenId);
  if (!currentToken) {
    throw new Error('no current token found');
  }
  return currentToken;
};
