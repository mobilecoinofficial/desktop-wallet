import React from 'react';
import type { FC } from 'react';

import { Box } from '@material-ui/core';

import { GOLD_DARK, GOLD_LIGHT } from '../constants/colors';

const LUCKY_ARRAY_INDEX = [1, 2, 104, 105];
const SUPER_LUCKY_ARRAY_INDEX = [0, 3, 103, 106];

interface LongCodeProps {
  code: string;
  codeClass?: string;
}

const LongCode: FC<LongCodeProps> = ({ code, codeClass }: LongCodeProps) => {
  const colorCode = code.split('').map((char, i) => {
    let charColor = 'inherit';
    if (LUCKY_ARRAY_INDEX.includes(i)) {
      charColor = GOLD_DARK;
    } else if (SUPER_LUCKY_ARRAY_INDEX.includes(i)) {
      charColor = GOLD_LIGHT;
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
        return (i === codeLines.length - 1) ? (
          <Box
            component="span"
            key={[line, i].join('|')}
            style={{
              alignSelf: 'flex-end',
            }}
          >
            {line}
          </Box>
        )
          : (
            <Box component="span" key={[line, i].join('|')}>
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
