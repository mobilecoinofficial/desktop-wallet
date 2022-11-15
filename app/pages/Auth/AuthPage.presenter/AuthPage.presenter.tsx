import React, { useState, useEffect } from 'react';
import type { FC } from 'react';

import { Box, Button, Card, Container, Divider, makeStyles } from '@material-ui/core';
import { ipcRenderer } from 'electron';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { SplashScreen } from '../../../components/SplashScreen';
import LogoIcon from '../../../components/icons/LogoIcon';
import routePaths from '../../../constants/routePaths';
import { getAllAccounts } from '../../../fullService/api';
import { initialReduxStoreState, ReduxStoreState } from '../../../redux/reducers/reducers';
import {
  addAccount,
  createAccount,
  createWallet,
  deleteWallet,
  importAccount,
  importLegacyAccount,
  selectAccount,
  unlockWallet,
  confirmEntropyKnown,
} from '../../../redux/services';
import { getWalletStatus } from '../../../services';
import type { Theme } from '../../../theme';
import * as localStore from '../../../utils/LocalStore';
import { isHex64 } from '../../../utils/bip39Functions';
import { getKeychainAccounts } from '../../../utils/keytarService';
import { CreateAccountView } from '../CreateAccount.view';
import { CreateWalletView } from '../CreateWallet.view';
import { ImportAccountView } from '../ImportAccount.view';
import { ImportViewOnlyAccountView } from '../ImportViewOnlyAccount.view';
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
      await getAllAccounts();
      return true;
    } catch (e) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  return false;
};
/* eslint-enable no-await-in-loop */

export const AuthPage: FC = (): JSX.Element => {
  const { addingAccount, isAuthenticated, selectedAccount } = useSelector(
    (state: ReduxStoreState) => state
  );
  const classes = useStyles();
  const [selectedView, setView] = useState(1);
  const { t } = useTranslation('AuthPage');
  const [walletDbExists, setWalletDbExists] = useState(localStore.getWalletDbExists());
  const [fullServiceIsRunning, setFullServiceIsRunning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [accountIds, setAccountIds] = useState([]);

  const offlineStart = localStore.getOfflineStart();
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const accounts = await getAllAccounts();
        setAccountIds(accounts.accountIds);
        if (accounts.accountIds?.length) {
          confirmEntropyKnown();
        }

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

  if (
    isAuthenticated &&
    selectedAccount !== initialReduxStoreState.selectedAccount &&
    !addingAccount
  ) {
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
        confirmEntropyKnown();
        try {
          await ipcRenderer.invoke('start-full-service', password, null, startInOfflineMode);
          await untilFullServiceRuns();
          const accounts = await getAllAccounts();
          setAccountIds(accounts.accountIds);
          await unlockWallet(password, startInOfflineMode);
          if (accounts.accountIds?.length) {
            await selectAccount(accounts.accountIds[0]);
          }
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
        const accounts = await getAllAccounts();
        await createWallet(password);
        await unlockWallet(password, startInOfflineMode);
        setAccountIds(accounts.accountIds);
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
    confirmEntropyKnown();
    try {
      const status = await getWalletStatus();
      const accounts = await getAllAccounts();
      await unlockWallet(password, status.networkBlockHeight === '0');
      if (accounts?.accountIds?.length) {
        await selectAccount(accounts.accountIds[0]);
      }
      setAccountIds(accounts?.accountIds ?? []);
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
          {selectedView === 3 && <ImportViewOnlyAccountView />}
          <Box my={3}>
            <Divider />
          </Box>

          {optButton(1, t('createInstead'))}
          {optButton(2, t('importInstead'))}
          {!offlineStart && optButton(3, 'Import View Only Account')}
          {addingAccount ? <Button onClick={onClickCancel}>Cancel</Button> : <></>}
        </Card>
      </Container>
    </Box>
  );
};
