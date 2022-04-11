import React from 'react';
import type { FC } from 'react';

import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { clipboard } from 'electron';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import routePaths from '../../../constants/routePaths';
import { logger } from '../../../fullService/utils';
import { ReduxStoreState } from '../../../redux/reducers/reducers';
import { addAccount } from '../../../redux/services';
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

export const DashboardPage: FC<DashboardPageProps> = (props: DashboardPageProps): JSX.Element => {
  const { accounts, addingAccount, selectedAccount } = useSelector(
    (state: ReduxStoreState) => state
  );
  const classes = useStyles();
  const { onClose } = props;
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
