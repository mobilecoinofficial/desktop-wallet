import React from 'react';
import type { FC } from 'react';

import { Box } from '@material-ui/core';

import { GOLD_DARK, GOLD_LIGHT, WHITE } from '../constants/colors';

interface LongCodeProps {
  code: string;
  codeClass?: string;
  lastLineClass?: string;
}

const LongCode: FC<LongCodeProps> = ({ code, codeClass, lastLineClass }: LongCodeProps) => {
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
            className={i === codeLines.length - 1 ? lastLineClass : ''}
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
  lastLineClass: '',
};

export default LongCode;
