import React from 'react';
import type { FC } from 'react';

import { Box, LinearProgress, makeStyles } from '@material-ui/core';

import type { Theme } from '../theme';
import { LogoIcon } from './icons';

const useStyles = makeStyles((theme: Theme) => ({
  progressBar: {
    // TODO - this should be based on whatever I choose is the min-width
    width: 141 * 3,
  },
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    padding: theme.spacing(3),
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 2000,
  },
}));

const SplashScreen: FC = () => {
  const classes = useStyles();

  // TODO design SplashScreen -- mobilecoin
  // TODO -- fix how icons are sized. I think, instead, it should be 1 number
  // scales (either 'size' or 'height'; height may be better for estimating)
  // in-line styling
  return (
    <Box data-testid="SplashScreen" className={classes.root}>
      <Box position="relative">
        <Box>
          <LogoIcon height={35 * 3} width={141 * 3} />
        </Box>
        <Box pt={4}>
          <LinearProgress className={classes.progressBar} />
        </Box>
      </Box>
    </Box>
  );
};

export default SplashScreen;
export { SplashScreen };
