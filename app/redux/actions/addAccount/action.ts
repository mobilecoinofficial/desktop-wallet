import { AddAccountAction, ADD_ACCOUNT } from './type';

export const addAccountAction = (adding: boolean): AddAccountAction => ({
  payload: {
    adding,
  },
  type: ADD_ACCOUNT,
});
