import { store } from '../contexts/FullServiceContext';
import { addAccountAction } from '../contexts/actions/addAccount.action';

const addAccount = async (): Promise<void> => {
  store.dispatch(addAccountAction());
};

export default addAccount;
export { addAccount };
export type AddAccountService = typeof addAccount;
