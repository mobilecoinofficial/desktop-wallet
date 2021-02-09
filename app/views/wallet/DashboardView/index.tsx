import React from 'react';
import type { FC } from 'react';

import { Box, Container, Grid, makeStyles } from '@material-ui/core';

import type { Theme } from '../../../theme';
import DashboardOverview from './DashboardOverview';

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      backgroundColor: theme.palette.background.dark,
      minHeight: '100%',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3),
    },
  };
});

const DashboardView: FC = () => {
  const classes = useStyles();

  return (
    <Box data-testid="DashboardView" className={classes.root}>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <DashboardOverview />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DashboardView;
