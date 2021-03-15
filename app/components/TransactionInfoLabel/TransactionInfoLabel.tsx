import React from 'react';
import type { FC } from 'react';

import { makeStyles, Typography } from '@material-ui/core';

import type { Theme } from '../../theme';
import MOBNumberFormat from '../MOBNumberFormat';
import type { TransactionInfoLabelProps } from './TransactionInfoLabel.d';

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
  valuePmob,
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
      <MOBNumberFormat valueUnit="pMOB" value={valuePmob} prefix={sign} suffix={label} />
    </Typography>
  );
};

TransactionInfoLabel.defaultProps = {
  valuePmob: undefined,
};

export default TransactionInfoLabel;
