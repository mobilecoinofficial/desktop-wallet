import React from 'react';
import type { FC } from 'react';

import { makeStyles, Typography } from '@material-ui/core';

import type { Theme } from '../../theme';

export interface TransactionInfoLabelProps {
  amount?: number;
  sign: '+' | '-';
  label: string;
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    negative: {
      color: theme.palette.number.negative,
    },
    positive: {
      color: theme.palette.number.positive,
    },
    root: { position: 'relative' },
    textRight: { textAlign: 'right', width: '100%' },
  };
});

const TransactionInfoLabel: FC<TransactionInfoLabelProps> = ({
  amount,
  sign,
  label,
}: TransactionInfoLabelProps) => {
  const classes = useStyles();

  return (
    <Typography
      className={`${classes.textRight}
      ${sign === '+' ? classes.positive : classes.negative}`}
      display="inline"
    >
      {sign}
      {amount === undefined ? ' ???' : amount}
      {label}
    </Typography>
  );
};

TransactionInfoLabel.defaultProps = {
  amount: undefined,
};

export default TransactionInfoLabel;
