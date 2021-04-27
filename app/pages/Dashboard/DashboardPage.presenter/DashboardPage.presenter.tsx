import React from 'react';
import type { FC } from 'react';

import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { ipcRenderer } from 'electron';

import useFullService from '../../../hooks/useFullService';
import type { Theme } from '../../../theme';
import { DashboardView } from '../DashboardPage.view/DashboardPage.view';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const DashboardPage: FC = () => {
  const classes = useStyles();
  const { selectedAccount } = useFullService();
  const handleCloseApp = () => ipcRenderer.send('close-app');

  return (
    <Box data-testid="DashboardPage" className={classes.root}>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <DashboardView selectedAccount={selectedAccount} onClose={handleCloseApp} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DashboardPage;
export { DashboardPage };
