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

function renderUSDMIcon({ color: _, ...rest }: IconProps): JSX.Element {
  // removing color for now. Eventually we will replace this icon with a custom icon that accepts color
  return <MonetizationOnOutlinedIcon {...rest} />;
}

export const TOKENS: Record<string, Token> = {
  MOB: {
    id: 0,
    precision: 1_000_000_000_000,
    icon: renderMobIcon,
    name: 'MOB',
  },
  USDM: {
    // TODO for testing we are using 8192 instead of 1
    // FIX-ME BEFORE MERGING INTO DEV, CHANGE THIS BACK TO 1
    // USDM = 1,
    id: 8192,
    precision: 1_000_000,
    icon: renderUSDMIcon,
    name: 'USDM',
  },
};
