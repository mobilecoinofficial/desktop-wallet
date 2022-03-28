import * as React from 'react';

import { IconProps } from './IconProps';

export function OfficialDocumentIcon(props: IconProps): JSX.Element {
  const { color } = props;

  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 10H6V9h10v1zM11 16H6v-1h5v1z"
        fill={color}
      />
      <path d="M13.333 13c.178-.357.531-.692.795-1H6v1h7.333z" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 3l4 4v3.416a4.964 4.964 0 00-1-.316V7.5h-2.5a1 1 0 01-1-1V4H4v16h10v1H4a1 1 0 01-1-1V4a1 1 0 011-1h11zm.5 1.914L17.086 6.5H15.5V4.914z"
        fill={color}
      />
      <path
        d="M18 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm2.42-6.046a.652.652 0 01-1.174.389h-5.418A4.228 4.228 0 0018 20.223a4.229 4.229 0 003.843-2.474h-4.987a.651.651 0 11-.022-.777h5.276A4.228 4.228 0 0018 11.777a4.23 4.23 0 00-3.972 2.788h5.218a.651.651 0 011.175.388z"
        fill={color}
      />
    </svg>
  );
}

OfficialDocumentIcon.defaultProps = {
  color: '#A6AAB4',
  height: 24,
  width: 24,
};
