import { FC } from 'react';

import { IconProps } from '../../../../components/icons/IconProps';

type Section = {
  Icon: FC<IconProps>;
  label: string;
  path: string;
};

export interface NavBarProps {
  className?: string;
  sections: Section[];
}
