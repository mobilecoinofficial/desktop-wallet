import * as React from 'react';

import { IconProps } from './IconProps';

export function HouseIcon(props: IconProps): JSX.Element {
  const { color } = props;

  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M3 8.5V22a1 1 0 001 1h16a1 1 0 001-1V8.5" stroke={color} />
      <path d="M23 10L12.811 1.267a.5.5 0 00-.634-.015L1 10" stroke={color} strokeLinecap="round" />
      <path
        d="M17.5 3.5h2v3.432l-2-1.666V3.5zM9 14.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V23H9v-8.5z"
        stroke={color}
      />
    </svg>
  );
}

HouseIcon.defaultProps = {
  color: '#613EEA',
  height: 24,
  width: 24,
};
