import React from 'react';
import type { FC } from 'react';

import { AppBar, Toolbar, makeStyles } from '@material-ui/core';

import { LogoIcon } from '../../../components/icons';
import NavBar from './NavBar';
import SyncStatus from './SyncStatus';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.background.default,
    },
    toolbar: {
      backgroundColor: theme.palette.background.paper,
      height: '10px',
      margin: 'auto',
    },
  };
});

const TopBar: FC = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <LogoIcon />
      </Toolbar>
      <NavBar />
      <SyncStatus />
    </AppBar>
  );
};

export default TopBar;
