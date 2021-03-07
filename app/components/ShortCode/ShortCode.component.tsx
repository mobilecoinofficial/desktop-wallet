import React from 'react';
import type { FC } from 'react';

import { Box } from '@material-ui/core';

import { GOLD_DARK, GOLD_LIGHT, WHITE } from '../../constants/colors';
import {
  LUCKY_ARRAY_INDEX,
  LUCKY_ARRAY_END_INDEX,
  SUPER_LUCKY_ARRAY_INDEX,
  SUPER_LUCKY_ARRAY_END_INDEX,
} from '../../constants/indicies';

interface ShortCodeProps {
  code: string;
}

const ShortCode: FC<ShortCodeProps> = ({ code }: ShortCodeProps) => {
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
      colorPairs.push(['-', WHITE]);
    }
    let charColor = WHITE;
    if (!Number.isNaN(code.charAt(luck) * 1)) {
      charColor = GOLD_LIGHT;
    } else if (code.charAt(luck) === code.charAt(luck).toUpperCase()) {
      charColor = GOLD_DARK;
    }
    const currentChar: string[] = [code.charAt(luck), charColor];
    colorPairs.push(currentChar);
  });

  return (
    <Box component="span" data-testid="short-code">
      {colorPairs.map((pair, i) => {
        return (
          <Box
            component="span"
            key={[pair[0], i].join('|')}
            style={{
              color: pair[1],
            }}
          >
            {pair[0]}
          </Box>
        );
      })}
    </Box>
  );
};

export default ShortCode;
