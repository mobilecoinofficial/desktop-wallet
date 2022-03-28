import * as React from 'react';

import { IconProps } from './IconProps';

export function LockIcon(props: IconProps): JSX.Element {
  const { color } = props;

  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 15.915a1.5 1.5 0 10-1 0V17.5h1v-1.585zm0-1.415a.5.5 0 11-1 0 .5.5 0 011 0z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 9V7.5a4.5 4.5 0 019 0V9H18a1 1 0 011 1v10a1 1 0 01-1 1H6a1 1 0 01-1-1V10a1 1 0 011-1h1.5zm8-1.5V9h-7V7.5a3.5 3.5 0 117 0zM6 10v10h12V10H6z"
        fill={color}
      />
    </svg>
  );
}

LockIcon.defaultProps = {
  color: '#A6AAB4',
  height: 34,
  width: 34,
};
