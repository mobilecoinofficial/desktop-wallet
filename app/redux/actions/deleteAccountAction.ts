import { Accounts } from '../../types';

export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

export type DeleteAccountAction = {
  payload: {
    accountId: string;
    accounts: Accounts;
    removed: boolean;
  };
  type: 'DELETE_ACCOUNT';
};

export const deleteAccountAction = (
  accountId: string,
  accounts: Accounts,
  removed: boolean
): DeleteAccountAction => ({
  payload: {
    accountId,
    accounts,
    removed,
  },
  type: DELETE_ACCOUNT,
});
