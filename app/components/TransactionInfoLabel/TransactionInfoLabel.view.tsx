import React, { FC } from 'react';

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

export const TransactionInfoLabel: FC<TransactionInfoLabelProps> = ({
  valuePmob,
  sign,
  label,
}: TransactionInfoLabelProps) => {
  const classes = useStyles();

  return (
    <Typography
      className={`${classes.textRight}
    ${sign === '+' ? classes?.positive : classes?.negative}`}
      display="inline"
    >
      <MOBNumberFormat valueUnit="pMOB" value={valuePmob} prefix={sign} suffix={label} />
    </Typography>
  );
};

TransactionInfoLabel.defaultProps = {
  valuePmob: undefined,
};
