import { store } from '../contexts/FullServiceContext';
import { addAccountAction } from '../contexts/actions/addAccount.action';

const addAccount = async (adding: boolean): Promise<void> => {
  store.dispatch(addAccountAction(adding));
};

export default addAccount;
export { addAccount };
export type AddAccountService = typeof addAccount;
