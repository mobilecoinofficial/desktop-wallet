import React from 'react';
import type { FC } from 'react';

import { Tab, Tabs } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom';

import { BLUE_DARK, GREY_LIGHT } from '../../../../constants/colors';
import { NavBarProps } from './NavBar';

const NavBar: FC<NavBarProps> = ({ sections }: NavBarProps) => {
  const location = useLocation();
  const { t } = useTranslation('NavBar');
  const value = sections.findIndex((section) =>
    matchPath(location.pathname, {
      exact: false,
      path: section.path,
      strict: false,
    })
  );

  return (
    <Tabs value={value} variant="scrollable" indicatorColor="primary" textColor="primary">
      {sections.map(({ Icon, label, path }, idx) => {
        const color = value === idx ? BLUE_DARK : GREY_LIGHT;

        return (
          <Tab
            component={RouterLink}
            to={path}
            icon={<Icon height={32} width={32} color={color} />}
            label={t(label)}
            key={label}
            wrapped
          />
        );
      })}
    </Tabs>
  );
};

export default NavBar;
export { NavBar };
