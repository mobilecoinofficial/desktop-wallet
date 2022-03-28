import React, { FC } from 'react';

import { AppBar, makeStyles } from '@material-ui/core';

import {
  AddressBookIcon,
  CogIcon,
  GiftIcon,
  TransactionIcon,
  WalletIcon,
  WalletHomeIcon,
} from '../../../../components/icons';
import { routePaths } from '../../../../constants/routePaths';
import { NavBar } from '../NavBar.view';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
}));

const sections = [
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
    Icon: WalletIcon,
    label: 'history',
    path: routePaths.APP_HISTORY,
  },
  {
    Icon: AddressBookIcon,
    label: 'contacts',
    path: routePaths.APP_CONTACTS,
  },
  {
    Icon: CogIcon,
    label: 'settings',
    path: routePaths.APP_SETTINGS,
  },
];

export const TopBar: FC = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} color="default">
      <NavBar sections={sections} />
    </AppBar>
  );
};
