import * as React from 'react';

import { IconProps } from './IconProps';

function TrashcanIcon(props: IconProps): JSX.Element {
  const { color } = props;

  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3 5l-.549-1.371A1 1 0 0014.823 3h-4.646a1 1 0 00-.928.629L8.7 5H5v1h15V5h-3.7zm-1.077 0l-.4-1h-4.646l-.4 1h5.446zM12 17V9h1v8h-1zM15 17V9h1v8h-1zM9 17V9h1v8H9z"
        fill={color}
      />
      <path
        d="M7 19V7H6v12a1 1 0 001 1h11a1 1 0 001-1V7h-1v12H7z"
        fill={color}
      />
    </svg>
  );
}

TrashcanIcon.defaultProps = {
  color: '#A6AAB4',
  height: 24,
  width: 24,
};

export default TrashcanIcon;
