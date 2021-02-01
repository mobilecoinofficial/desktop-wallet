import React from 'react';
import type { FC } from 'react';

import { Tab, Tabs } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import {
  NavLink as RouterLink,
  matchPath,
  useLocation,
} from 'react-router-dom';

import {
  CogIcon,
  GiftIcon,
  TransactionIcon,
  WalletHomeIcon,
} from '../../../components/icons';
import { IconProps } from '../../../components/icons/IconProps';
import { GOLD, GREY_DARK } from '../../../constants/colors';
import routePaths from '../../../constants/routePaths';

interface NavBarProps {
  className?: string;
}

interface Section {
  Icon: FC<IconProps>;
  label: string;
  path: string;
}

const sections: Section[] = [
  {
    Icon: WalletHomeIcon,
    label: 'home',
    path: routePaths.APP_DASHBOARD,
  },
  {
    Icon: TransactionIcon,
    label: 'transaction',
    path: routePaths.APP_TRANSACTION,
  },
  {
    Icon: GiftIcon,
    label: 'gift',
    path: routePaths.APP_GIFTING,
  },
  {
    Icon: CogIcon,
    label: 'settings',
    path: routePaths.APP_SETTINGS,
  },
];

const NavBar: FC<NavBarProps> = () => {
  const location = useLocation();
  const { t } = useTranslation('NavBar');
  const value = sections.findIndex((section) => {
    return matchPath(location.pathname, {
      exact: false,
      path: section.path,
      strict: false,
    });
  });

  return (
    <Tabs value={value} variant="fullWidth">
      {sections.map(({ Icon, label, path }, idx) => {
        const color = value === idx ? GOLD : GREY_DARK;

        return (
          <Tab
            component={RouterLink}
            to={path}
            icon={<Icon height={32} width={32} color={color} />}
            label={t(label)}
            key={label}
          />
        );
      })}
    </Tabs>
  );
};

export default NavBar;
