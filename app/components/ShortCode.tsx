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

export interface ShortCodeProps {
  code: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  lowercased: {
    color: theme.palette.longCode.lowercased,
  },
  number: {
    color: theme.palette.longCode.number,
  },
  uppercased: {
    color: theme.palette.longCode.uppercased,
  },
}));

const ShortCode: FC<ShortCodeProps> = ({ code }: ShortCodeProps) => {
  const classes = useStyles();

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
    if (!Number.isNaN(code.charAt(luck) * 1)) {
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
