export const SET_TOKEN_ID = 'SET_TOKEN_ID';

export type SetTokenIdAction = {
  type: 'SET_TOKEN_ID';
  payload: {
    tokenId: number;
  };
};

export const setTokenIdAction = (tokenId: number): SetTokenIdAction => ({
  payload: {
    tokenId,
  },
  type: SET_TOKEN_ID,
});
