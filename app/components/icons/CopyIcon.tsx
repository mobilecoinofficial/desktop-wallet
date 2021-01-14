import * as React from 'react';

import { IconProps } from './IconProps';

function CopyIcon(props: IconProps): JSX.Element {
  const { color } = props;

  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 5a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1H5V5z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 4H7v14h12V4zM7 3a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H7z"
        fill={color}
      />
    </svg>
  );
}

CopyIcon.defaultProps = {
  color: '#A6AAB4',
  height: 24,
  width: 24,
};

export default CopyIcon;
