import React from 'react';
import type { FC } from 'react';

import { Box, makeStyles } from '@material-ui/core';

import {
  LUCKY_ARRAY_INDEX,
  LUCKY_ARRAY_END_INDEX,
  SUPER_LUCKY_ARRAY_INDEX,
  SUPER_LUCKY_ARRAY_END_INDEX,
} from '../constants/indicies';
import { Theme } from '../theme';
import isStringNumber from '../utils/isStringNumber';

export interface ShortCodeProps {
  code: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  lastLine: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  lowercased: {
    color: theme.palette.longCode?.lowercased || '#FFFFFF',
  },
  number: {
    color: theme.palette.longCode?.number || '#FFFFFF',
    fontWeight: 'bolder',
  },
  uppercased: {
    color: theme.palette.longCode?.uppercased || '#FFFFFF',
    fontWeight: 'bold',
  },
}));

const ShortCode: FC<ShortCodeProps> = ({ code }: ShortCodeProps) => {
  const classes = useStyles();

  if (!code) {
    return null;
  }

  const colorPairs: string[][] = [];
  const codeIndicies = [
    SUPER_LUCKY_ARRAY_INDEX[0],
    ...LUCKY_ARRAY_INDEX,
    SUPER_LUCKY_ARRAY_INDEX[1],
    code.length + SUPER_LUCKY_ARRAY_END_INDEX[0],
    code.length + LUCKY_ARRAY_END_INDEX[0],
    code.length + LUCKY_ARRAY_END_INDEX[1],
    code.length + SUPER_LUCKY_ARRAY_END_INDEX[1],
  ];

  codeIndicies.forEach((luck) => {
    if (colorPairs.length === 4) {
      colorPairs.push(['-', classes.lowercased]);
    }
    let charColorClass = classes.lowercased;
    if (isStringNumber(code.charAt(luck))) {
      charColorClass = classes.number;
    } else if (code.charAt(luck) === code.charAt(luck).toUpperCase()) {
      charColorClass = classes.uppercased;
    }
    const currentChar: string[] = [code.charAt(luck), charColorClass];
    colorPairs.push(currentChar);
  });

  return (
    <Box component="span" data-testid="short-code">
      {colorPairs.map((pair, i) => (
        <Box component="span" key={[pair[0], i].join('|')} className={pair[1]}>
          {pair[0]}
        </Box>
      ))}
    </Box>
  );
};

export default ShortCode;
