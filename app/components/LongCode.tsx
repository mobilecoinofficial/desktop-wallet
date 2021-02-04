import React from 'react';
import type { FC } from 'react';

import { Box } from '@material-ui/core';

import { GOLD_DARK, GOLD_LIGHT } from '../constants/colors';

const LUCKY_ARRAY_INDEX = [1, 2];
const SUPER_LUCKY_ARRAY_INDEX = [0, 3];

const LUCKY_ARRAY_END_INDEX = [-3, -2];
const SUPER_LUCKY_ARRAY_END_INDEX = [-4, -1];

interface LongCodeProps {
  code: string;
  codeClass?: string;
  lastLine?: string;
}

const LongCode: FC<LongCodeProps> = ({ code, codeClass, lastLine }: LongCodeProps) => {
  const darkGoldCharIndicies = LUCKY_ARRAY_INDEX.concat(
    [code.length + LUCKY_ARRAY_END_INDEX[0], code.length + LUCKY_ARRAY_END_INDEX[1]],
  );
  const lightGoldCharIndicies = SUPER_LUCKY_ARRAY_INDEX.concat(
    [code.length + SUPER_LUCKY_ARRAY_END_INDEX[0], code.length + SUPER_LUCKY_ARRAY_END_INDEX[1]],
  );

  const colorCode = code.split('').map((char, i) => {
    let charColor = 'inherit';
    if (darkGoldCharIndicies.includes(i)) {
      charColor = GOLD_DARK;
    } else if (lightGoldCharIndicies.includes(i)) {
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
        return (
          <Box
            component="span"
            key={[line, i].join('|')}
            className={(i === codeLines.length - 1) ? lastLine : ''}
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
  lastLine: '',
};

export default LongCode;
