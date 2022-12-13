import React from 'react';
import type { FC } from 'react';

import { makeStyles, Typography } from '@material-ui/core';

import type { Theme } from '../../theme';
import { MOBNumberFormat } from '../MOBNumberFormat';
import type { TransactionInfoLabelProps } from './TransactionInfoLabel.d';

const useStyles = makeStyles((theme: Theme) => ({
  negative: {
    color: theme.palette.number?.negative || '#FF0000',
  },
  positive: {
    color: theme.palette.number?.positive || '#00FF00',
  },
  root: { position: 'relative' },
  textRight: { textAlign: 'right', width: '100%' },
}));

const TransactionInfoLabel: FC<TransactionInfoLabelProps> = ({
  value,
  sign,
  label,
  token,
}: TransactionInfoLabelProps) => {
  const classes = useStyles();

  return (
    <Typography
      className={`${classes.textRight}
    ${sign === '+' ? classes?.positive : classes?.negative}`}
      display="inline"
    >
      <MOBNumberFormat token={token} value={value} prefix={sign} suffix={label} />
    </Typography>
  );
};

TransactionInfoLabel.defaultProps = {
  value: undefined,
};

export default TransactionInfoLabel;
export { TransactionInfoLabel };
