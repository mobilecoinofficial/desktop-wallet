import { addAccountAction } from '../contexts/actions/addAccount.action';
import { store } from '../redux/store';

const addAccount = async (adding: boolean): Promise<void> => {
  store.dispatch(addAccountAction(adding));
};

export default addAccount;
export { addAccount };
export type AddAccountService = typeof addAccount;
