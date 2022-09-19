import React from 'react';
import type { FC } from 'react';

import { makeStyles, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { TokenIds } from '../../constants/app';
import { ReduxStoreState } from '../../redux/reducers/reducers';
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
}: TransactionInfoLabelProps) => {
  const classes = useStyles();
  const { tokenId } = useSelector((state: ReduxStoreState) => state);
  const valueUnit = tokenId === TokenIds.MOB ? 'pMOB' : 'mmUSD';

  return (
    <Typography
      className={`${classes.textRight}
    ${sign === '+' ? classes?.positive : classes?.negative}`}
      display="inline"
    >
      <MOBNumberFormat valueUnit={valueUnit} value={value} prefix={sign} suffix={label} />
    </Typography>
  );
};

TransactionInfoLabel.defaultProps = {
  value: undefined,
};

export default TransactionInfoLabel;
export { TransactionInfoLabel };
