import { Accounts } from '../../../types';
import { DeleteAccountAction, DELETE_ACCOUNT } from './type';

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
