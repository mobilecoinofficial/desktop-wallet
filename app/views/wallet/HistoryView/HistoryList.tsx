import React, { Fragment } from 'react';
import type { FC } from 'react';

import { Box, Grid, makeStyles, Tab, Tabs } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import type { Theme } from '../../../theme';
import { differentYearMonth } from '../../../utils/dateFunctions';
import HistoryDateSeparator from './HistoryDateSeparator';
import HistoryItem from './HistoryItem';
import { HistoryListProps } from './HistoryList.d';

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

const HistoryList: FC<HistoryListProps> = ({
  transactionsList,
  onTransactionClick,
}: HistoryListProps) => {
  const classes = useStyles();

  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);
  const [dataToShow, setDataToShow] = React.useState(transactionsList);

  const { t } = useTranslation('HistoryView');

  const handleChange = (_event: React.ChangeEvent<Record<string, unknown>>, newValue: number) => {
    setSelectedTabIndex(Number(newValue));
    switch (newValue) {
      case 0:
        setDataToShow(transactionsList);
        break;
      case 1:
        setDataToShow(transactionsList.filter((x) => x.direction === 'sent'));
        break;
      case 2:
        setDataToShow(transactionsList.filter((x) => x.direction === 'received'));
        break;
      default:
        throw new Error('WRONG TAB!');
    }
  };

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
        {dataToShow.map((trans, ind: number) => (
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
              onClick={() => onTransactionClick(trans)}
              sign={trans.direction === 'sent' ? '-' : '+'}
              status={trans.status}
            />
          </Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default HistoryList;
