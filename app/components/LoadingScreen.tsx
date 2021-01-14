import React, { useEffect } from 'react';
import type { FC } from 'react';

import { Box, LinearProgress, makeStyles } from '@material-ui/core';
import NProgress from 'nprogress';

import type { Theme } from '../theme';

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      minHeight: '100%',
      padding: theme.spacing(3),
    },
  };
});

const LoadingScreen: FC = () => {
  const classes = useStyles();

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className={classes.root}>
      <Box width={400}>
        <LinearProgress />
      </Box>
    </div>
  );
};

export default LoadingScreen;
