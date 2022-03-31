import * as fullServiceApi from '../fullService/api';
import { store } from '../redux/store';
import type { TxProposal } from '../types/TxProposal.d';

const submitTransaction = async (
  txProposal: TxProposal,
  includeAccountId = true
): Promise<void> => {
  const { selectedAccount } = store.getState();
  const accountId = includeAccountId ? selectedAccount.account.accountId : undefined;
  // submit transaction
  // TODO probably want to figure out what I want to save about this transaction log
  await fullServiceApi.submitTransaction({
    accountId,
    txProposal,
  });

  // TODO- right now, we're just using the selected account to refresh
  // this is obviously not ideal
  // const { balance: balanceStatus } = await fullServiceApi.getBalanceForAccount({ accountId });
  // const { walletStatus } = await fullServiceApi.getWalletStatus();

  // FIX-ME: Currently, Full-Service does not seperate pending change and pending outgoing.
  // We will need Full-Service to clearly seperate these values for us to properly show pending.
  // Until we have that, the balance may dip as long as the UTXO spent on the transaction before
  // bouncing back up.
  // Alternately, we can just make balance equal to balance + pending (for now)
  // dispatch({
  //   payload: {
  //     selectedAccount: {
  //       account: selectedAccount.account,
  //       balanceStatus,
  //     },
  //     walletStatus,
  //   },
  //   type: 'UPDATE_WALLET_STATUS',
  // });
};

export default submitTransaction;
export { submitTransaction };
export type SubmitTransactionService = typeof submitTransaction;
