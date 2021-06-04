import { store } from '../contexts/FullServiceContext';
import { fetchAllTransactionLogsForAccountAction } from '../contexts/actions/fetchAllTransactionLogsForAccount.action';
import * as fullServiceApi from '../fullService/api';
import type { StringHex } from '../types/SpecialStrings';
import type { TransactionAbbreviation } from '../types/TransactionLog';

const fetchAllTransactionLogsForAccount = async (accountId: StringHex): Promise<void> => {
  try {
    const transactionLogs = await fullServiceApi.getAllTransactionLogsForAccount({ accountId });

    transactionLogs.transactionLogIds.forEach((v: StringHex) => {
      const w = transactionLogs.transactionLogMap[v];
      w.changeTxoIds = w.changeTxos.map((x: TransactionAbbreviation) => x.txoIdHex);
      w.inputTxoIds = w.inputTxos.map((x: TransactionAbbreviation) => x.txoIdHex);
      w.outputTxoIds = w.outputTxos.map((x: TransactionAbbreviation) => x.txoIdHex);

      w.recipientAddressId = w.outputTxos.length > 0 ? w.outputTxos[0].recipientAddressId : null;
    });

    // TODO add logic to only trigger if different object
    store.dispatch(fetchAllTransactionLogsForAccountAction(transactionLogs));
  } catch (err) {
    throw new Error(err.message);
  }
};

export default fetchAllTransactionLogsForAccount;
export { fetchAllTransactionLogsForAccount };
export type FetchAllTransactionLogsForAccountService = typeof fetchAllTransactionLogsForAccount;
