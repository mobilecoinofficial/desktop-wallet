import * as React from 'react';

import { IconProps } from './IconProps';

function TransactionIcon(props: IconProps): JSX.Element {
  const { color } = props;

  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M27 6h-8a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1V7a1 1 0 00-1-1zM13 18H5a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1v-6a1 1 0 00-1-1z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 22h10l-2 2M21 10H11l2 2M21 22l-2-2M11 10l2-2"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

TransactionIcon.defaultProps = {
  color: '#A6AAB4',
  height: 32,
  width: 32,
};

export default TransactionIcon;
