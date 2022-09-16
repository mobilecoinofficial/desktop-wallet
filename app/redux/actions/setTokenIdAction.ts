import { TokenIds } from '../../constants/app';

export const SET_TOKEN_ID = 'SET_TOKEN_ID';

export type SetTokenIdAction = {
  type: 'SET_TOKEN_ID';
  payload: {
    tokenId: TokenIds;
  };
};

export const setTokenIdAction = (tokenId: TokenIds): SetTokenIdAction => ({
  payload: {
    tokenId,
  },
  type: SET_TOKEN_ID,
});
