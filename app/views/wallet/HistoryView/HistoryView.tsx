import React, { useState } from 'react';
import type { FC } from 'react';

import { Redirect } from 'react-router-dom';

import getAllTransactionLogsForAccount from '../../../fullService/api/getAllTransactionLogsForAccount';
// import getTxo from '../../../fullService/api/getTxo';
import useFullService from '../../../hooks/useFullService';
import TransactionDetailsView, { TransactionDetailsViewProps } from '../TransactionDetailsView';
import HistoryList from './HistoryList';

const HistoryView: FC = () => {
  const HISTORY = 'history';
  const DETAILS = 'details';
  const LOADING = 'loading';
  const ERROR = 'error';

  const [currentData, setData] = React.useState([]);
  const [currentTransaction, setCurrentTransaction] = React.useState(
    {} as TransactionDetailsViewProps
  );
  const [showing, setShowing] = useState(LOADING);
  const { selectedAccount } = useFullService(); // ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8

  React.useEffect(() => {
    getAllTransactionLogsForAccount({ accountId: selectedAccount.account.accountId })
      .then((x) => {
        /*
        x.transactionLogIds.forEach((y) => {
          console.log('GOT TXO DATA!!', y);
          getTxo({ txoId: y })
            .then((z) => console.log('success...', z))
            .catch((z) => console.log('failure...', z));
        });
        */
        setData(x);
        setShowing(HISTORY);
        return x;
      })
      .catch(() => setShowing(ERROR));
  }, []);

  switch (showing) {
    case LOADING:
      return <span>loading GIF animation...</span>; // do we have some animation around?

    case ERROR:
      return <span>some error icon...</span>; // and do we have an error icon?

    case HISTORY:
      return (
        <HistoryList
          transactionsList={currentData}
          onTransactionClick={(trans) => {
            setCurrentTransaction(trans);
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
          amount={currentTransaction.amount}
          comment={currentTransaction.comment}
          dateTime={currentTransaction.dateTime}
          direction={currentTransaction.direction}
          id={currentTransaction.id}
          name={currentTransaction.name}
          onChangedComment={(i, v) => {
            console.log('Supposedly changing comment to ', i, v);
            currentData.find((x) => x.id === i).comment = v;
          }}
          onClickBack={() => setShowing(HISTORY)}
          sign={currentTransaction.direction === 'sent' ? '-' : '+'}
          status={currentTransaction.status}
        />
      );

    default:
      return <Redirect to="-" />;
  }
};

export default HistoryView;
