import { useSelector } from 'react-redux';

import { TOKENS, Token } from '../constants/tokens';
import { ReduxStoreState } from '../redux/reducers/reducers';

export const useCurrentToken: (tokenId?: number) => Token = (tokenId) => {
  const { tokenId: stateTokenId } = useSelector((state: ReduxStoreState) => state);
  const currentToken = Object.values(TOKENS).find(
    (token) => token.id === (tokenId ?? stateTokenId)
  );
  if (!currentToken) {
    throw new Error('no current token found');
  }
  return currentToken;
};
