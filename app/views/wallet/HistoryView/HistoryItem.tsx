import React from 'react';
import type { FC } from 'react';

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import ShortCode from '../../../components/ShortCode';
import TransactionInfoLabel from '../../../components/TransactionInfoLabel/TransactionInfoLabel';
import type { Theme } from '../../../theme';
import { HistoryItemProps } from './HistoryItem.d';

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'row',
  },
  internal: {
    display: 'flex',
    flexDirection: 'row',
  },
  root: {},
  textLeft: { textAlign: 'left', width: '100%' },
  textRight: { textAlign: 'right', width: '100%' },
  textSmall: { fontSize: 'small' },
}));

const HistoryItem: FC<HistoryItemProps> = ({ onClick, transactionLog }: HistoryItemProps) => {
  const classes = useStyles();
  const { t } = useTranslation('HistoryView');

  const { assignedAddressId, direction, finalizedBlockIndex, valuePmob } = transactionLog;

  // TODO - this should be a helper somewhere
  const sign = direction === 'tx_direction_sent' ? '-' : '+';
  const directionText =
    direction === 'tx_direction_sent' ? t('historyItemSent') : t('historyItemReceived');
  return (
    <Grid item xs={12}>
      <Card className={classes.card}>
        <CardActionArea onClick={onClick}>
          <CardContent>
            <Box className={classes.internal}>
              <Typography className={classes.textLeft} display="inline" color="textPrimary">
                {assignedAddressId ? <ShortCode code={assignedAddressId} /> : '???'}
              </Typography>
              <TransactionInfoLabel valuePmob={valuePmob} sign={sign} label="&nbsp;MOB" />
            </Box>

            <Box className={classes.internal}>
              <Typography className={`${classes.textLeft} ${classes.textSmall}`} display="inline">
                {`${t('finalizedBlockHeight')}${finalizedBlockIndex}`}
              </Typography>
              <Typography className={`${classes.textRight} ${classes.textSmall}`} display="inline">
                {directionText}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default HistoryItem;
