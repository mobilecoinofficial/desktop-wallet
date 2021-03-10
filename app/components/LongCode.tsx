import React from 'react';
import type { FC } from 'react';

import { Box, makeStyles } from '@material-ui/core';

import { GOLD_DARK, GOLD_LIGHT, WHITE } from '../constants/colors';

interface LongCodeProps {
  code: string;
  codeClass?: string;
}

const useStyles = makeStyles(() => {
  return {
    lastLine: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    root: {},
  };
});

const LongCode: FC<LongCodeProps> = ({ code, codeClass }: LongCodeProps) => {
  const classes = useStyles();
  const colorCode = code.split('').map((char, i) => {
    let charColor = WHITE;
    if (!Number.isNaN(char * 1)) {
      charColor = GOLD_LIGHT;
    } else if (char === char.toUpperCase()) {
      charColor = GOLD_DARK;
    }

    return (
      <Box
        component="span"
        key={[char, i].join('|')}
        style={{
          color: charColor,
        }}
      >
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
      {codeLines.map((line, i) => {
        return (
          <Box
            component="span"
            key={[line, i].join('|')}
            className={i === codeLines.length - 1 ? classes.lastLine : ''}
          >
            {line}
          </Box>
        );
      })}
    </Box>
  );
};

LongCode.defaultProps = {
  codeClass: '',
};

export default LongCode;
