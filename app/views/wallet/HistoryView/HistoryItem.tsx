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
  negative: {
    color: theme.palette.number.negative,
    fontWeight: 'bold',
  },
  root: {},
  textLeft: { textAlign: 'left', width: '100%' },
  textRight: { textAlign: 'right', width: '100%' },
  textSmall: { fontSize: 'small' },
}));

const HistoryItem: FC<HistoryItemProps> = ({ onClick, transactionLog }: HistoryItemProps) => {
  const classes = useStyles();
  const { t } = useTranslation('HistoryView');

  const {
    assignedAddressId,
    contact,
    direction,
    finalizedBlockIndex,
    recipientAddressId,
    // status, TODO - Add status state for "pending" or errors
    valuePmob,
  } = transactionLog;

  // debugger;

  // TODO - this should be a helper somewhere
  const sign = direction === 'tx_direction_sent' ? '-' : '+';
  const directionText =
    direction === 'tx_direction_sent' ? t('historyItemSent') : t('historyItemReceived');

  let aliasOrAddress;

  // If there's a contact Object...
  if (contact) {
    aliasOrAddress = (
      <Typography className={classes.textLeft} display="inline" color="textPrimary">
        {contact.alias}
      </Typography>
    );
    // Has a known address
  } else if (assignedAddressId || recipientAddressId) {
    aliasOrAddress = (
      <Typography className={classes.textLeft} display="inline" color="textPrimary">
        <ShortCode code={assignedAddressId || recipientAddressId || ''} />
      </Typography>
    );
    // Else it is an orphan
  } else if (direction === 'tx_direction_received') {
    aliasOrAddress = (
      <Typography className={`${classes.textLeft} ${classes.negative}`} display="inline">
        {t('orphaned')}
      </Typography>
    );
    // Else the alias is unknown (on purpose)
  } else {
    aliasOrAddress = (
      <Typography className={classes.textLeft} display="inline" color="textPrimary">
        ---
      </Typography>
    );
  }

  return (
    <Grid item xs={12}>
      <Card className={classes.card}>
        <CardActionArea onClick={onClick}>
          <CardContent>
            <Box className={classes.internal}>
              {aliasOrAddress}
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
