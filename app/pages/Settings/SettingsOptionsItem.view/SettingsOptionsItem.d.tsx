import { FC } from 'react';

import { IconProps } from '../../../components/icons/IconProps';

export interface SettingsOptionsItemProps {
  Icon: FC<IconProps>;
  label: string;
  path: string;
}
