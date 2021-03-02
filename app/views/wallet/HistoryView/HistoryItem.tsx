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

import TransactionInfoLabel from '../../../components/TransactionInfoLabel';
import type { Theme } from '../../../theme';

export interface HistoryItemProps {
  amount: number;
  comment: string;
  dateTime: Date;
  direction: string;
  name: string;
  onClick: any;
  sign: '+' | '-';
  status: string;
}

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

const HistoryItem: FC<HistoryItemProps> = ({
  amount,
  dateTime,
  direction,
  name,
  onClick,
  sign,
}: HistoryItemProps) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card className={classes.card}>
        <CardActionArea onClick={onClick}>
          <CardContent>
            <Box className={classes.internal}>
              <Typography className={classes.textLeft} display="inline" color="textPrimary">
                <b>{name}</b>
              </Typography>
              <TransactionInfoLabel amount={amount} sign={sign} label="&nbsp;MOB" />
            </Box>

            <Box className={classes.internal}>
              <Typography className={`${classes.textLeft} ${classes.textSmall}`} display="inline">
                {dateTime.toLocaleDateString()}&nbsp;{dateTime.toLocaleTimeString()}
              </Typography>
              <Typography className={`${classes.textRight} ${classes.textSmall}`} display="inline">
                {direction.toLocaleUpperCase()}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default HistoryItem;
