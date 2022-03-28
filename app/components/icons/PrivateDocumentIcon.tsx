import * as React from 'react';

import { IconProps } from './IconProps';

export function PrivateDocumentIcon(props: IconProps): JSX.Element {
  const { color } = props;

  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 14.25a.75.75 0 100-1.5.75.75 0 000 1.5zm1.5-.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.875 15.667h1.25c.69 0 1.25.597 1.25 1.333H19c0-1.105-.84-2-1.875-2h-1.25C14.839 15 14 15.895 14 17h.625c0-.736.56-1.333 1.25-1.333z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 10.613l-3.857 1.05v3.212c0 1.278.964 2.657 2.077 3.793a16.312 16.312 0 001.78 1.561 16.312 16.312 0 001.78-1.561c1.113-1.136 2.077-2.515 2.077-3.793v-3.213l-3.857-1.05zm-4.034.46a.618.618 0 00-.466.59v3.212C12 17.938 16.5 21 16.5 21s4.5-3.062 4.5-6.125v-3.213a.618.618 0 00-.466-.589l-3.857-1.05a.673.673 0 00-.354 0l-3.857 1.05zM14 10H6V9h8v1zM11 16H6v-1h5v1zM11 13H6v-1h5v1z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 3l4 4v3l-1-.5v-2h-2.5a1 1 0 01-1-1V4H4v16h10v1H4a1 1 0 01-1-1V4a1 1 0 011-1h11zm.5 1.914L17.086 6.5H15.5V4.914z"
        fill={color}
      />
    </svg>
  );
}

PrivateDocumentIcon.defaultProps = {
  color: '#A6AAB4',
  height: 24,
  width: 24,
};
