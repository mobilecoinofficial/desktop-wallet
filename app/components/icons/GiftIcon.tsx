import * as React from 'react';

import { IconProps } from './IconProps';

function GiftIcon(props: IconProps): JSX.Element {
  const { color } = props;

  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M28 7H4v18h24V7zM4 16h24"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.12 13.71c-.78.78-3.46 2.19-4.24 1.41-.78-.78.63-3.46 1.41-4.24a2.001 2.001 0 012.83 2.83v0zM7.24 13.71c.78.78 3.46 2.19 4.24 1.41.78-.78-.63-3.46-1.42-4.24a2 2 0 00-2.82 2.83zM12 25l.01-9M9 19a3 3 0 016 0"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

GiftIcon.defaultProps = {
  color: '#A6AAB4',
  height: 32,
  width: 32,
};

export default GiftIcon;
