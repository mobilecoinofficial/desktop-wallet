import React from 'react';

import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOn';

import { MOBIcon } from '../components/icons';
import { IconProps } from '../components/icons/IconProps';

export type Token = {
  id: number;
  precision: number;
  icon: (props: IconProps) => JSX.Element;
  name: string;
};

function renderMobIcon(props: IconProps): JSX.Element {
  return <MOBIcon {...props} />;
}

function renderEUSDIcon({ color: _, ...rest }: IconProps): JSX.Element {
  // removing color for now. Eventually we will replace this icon with a custom icon that accepts color
  return <MonetizationOnOutlinedIcon {...rest} />;
}

export const TOKENS: Record<string, Token> = {
  EUSD: {
    // TODO for testing we are using 8192 instead of 1
    // FIX-ME BEFORE MERGING INTO DEV, CHANGE THIS BACK TO 1
    icon: renderEUSDIcon,
    id: 8192,
    name: 'eUSD',
    precision: 1_000_000,
  },
  MOB: {
    icon: renderMobIcon,
    id: 0,
    name: 'MOB',
    precision: 1_000_000_000_000,
  },
};
