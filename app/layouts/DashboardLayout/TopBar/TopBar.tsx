import React from 'react';
import type { FC } from 'react';

import { AppBar, makeStyles } from '@material-ui/core';

import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
}));

const TopBar: FC = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} color="default">
      <NavBar />
    </AppBar>
  );
};

export default TopBar;
