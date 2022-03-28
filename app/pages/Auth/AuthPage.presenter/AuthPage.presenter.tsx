import React, { useState, useEffect, FC } from 'react';

import { Box, Button, Card, Container, Divider, makeStyles } from '@material-ui/core';
import { ipcRenderer } from 'electron';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { SplashScreen } from '../../../components/SplashScreen';
import { LogoIcon } from '../../../components/icons';
import { routePaths } from '../../../constants/routePaths';
import { ReduxStoreState } from '../../../redux/reducers/reducers';
import {
  addAccount,
  createAccount,
  createWallet,
  deleteWallet,
  importAccount,
  importLegacyAccount,
  selectAccount,
  unlockWallet,
} from '../../../redux/services';
import { getWalletStatus } from '../../../services';
import type { Theme } from '../../../theme';
import { SelectedAccount } from '../../../types';
import * as localStore from '../../../utils/LocalStore';
import { isHex64 } from '../../../utils/bip39Functions';
import { getKeychainAccounts } from '../../../utils/keytarService';
import { CreateAccountView } from '../CreateAccount.view';
import { CreateWalletView } from '../CreateWallet.view';
import { ImportAccountView } from '../ImportAccount.view';
import { UnlockWalletView } from '../UnlockWallet.view';

const useStyles = makeStyles((theme: Theme) => ({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: theme.spacing(5),
    padding: theme.spacing(4),
  },
  logoIcon: {
    height: 70,
    width: 282,
  },
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100vh',
    overflow: 'auto',
    padding: `${theme.spacing(5)}px ${theme.spacing(3)}px`,
  },
  viewContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
}));

/* eslint-disable no-await-in-loop */
const untilFullServiceRuns = async () => {
  for (let i = 0; i < 25; i++) {
    try {
      await getWalletStatus();
      return true;
    } catch (e) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  return false;
};
/* eslint-enable no-await-in-loop */

type Props = ReduxProps;

const AuthPage: FC<Props> = (props: Props): JSX.Element => {
  const classes = useStyles();
  const { addingAccount, isAuthenticated, selectedAccount } = props;
  const [selectedView, setView] = useState(1);
  const { t } = useTranslation('AuthPage');
  const [walletDbExists, setWalletDbExists] = useState(localStore.getWalletDbExists());
  const [fullServiceIsRunning, setFullServiceIsRunning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [accountIds, setAccountIds] = useState<string[]>([]);

  const offlineStart = localStore.getOfflineStart();

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const status = await getWalletStatus();
        setAccountIds(status.accountIds);
        setFullServiceIsRunning(true);
      } finally {
        setLoading(false);
      }
    })();

    return () => controller?.abort();
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  if (isAuthenticated && selectedAccount != null && !addingAccount) {
    return <Redirect to={routePaths.APP_DASHBOARD} />;
  }

  const optButton = (n: number, st: string) =>
    selectedView !== n && (
      <Button
        color="secondary"
        onClick={() => setView(n)}
        variant="outlined"
        style={{ margin: '5px' }}
      >
        {st}
      </Button>
    );

  if (!fullServiceIsRunning) {
    if (walletDbExists) {
      const onClickUnlock = async (password: string, startInOfflineMode: boolean) => {
        try {
          await ipcRenderer.invoke('start-full-service', password, null, startInOfflineMode);
          await untilFullServiceRuns();
          const status = await getWalletStatus();
          await unlockWallet(password, startInOfflineMode);
          if (status.accountIds.length) {
            await selectAccount(status.accountIds[0]);
          }
          setAccountIds(status.accountIds);
          setFullServiceIsRunning(true);
        } catch (err) {
          console.log(err); // eslint-disable-line no-console
        }
      };

      return (
        <Box data-testid="AuthPageId" className={classes.root}>
          <Container className={classes.viewContainer} maxWidth="sm">
            <LogoIcon className={classes.logoIcon} />
            <Card className={classes.cardContainer}>
              <UnlockWalletView
                onClickUnlock={onClickUnlock}
                accounts={getKeychainAccounts()}
                handleDeleteWallet={deleteWallet}
                fullServiceIsRunning={fullServiceIsRunning}
                offlineStart={offlineStart}
              />
            </Card>
          </Container>
        </Box>
      );
    }
    const onClickCreateWallet = async (password: string, startInOfflineMode: boolean) => {
      try {
        await ipcRenderer.invoke('start-full-service', password, null, startInOfflineMode);
        await untilFullServiceRuns();
        const status = await getWalletStatus();
        await createWallet(password);
        await unlockWallet(password, startInOfflineMode);
        setAccountIds(status.accountIds);
        setWalletDbExists(true);
        setFullServiceIsRunning(true);
      } catch (err) {
        console.log(err); // eslint-disable-line no-console
      }
    };

    return (
      <Box data-testid="AuthPageId" className={classes.root}>
        <Container className={classes.viewContainer} maxWidth="sm">
          <LogoIcon className={classes.logoIcon} />
          <Card className={classes.cardContainer}>
            <CreateWalletView onClickCreate={onClickCreateWallet} />
          </Card>
        </Container>
      </Box>
    );
  }

  const onClickUnlockWallet = async (password: string) => {
    try {
      const status = await getWalletStatus();
      await unlockWallet(password, status.networkBlockHeight === '0');
      if (status.accountIds.length > 0) {
        await selectAccount(status.accountIds[0]);
      }
      setAccountIds(status.accountIds);
    } catch (err) {
      console.log(err); // eslint-disable-line no-console
    }
  };

  if (accountIds.length > 0 && !addingAccount) {
    return (
      <Box data-testid="AuthPageId" className={classes.root}>
        <Container className={classes.viewContainer} maxWidth="sm">
          <LogoIcon className={classes.logoIcon} />
          <Card className={classes.cardContainer}>
            <UnlockWalletView
              onClickUnlock={onClickUnlockWallet}
              accounts={getKeychainAccounts()}
              handleDeleteWallet={deleteWallet}
              fullServiceIsRunning={fullServiceIsRunning}
              offlineStart={offlineStart}
            />
          </Card>
        </Container>
      </Box>
    );
  }

  const onClickCreate = async (accountName: string) => {
    try {
      await createAccount(accountName);
    } catch (err) {
      /* TODO: handle error */
      console.log('ERROR!', err); // eslint-disable-line no-console
    }
  };

  // TODO: improve error handling
  const onClickImport = async (accountName: string, entropy: string) => {
    if (isHex64(entropy)) {
      await importLegacyAccount(accountName, entropy);
    } else {
      await importAccount(accountName, entropy);
    }
  };

  const onClickCancel = () => addAccount(false);

  return (
    <Box data-testid="AuthPageId" className={classes.root}>
      <Container className={classes.viewContainer} maxWidth="sm">
        <LogoIcon className={classes.logoIcon} />
        <Card className={classes.cardContainer}>
          {selectedView === 1 && <CreateAccountView onClickCreate={onClickCreate} />}
          {selectedView === 2 && <ImportAccountView onClickImport={onClickImport} />}
          <Box my={3}>
            <Divider />
          </Box>

          {optButton(1, t('createInstead'))}
          {optButton(2, t('importInstead'))}
          {addingAccount ? <Button onClick={onClickCancel}>Cancel</Button> : <></>}
        </Card>
      </Container>
    </Box>
  );
};

type ReduxProps = {
  addingAccount: boolean;
  isAuthenticated: boolean;
  selectedAccount: SelectedAccount;
};

const mapState = (state: ReduxStoreState): ReduxProps => ({
  addingAccount: state.addingAccount,
  isAuthenticated: state.isAuthenticated,
  selectedAccount: state.selectedAccount,
});

export const ConnectedAuthPage = connect<
  ReduxProps,
  Record<string, never>,
  Record<string, never>,
  ReduxStoreState
>(mapState)(AuthPage);
