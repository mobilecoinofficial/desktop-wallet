import React, { useState } from 'react';
import type { FC } from 'react';

import { makeStyles } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

import { LoadingScreen } from '../../../components';
import useFullService from '../../../hooks/useFullService';
import type TransactionLog from '../../../types/TransactionLog';
import TransactionDetailsView from '../TransactionDetailsView';
import HistoryList from './HistoryList';

const HistoryView: FC = () => {
  const HISTORY = 'history';
  const DETAILS = 'details';

  const [currentTransactionLog, setCurrentTransaction] = React.useState({} as TransactionLog);
  const {
    selectedAccount,
    transactionLogs,
    txos,
    fetchAllTransactionLogsForAccount,
    fetchAllTxosForAccount,
  } = useFullService(); // ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8

  const [showing, setShowing] = useState(HISTORY);

  React.useEffect(() => {
    fetchAllTransactionLogsForAccount(selectedAccount.account.accountId);
    fetchAllTxosForAccount(selectedAccount.account.accountId);
  }, []);

  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      backgroundColor: theme.palette.background.dark,
      minHeight: '100%',
      paddingBottom: theme.spacing(3),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
  }));
  // TODO -- this error state is fine, we should reintroduce
  // React.useEffect(() => {
  //   try {
  //   } catch (err) {
  //     setShowing(ERROR);
  //   }
  // }, []);

  if (transactionLogs === null) {
    return <LoadingScreen />;
  }

  if (transactionLogs.transactionLogIds.length === 0) {
    return <span>show empty state</span>;
  }

  const buildList = (): TransactionLog[] =>
    transactionLogs.transactionLogIds
      .map((id) => transactionLogs.transactionLogMap[id])
      .sort((a, b) => {
        if (a.offsetCount < b.offsetCount) {
          return 1;
        }
        if (b.offsetCount < a.offsetCount) {
          return -1;
        }

        return 0;
      })
      .slice(0, 50);
  // debugger;
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
          onChangedComment={(t: string, c: string) => console.log(`t: ${t}, c: ${c}`)}
          transactionLog={currentTransactionLog}
          txos={txos}
        />
      );

    default:
      return <Redirect to="-" />;
  }
};

export default HistoryView;
