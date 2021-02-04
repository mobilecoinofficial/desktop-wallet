import React from 'react';
import type { FC } from 'react';

import { Box } from '@material-ui/core';

import { GOLD_DARK, GOLD_LIGHT } from '../constants/colors';
import {
  LUCKY_ARRAY_INDEX, LUCKY_ARRAY_END_INDEX, SUPER_LUCKY_ARRAY_INDEX, SUPER_LUCKY_ARRAY_END_INDEX,
} from '../constants/indicies';

interface ShortCodeProps {
  code: string;
}

const ShortCode: FC<ShortCodeProps> = ({ code }: ShortCodeProps) => {
  const darkGoldCharIndicies = LUCKY_ARRAY_INDEX.concat(
    [code.length + LUCKY_ARRAY_END_INDEX[0], code.length + LUCKY_ARRAY_END_INDEX[1]],
  );
  const lightGoldCharIndicies = SUPER_LUCKY_ARRAY_INDEX.concat(
    [code.length + SUPER_LUCKY_ARRAY_END_INDEX[0], code.length + SUPER_LUCKY_ARRAY_END_INDEX[1]],
  );

  const colorPairs: string[][] = [];

  darkGoldCharIndicies.forEach((luck, i) => {
    if (colorPairs.length % 3 === 2) {
      colorPairs.push(['-', 'inherit']);
    }
    const sup: number = lightGoldCharIndicies[i];
    const luckyPair: string[] = [code.charAt(luck), GOLD_DARK];
    const superPair: string[] = [code.charAt(sup), GOLD_LIGHT];
    colorPairs.push(luck < sup ? luckyPair : superPair);
    colorPairs.push(luck < sup ? superPair : luckyPair);
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
