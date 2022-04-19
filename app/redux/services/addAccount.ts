import { addAccountAction } from '../actions';
import { store } from '../store';

export const addAccount = async (adding: boolean): Promise<void> => {
  store.dispatch(addAccountAction(adding));
};
