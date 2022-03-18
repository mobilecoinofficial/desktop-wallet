import { Accounts } from '../../../types';

export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

export type DeleteAccountAction = {
  payload: {
    accountId: string;
    accounts: Accounts;
    removed: boolean;
  };
  type: 'DELETE_ACCOUNT';
};
