import React from 'react';
import type { FC } from 'react';

import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardHeader,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { ShortCode } from '../../../components/ShortCode';
import { TransactionInfoLabel } from '../../../components/TransactionInfoLabel';
import MOBIcon from '../../../components/icons/MOBIcon';
import { TokenIds } from '../../../constants/app';
import type { Theme } from '../../../theme';
import type { HistoryItemProps } from './HistoryItem.d';

const useStyles = makeStyles((theme: Theme) => ({
  action: { margin: 'unset' },
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
    color: theme.palette.number?.negative || '#FF0000',
    fontWeight: 'bold',
  },
  root: {},
  textSmallRight: { fontSize: 'small', textAlign: 'right' },
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
    value,
    tokenId,
  } = transactionLog;

  // debugger;

  // TODO - this should be a helper somewhere
  const sign = direction === 'tx_direction_sent' ? '-' : '+';
  const directionText =
    direction === 'tx_direction_sent' ? t('historyItemSent') : t('historyItemReceived');
  const tokenName = tokenId === TokenIds.MOB ? ' MOB' : ' mUSD';
  let aliasOrAddress;

  // If there's a contact Object...
  if (contact) {
    aliasOrAddress = (
      <Typography display="inline" color="textPrimary">
        {contact.alias}
      </Typography>
    );
    // Has a known address
  } else if (assignedAddressId || recipientAddressId) {
    aliasOrAddress = (
      <Typography display="inline" color="textPrimary">
        <ShortCode code={assignedAddressId || recipientAddressId || ''} />
      </Typography>
    );
    // Else it is an orphan
  } else if (direction === 'tx_direction_received') {
    aliasOrAddress = (
      <Typography className={classes.negative} display="inline">
        {t('orphaned')}
      </Typography>
    );
    // Else the alias is not known (on purpose)
  } else {
    aliasOrAddress = (
      <Typography display="inline" color="textPrimary">
        ---
      </Typography>
    );
  }

  const avatar = contact ? contact.abbreviation.toUpperCase() : <MOBIcon color="white" />;

  return (
    <Grid item xs={12}>
      <Card className={classes.card}>
        <CardActionArea onClick={onClick}>
          <CardHeader
            avatar={
              <Avatar style={{ backgroundColor: contact?.color || '#757575' }}>{avatar}</Avatar>
            }
            title={aliasOrAddress}
            subheader={`${t('finalizedBlockHeight')}${finalizedBlockIndex}`}
            action={
              <Box display="flex" flexDirection="column" justifyContent="space-between">
                <TransactionInfoLabel value={value} sign={sign} label={tokenName} />
                <Typography className={classes.textSmallRight} display="inline">
                  {directionText}
                </Typography>
              </Box>
            }
            classes={{
              action: classes.action,
            }}
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default HistoryItem;
export { HistoryItem };
