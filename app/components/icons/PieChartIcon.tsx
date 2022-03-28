import * as React from 'react';

import { IconProps } from './IconProps';

export function PieChartIcon(props: IconProps): JSX.Element {
  const { color } = props;

  return (
    <svg viewBox="0 0 22 22" fill="none" {...props}>
      <circle r={9.5} transform="matrix(-1 0 0 1 10 12)" fill="#fff" stroke={color} />
      <path d="M22 12A12 12 0 0010 0v12h12z" fill="#fff" />
      <mask id="prefix__a" fill="#fff">
        <path d="M22 10.5A10.5 10.5 0 0011.5 0v10.5H22z" />
      </mask>
      <path
        d="M22 10.5A10.5 10.5 0 0011.5 0v10.5H22z"
        fill="#fff"
        stroke={color}
        strokeWidth={2}
        mask="url(#prefix__a)"
      />
    </svg>
  );
}

PieChartIcon.defaultProps = {
  color: '#A6AAB4',
  height: 22,
  width: 22,
};
