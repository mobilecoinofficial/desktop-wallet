export const ADD_ACCOUNT = 'ADD_ACCOUNT';

export type AddAccountActionType = {
  type: 'ADD_ACCOUNT';
};

export const addAccountAction = (): AddAccountActionType => ({
  type: ADD_ACCOUNT,
});
