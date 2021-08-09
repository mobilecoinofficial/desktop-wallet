export const ADD_ACCOUNT = 'ADD_ACCOUNT';

export type AddAccountActionType = {
  payload: {
    adding: boolean;
  };
  type: 'ADD_ACCOUNT';
};

export const addAccountAction = (adding: boolean): AddAccountActionType => ({
  payload: {
    adding,
  },
  type: ADD_ACCOUNT,
});
