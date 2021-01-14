import React from 'react';
import type { FC } from 'react';

import { Box } from '@material-ui/core';

import { GOLD_DARK, GOLD_LIGHT } from '../constants/colors';

// Main diagonal
const LUCKY_ARRAY_INDEX = [1, 9, 89, 97];
const SUPER_LUCKY_ARRAY_INDEX = [0, 10, 88, 98];
const REQUIRED_LENGTH = 99;

interface ShortCodeProps {
  code: string;
}

const ShortCode: FC<ShortCodeProps> = ({ code }: ShortCodeProps) => {
  const colorPairs: string[][] = [];

  if (code.length >= REQUIRED_LENGTH) {
    LUCKY_ARRAY_INDEX.forEach((luck, i) => {
      if (colorPairs.length % 3 === 2) {
        colorPairs.push(['-', 'inherit']);
      }
      const sup: number = SUPER_LUCKY_ARRAY_INDEX[i];
      const luckyPair: string[] = [code.charAt(luck), GOLD_DARK];
      const superPair: string[] = [code.charAt(sup), GOLD_LIGHT];
      colorPairs.push(luck < sup ? luckyPair : superPair);
      colorPairs.push(luck < sup ? superPair : luckyPair);
    });
  }

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
