import { TOKENS } from '../constants/tokens';
import { resyncAccount as resyncFS } from '../fullService/api';
import { updateStatusAction } from '../redux/actions';
import { store } from '../redux/store';
import { Account } from '../types';
import { errorToString } from '../utils/errorHandler';

const resyncAccount = async (account: Account): Promise<void> => {
  const { selectedAccount } = store.getState();

  const emptyBalance = {
    accountBlockHeight: '0',
    balancePerToken: {
      [TOKENS.MOB.id]: {
        orphanedPmob: '',
        pendingPmob: '',
        secretedPmob: '',
        spentPmob: '',
        unspentPmob: '',
        unverifiedPmob: '',
      },
      [TOKENS.EUSD.id]: {
        orphanedPmob: '',
        pendingPmob: '',
        secretedPmob: '',
        spentPmob: '',
        unspentPmob: '',
        unverifiedPmob: '',
      },
    },
    isSynced: false,
    localBlockHeight: selectedAccount.balanceStatus.localBlockHeight,
    networkBlockHeight: selectedAccount.balanceStatus.networkBlockHeight,
  };

  try {
    await resyncFS(account.accountId);
    store.dispatch(updateStatusAction(account, emptyBalance));
  } catch (err) {
    const errorMessage = errorToString(err);
    throw new Error(errorMessage);
  }
};

export default resyncAccount;
export { resyncAccount };
export type ResyncAccount = typeof resyncAccount;
