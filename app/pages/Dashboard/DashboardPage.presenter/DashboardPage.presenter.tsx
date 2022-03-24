import React from 'react';

import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { clipboard } from 'electron';
import { useSnackbar } from 'notistack';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import routePaths from '../../../constants/routePaths';
import { logger } from '../../../fullService/utils';
import { ReduxStoreState } from '../../../redux/reducers/reducers';
import { addAccount } from '../../../services';
import type { Theme } from '../../../theme';
import { Accounts, SelectedAccount } from '../../../types';
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

type Props = DashboardPageProps & ReduxProps;

const DashboardPage = (props: Props): JSX.Element => {
  const classes = useStyles();
  const { accounts, addingAccount, selectedAccount, onClose } = props;
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

type ReduxProps = {
  accounts: Accounts;
  addingAccount: boolean;
  selectedAccount: SelectedAccount;
};

const mapState = (state: ReduxStoreState): ReduxProps => ({
  accounts: state.accounts,
  addingAccount: state.addingAccount,
  selectedAccount: state.selectedAccount,
});

export const ConnectedDashboardPage = connect<
  ReduxProps,
  Record<string, never>,
  DashboardPageProps,
  ReduxStoreState
>(mapState)(DashboardPage);
