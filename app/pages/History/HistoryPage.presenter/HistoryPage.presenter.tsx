import React, { useState, useEffect } from 'react';
import type { FC } from 'react';

import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';

import { LoadingScreen } from '../../../components';
import useFullService from '../../../hooks/useFullService';
import { fetchAllTransactionLogsForAccount, fetchAllTxosForAccount } from '../../../services';
import type { TransactionLog } from '../../../types/TransactionLog.d';
import { HistoryList } from '../HistoryList.view';
import TransactionDetailsView from '../TransactionDetails.view';

const HISTORY = 'history';
const DETAILS = 'details';

const HistoryPage: FC = () => {
  const [currentTransactionLog, setCurrentTransaction] = useState({} as TransactionLog);
  const [showing, setShowing] = useState(HISTORY);
  const { t } = useTranslation('HistoryView');

  const { addresses, contacts, selectedAccount, transactionLogs, txos } = useFullService();

  useEffect(() => {
    fetchAllTransactionLogsForAccount(selectedAccount.account.accountId);
    fetchAllTxosForAccount(selectedAccount.account.accountId);
  }, [selectedAccount?.account?.accountId]); /* eslint-disable-line react-hooks/exhaustive-deps */

  const buildList = (): TransactionLog[] => {
    if (transactionLogs) {
      return transactionLogs.transactionLogIds
        .map((id) => transactionLogs.transactionLogMap[id])
        .filter((transactionLog) => transactionLog.assignedAddressId !== addresses.addressIds[1])
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
        .sort((a, b) => b.finalizedBlockIndex - a.finalizedBlockIndex);
    }
    return [] as TransactionLog[];
  };

  // CREATE VIEW

  if (transactionLogs === null) {
    return <LoadingScreen />;
  }

  if (transactionLogs.transactionLogIds.length === 0) {
    return (
      <Box display="flex" justifyContent="center">
        <Typography>{t('emptyState')}</Typography>
      </Box>
    );
  }

  switch (showing) {
    case HISTORY:
      return (
        <HistoryList
          transactionLogsList={buildList()}
          onTransactionClick={(transactionLog) => {
            setCurrentTransaction(transactionLog);
            setShowing(DETAILS);
          }}
        />
      );

    case DETAILS:
      /*
            We should get the TXOs for the transaction
          */

      return (
        <TransactionDetailsView
          comment="this should come from metadata"
          onClickBack={() => setShowing(HISTORY)}
          onChangedComment={() => {}}
          transactionLog={currentTransactionLog}
          txos={txos}
        />
      );

    default:
      return <Redirect to="-" />;
  }
};

export default HistoryPage;
export { HistoryPage };
