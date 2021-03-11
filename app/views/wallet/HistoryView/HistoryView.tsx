import React, { Fragment, useState } from 'react';
import type { FC } from 'react';

import { Box, Grid, makeStyles, Tab, Tabs } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

/*
import getAllTransactionLogsForAccount from '../../../fullService/api/getAllTransactionLogsForAccount';
import getTxo from '../../../fullService/api/getTxo';
*/
import useFullService from '../../../hooks/useFullService';
import type { Theme } from '../../../theme';
import { differentYearMonth } from '../../../utils/dateFunctions';
import TransactionDetailsView from '../TransactionDetailsView';
import HistoryDateSeparator from './HistoryDateSeparator';
import HistoryItem from './HistoryItem';

/* FAKE DATA ***************************************************** */
type Direction = 'received' | 'sent';
type Status = 'pending' | 'received' | 'succeeded';

const fake = (
  id: string,
  dateTime: Date,
  name: string,
  amount: number,
  direction: Direction,
  status: Status,
  comment: string
) => ({
  amount,
  comment,
  dateTime,
  direction,
  id,
  name,
  status,
});

const FAKE_DATA = [
  fake(
    'lkj',
    new Date('2022-02-04T16:32:00'),
    'Peter Smithson',
    4.6478654,
    'sent',
    'pending',
    'First comment'
  ),
  fake('hjk', new Date('2021-01-30T20:49:00'), 'John Doe', 30.237, 'sent', 'succeeded', ''),
  fake('asd', new Date('2021-01-16T18:46:00'), '7fg3-6ds2', 20.0, 'received', 'received', ''),
  fake(
    'mnb',
    new Date('2020-12-22T23:54:00'),
    '8gh5-3fh5',
    5.645,
    'sent',
    'succeeded',
    'No comment here'
  ),
  fake('vbn', new Date('2020-12-18T20:17:00'), '4hd2-2ahj4', 14.0, 'received', 'received', ''),
  fake('rty', new Date('2020-11-28T16:32:00'), '3gh4-9jkl3', 1.356, 'received', 'received', ''),
  fake('oiu', new Date('2020-11-14T08:56:00'), '5hj5-lcv3', 2.824, 'sent', 'succeeded', ''),
  fake('poi', new Date('2020-11-11T19:11:00'), 'Ellaine Brisbane', 0.567, 'sent', 'succeeded', ''),
  fake('qwe', new Date('2020-10-28T16:32:00'), '0vi4-s24k', 1.356, 'received', 'received', ''),
  fake(
    'ytr',
    new Date('2020-10-14T20:56:00'),
    '9kj3-vm3f',
    2.824,
    'sent',
    'succeeded',
    'Next to last comment'
  ),
  fake(
    'rew',
    new Date('2020-10-11T19:11:00'),
    'Richard Simpson',
    0.567,
    'sent',
    'succeeded',
    'No more comments'
  ),
];

/* FAKE DATA END ************************************************* */

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      backgroundColor: theme.palette.background.dark,
      minHeight: '100%',
      paddingBottom: theme.spacing(3),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
  };
});

const HISTORY = 'history';
const DETAILS = 'details';

const HistoryView: FC = () => {
  const classes = useStyles();

  const { selectedAccount } = useFullService(); // ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8
  console.log('Account...', selectedAccount.account.accountId);

  /*
 getAllTransactionLogsForAccount({ accountId: selectedAccount.account.accountId })
    .then((x) => {
      console.log('GOT TRANSACTIONS!!', x);
      x.transactionLogIds.forEach((y) => {
        console.log('GOT TXO DATA!!', y);
        getTxo({ txoId: y })
          .then((z) => console.log('success...', z))
          .catch((z) => console.log('failure...', z));
      });
      return x;
    })
    .catch((e) => console.log('FAILURE??', e));
  */

  const [currentTransaction, setCurrentTransaction] = React.useState(null);
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);
  const [dataToShow, setDataToShow] = React.useState(FAKE_DATA);
  const [showing, setShowing] = useState(HISTORY);
  const { transactionLogs, fetchAllTransactionLogsForAccount } = useFullService();
  debugger;
  const { t } = useTranslation('HistoryView');

  const handleChange = (_event: React.ChangeEvent<Record<string, unknown>>, newValue: number) => {
    setSelectedTabIndex(Number(newValue));
    switch (newValue) {
      case 0:
        setDataToShow(FAKE_DATA);
        break;
      case 1:
        setDataToShow(FAKE_DATA.filter((x) => x.direction === 'sent'));
        break;
      case 2:
        setDataToShow(FAKE_DATA.filter((x) => x.direction === 'received'));
        break;
      default:
        throw new Error('WRONG TAB!');
    }
  };

  if (showing === HISTORY) {
    return (
      <Box className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Tabs
              variant="fullWidth"
              value={selectedTabIndex}
              indicatorColor="secondary"
              textColor="secondary"
              onChange={handleChange}
            >
              <Tab label={t('showAllTransactions')} />
              <Tab label={t('showSentTransactions')} />
              <Tab label={t('showReceivedTransactions')} />
            </Tabs>
          </Grid>
          {dataToShow.map((trans, ind) => (
            <Fragment key={`historyitem_${trans.id}`}>
              {(ind === 0 ||
                differentYearMonth(dataToShow[ind - 1].dateTime, dataToShow[ind].dateTime)) && (
                <HistoryDateSeparator dateTime={trans.dateTime} />
              )}
              <HistoryItem
                amount={trans.amount}
                comment={trans.comment}
                dateTime={trans.dateTime}
                direction={trans.direction}
                id={trans.id}
                name={trans.name}
                onClick={() => {
                  setCurrentTransaction(trans);
                  setShowing(DETAILS);
                }}
                sign={trans.direction === 'sent' ? '-' : '+'}
                status={trans.status}
              />
            </Fragment>
          ))}
        </Grid>
      </Box>
    );
  }

  return (
    <Grid item xs={12} hidden={showing !== DETAILS}>
      <TransactionDetailsView
        amount={currentTransaction.amount}
        comment={currentTransaction.comment}
        dateTime={currentTransaction.dateTime}
        direction={currentTransaction.direction}
        id={currentTransaction.id}
        name={currentTransaction.name}
        onChangedComment={(i, v) => {
          console.log('Supposedly changing comment to ', i, v);

          FAKE_DATA.find((x) => x.id === i).comment = v;
        }}
        onClickBack={() => setShowing(HISTORY)}
        sign={currentTransaction.direction === 'sent' ? '-' : '+'}
        status={currentTransaction.status}
      />
    </Grid>
  );
};

export default HistoryView;
