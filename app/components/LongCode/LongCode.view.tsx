import React from 'react';
import type { FC } from 'react';

import { Box, makeStyles } from '@material-ui/core';

import type { Theme } from '../../theme';
import { isStringNumber } from '../../utils/isStringNumber';
import { LongCodeProps } from './LongCode';

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

const LongCode: FC<LongCodeProps> = ({ code, codeClass, isTruncated }: LongCodeProps) => {
  const classes = useStyles();

  // Remove the center of the code and replace with * *
  const displayedCode = isTruncated
    ? `${code.slice(0, 48)}•••${code.slice(code.length - 48, code.length)}`
    : code;
  const colorCode = displayedCode.split('').map((char, i) => {
    let charColorClass = classes.lowercased;
    if (isStringNumber(char)) {
      charColorClass = classes.number;
    } else if (char === char.toUpperCase()) {
      charColorClass = classes.uppercased;
    }

    return (
      <Box component="span" key={[char, i].join('|')} className={charColorClass}>
        {char}
      </Box>
    );
  });

  let nextCodeLine: JSX.Element[] = [];
  const codeLines: JSX.Element[][] = [];

  colorCode.forEach((char, i) => {
    nextCodeLine.push(char);
    if (i === displayedCode.length - 1) {
      codeLines.push(nextCodeLine);
    } else if (nextCodeLine.length === 11) {
      codeLines.push(nextCodeLine);
      nextCodeLine = [];
    }
  });

  return (
    <Box data-testid="long-code-code" className={codeClass} aria-hidden="true">
      {codeLines.map((line, i) => (
        <Box
          component="span"
          key={[line, i].join('|')}
          className={i === codeLines.length - 1 ? classes.lastLine : ''}
        >
          {line}
        </Box>
      ))}
    </Box>
  );
};

LongCode.defaultProps = {
  codeClass: '',
  isTruncated: false,
};

export default LongCode;
export { LongCode };
