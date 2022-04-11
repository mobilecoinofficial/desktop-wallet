export const ADD_ACCOUNT = 'ADD_ACCOUNT';

export type AddAccountAction = {
  payload: {
    adding: boolean;
  };
  type: 'ADD_ACCOUNT';
};

export const addAccountAction = (adding: boolean): AddAccountAction => ({
  payload: {
    adding,
  },
  type: ADD_ACCOUNT,
});
