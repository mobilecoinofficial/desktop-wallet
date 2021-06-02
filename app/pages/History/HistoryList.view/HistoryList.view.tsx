import React, { ChangeEvent, useState } from 'react';
import type { FC } from 'react';

import { Box, Button, Container, Grid, makeStyles, Tab, Tabs } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { HISTORY_PAGE_SIZE } from '../../../constants/app';
import type { Theme } from '../../../theme';
import { HistoryItem } from '../HistoryItem.view';
import type { HistoryListProps } from './HistoryList.d';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    padding: theme.spacing(3, 5),
  },
}));

const HistoryList: FC<HistoryListProps> = ({
  transactionLogsList,
  onTransactionClick,
}: HistoryListProps) => {
  const classes = useStyles();
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [dataToShow, setDataToShow] = useState(transactionLogsList);
  const [firstToShow, setFirstToShow] = useState(0);

  const pageBack = () => setFirstToShow(firstToShow - HISTORY_PAGE_SIZE);
  const pageForward = () => setFirstToShow(firstToShow + HISTORY_PAGE_SIZE);

  const { t } = useTranslation('HistoryView');

  const handleChange = (_event: ChangeEvent<HTMLElement>, newValue: number) => {
    setSelectedTabIndex(Number(newValue));
    setFirstToShow(0);
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
    <Box>
      <Tabs
        variant="fullWidth"
        value={selectedTabIndex}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <Tab label={t('showAllTransactions')} id="show-all" />
        <Tab label={t('showSentTransactions')} id="show-sent" />
        <Tab label={t('showReceivedTransactions')} id="show-received" />
      </Tabs>
      <Container className={classes.root} maxWidth="lg">
        <Grid container spacing={3}>
          {dataToShow
            .filter((_v, i) => firstToShow <= i && i < firstToShow + HISTORY_PAGE_SIZE)
            .map((transactionLog) => (
              <HistoryItem
                key={`historyitem_${transactionLog.transactionLogId}`}
                onClick={() => onTransactionClick(transactionLog)}
                transactionLog={transactionLog}
              />
            ))}
          <Box width="100%" display="flex" justifyContent="flex-end" m={2}>
            {firstToShow > 0 ? (
              <Button
                onClick={pageBack}
                style={{ margin: '5px' }}
                color="primary"
                variant="contained"
              >
                &lt;
              </Button>
            ) : null}
            {firstToShow + HISTORY_PAGE_SIZE < dataToShow.length ? (
              <Button
                onClick={pageForward}
                style={{ margin: '5px' }}
                color="primary"
                variant="contained"
              >
                &gt;
              </Button>
            ) : null}
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default HistoryList;
export { HistoryList };
