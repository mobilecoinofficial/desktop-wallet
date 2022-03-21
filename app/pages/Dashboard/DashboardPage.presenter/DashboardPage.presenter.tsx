import React from 'react';
import type { FC } from 'react';

import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { clipboard } from 'electron';
import { useSnackbar } from 'notistack';
import { Redirect } from 'react-router-dom';

import routePaths from '../../../constants/routePaths';
import { logger } from '../../../fullService/utils';
import { store } from '../../../redux/store';
import { addAccount } from '../../../services';
import type { Theme } from '../../../theme';
import { DashboardView } from '../DashboardPage.view/DashboardPage.view';
import type { DashboardPageProps } from './DashboardPage.d';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const DashboardPage: FC<DashboardPageProps> = ({ onClose }: DashboardPageProps) => {
  const classes = useStyles();
  const { accounts, addingAccount, selectedAccount } = store.getState();
  const { enqueueSnackbar } = useSnackbar();

  if (addingAccount) {
    return <Redirect to={routePaths.ROOT} />;
  }

  const handleCodeClicked = (code: string, text: string) => {
    logger('Code copied to clipboard from dashboard');
    clipboard.writeText(code);
    enqueueSnackbar(text, { variant: 'success' });
  };

  const handleAddAccount = () => {
    addAccount(true);
  };

  return (
    <Box data-testid="DashboardPage" className={classes.root}>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <DashboardView
              accounts={accounts}
              selectedAccount={selectedAccount}
              onAddAccount={handleAddAccount}
              onClose={onClose}
              onClickCode={handleCodeClicked}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DashboardPage;
export { DashboardPage };
