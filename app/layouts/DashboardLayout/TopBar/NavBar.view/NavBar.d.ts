import { FC } from 'react';

import { IconProps } from '../../../../components/icons/IconProps';

export interface NavBarProps {
  className?: string;
}

export interface Section {
  Icon: FC<IconProps>;
  label: string;
  path: string;
}
