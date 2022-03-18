import { store } from '../../store';
import { addAccountAction } from './action';

export const addAccount = async (adding: boolean): Promise<void> => {
  store.dispatch(addAccountAction(adding));
};

export type AddAccountService = typeof addAccount;
