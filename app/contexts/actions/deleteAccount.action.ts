import { Accounts } from '../../types/Account';

export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

export type DeleteAccountActionType = {
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
): DeleteAccountActionType => ({
  payload: {
    accountId,
    accounts,
    removed,
  },
  type: DELETE_ACCOUNT,
});
