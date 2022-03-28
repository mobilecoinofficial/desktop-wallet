import * as React from 'react';

import { IconProps } from './IconProps';

export function AddressBookIcon(props: IconProps): JSX.Element {
  const { color } = props;
  return (
    <svg viewBox="0 0 28 21" fill="none" {...props}>
      <path
        d="M22.192 16.808a12.95 12.95 0 00-4.94-3.099 7.513 7.513 0 003.264-6.193C20.516 3.372 17.144 0 13 0S5.484 3.372 5.484 7.516a7.513 7.513 0 003.264 6.193 12.95 12.95 0 00-4.94 3.099A12.915 12.915 0 000 26h2.031c0-6.048 4.92-10.969 10.969-10.969 6.048 0 10.969 4.92 10.969 10.969H26c0-3.472-1.352-6.737-3.808-9.192zM13 13a5.49 5.49 0 01-5.484-5.484A5.49 5.49 0 0113 2.03a5.49 5.49 0 015.484 5.485A5.49 5.49 0 0113 13z"
        fill={color}
      />
    </svg>
  );
}

AddressBookIcon.defaultProps = {
  color: '#ADB0BB',
  height: 26,
  width: 26,
};
