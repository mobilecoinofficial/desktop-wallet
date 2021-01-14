import * as React from 'react';

import { IconProps } from './IconProps';

function WalletHomeIcon(props: IconProps): JSX.Element {
  const { color } = props;

  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <g
        clipPath="url(#prefix__clip0)"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M26 10H6a2 2 0 00-2 2v14a2 2 0 002 2h20a2 2 0 002-2V12a2 2 0 00-2-2z" />
        <path d="M28 22h-3a3 3 0 010-6h3M6 10l5.29-5.29a1 1 0 011.42 0L18 10" />
        <path d="M15 7l3.36-2.52a1 1 0 011.25 0L26 10" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

WalletHomeIcon.defaultProps = {
  color: '#A6AAB4',
  height: 32,
  width: 32,
};

export default WalletHomeIcon;
