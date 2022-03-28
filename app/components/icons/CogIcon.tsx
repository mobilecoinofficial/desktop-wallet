import * as React from 'react';

import { IconProps } from './IconProps';

export function CogIcon(props: IconProps): JSX.Element {
  const { color } = props;

  return (
    <svg viewBox="0 0 28 28" fill="none" {...props}>
      <path
        d="M27 18v-4h-3.26a8.278 8.278 0 00-.85-2.06L24.83 10 22 7.17l-1.94 1.94A8.28 8.28 0 0018 8.26V5h-4v3.26a8.28 8.28 0 00-2.06.85L10 7.17 7.17 10l1.94 1.94A8.28 8.28 0 008.26 14H5v4h3.26a8.28 8.28 0 00.85 2.06L7.17 22 10 24.83l1.94-1.94c.645.375 1.338.66 2.06.85V27h4v-3.26a8.278 8.278 0 002.06-.85L22 24.83 24.83 22l-1.94-1.94c.375-.645.66-1.338.85-2.06H27z"
        stroke={color}
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 19a3 3 0 100-6 3 3 0 000 6z"
        stroke={color}
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

CogIcon.defaultProps = {
  color: '#ADB0BB',
  height: 24,
  width: 24,
};
