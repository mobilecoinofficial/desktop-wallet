import React from 'react';
import type { FC } from 'react';

import { Box, Grid, makeStyles, Tab, Tabs } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import type { Theme } from '../../../theme';
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
  transactionLogsList,
  onTransactionClick,
}: HistoryListProps) => {
  const classes = useStyles();
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);
  const [dataToShow, setDataToShow] = React.useState(transactionLogsList);

  const { t } = useTranslation('HistoryView');

  const handleChange = (_event: React.ChangeEvent<Record<string, unknown>>, newValue: number) => {
    setSelectedTabIndex(Number(newValue));
    switch (newValue) {
      case 0:
        setDataToShow(transactionLogsList);
        break;
      case 1:
        setDataToShow(transactionLogsList.filter((x) => x.direction === 'tx_direction_sent'));
        break;
      case 2:
        setDataToShow(transactionLogsList.filter((x) => x.direction === 'tx_direction_received'));
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
        {dataToShow.map((transactionLog) => {
          return (
            <HistoryItem
              key={`historyitem_${transactionLog.transactionLogId}`}
              onClick={() => onTransactionClick(transactionLog)}
              transactionLog={transactionLog}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default HistoryList;
