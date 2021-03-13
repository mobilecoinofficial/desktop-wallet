import React from 'react';
import type { FC } from 'react';

import { Box, makeStyles } from '@material-ui/core';

import type { Theme } from '../theme';

interface LongCodeProps {
  code: string;
  codeClass?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  lastLine: {
    display: 'flex',
    justifyContent: 'space-between',
  },
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

const LongCode: FC<LongCodeProps> = ({ code, codeClass }: LongCodeProps) => {
  const classes = useStyles();

  const colorCode = code.split('').map((char, i) => {
    let charColorClass = classes.lowercased;
    if (!Number.isNaN(char * 1)) {
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
    if (i === code.length - 1) {
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
};

export default LongCode;
