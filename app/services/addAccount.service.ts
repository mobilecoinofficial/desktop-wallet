import { addAccountAction } from '../contexts/actions/addAccount.action';
import { store } from '../redux/store';

export const addAccount = async (adding: boolean): Promise<void> => {
  store.dispatch(addAccountAction(adding));
};

export type AddAccountService = typeof addAccount;
