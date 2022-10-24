import React from 'react';

import { MOBIcon, EUSDIcon } from '../components/icons';
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

function renderEUSDIcon(props: IconProps): JSX.Element {
  return <EUSDIcon {...props} />;
}

export const TOKENS: Record<string, Token> = {
  EUSD: {
    icon: renderEUSDIcon,
    id: 1,
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
