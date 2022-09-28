import { useSelector } from 'react-redux';

import { ReduxStoreState } from '../redux/reducers/reducers';
import type { TransactionLog } from '../types/TransactionLog.d';

const CHANGESUBADDRESSES = ['18446744073709551614', '1'];

export const useTransactionLogs: () => TransactionLog[] = () => {
  const { contacts, transactionLogs, tokenId } = useSelector((state: ReduxStoreState) => state);

  const logs: TransactionLog[] = transactionLogs
    ? transactionLogs.transactionLogIds
        .map((id) => transactionLogs.transactionLogMap[id])
        .map((transactionLog) => {
          // If any transaction is associated to a contact, let's attach the contact object.
          // TODO - we can improve this greatly by changing how this information is stored.
          const contact = contacts.find(
            (x) =>
              x.assignedAddress === transactionLog.assignedAddressId ||
              x.recipientAddress === transactionLog.recipientAddressId
          );
          if (contact) {
            transactionLog.contact = contact; /* eslint-disable-line no-param-reassign */
          }
          return transactionLog;
        })
        .filter((log) => log.tokenId === tokenId)
        .filter((log) => !log.subaddressIndex || !CHANGESUBADDRESSES.includes(log.subaddressIndex))
        .sort((a, b) => b.finalizedBlockIndex - a.finalizedBlockIndex)
    : ([] as TransactionLog[]);

  return logs;
};
