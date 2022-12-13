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
          // When a contact is created, a new subaddress is created and associated with that contact.
          // If the wallet-holder provides this assigned address to receive payment, then we can match up the
          // address with the contact and know who sent the tx.
          // For sent txs, the tx address should match the contact recipient address.
          // For received txs, the tx address should match the contact assigned address
          const contact = contacts.find((c) => {
            if (transactionLog.direction === 'tx_direction_received') {
              return c.assignedAddress === transactionLog.address;
            }
            return c.recipientAddress === transactionLog.address;
          });

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
