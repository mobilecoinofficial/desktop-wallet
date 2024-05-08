import React, { useState, useEffect } from 'react';
import type { FC } from 'react';

import { Box, Button, Card, Container, Divider, makeStyles } from '@material-ui/core';
import { ipcRenderer } from 'electron';
import { useSnackbar } from 'notistack';
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
import { validatePassphrase } from '../../../utils/authentication';
import { isHex64 } from '../../../utils/bip39Functions';
import { errorToString } from '../../../utils/errorHandler';
import { getFogInfo } from '../../../utils/fogConstants';
import { getKeychainAccounts } from '../../../utils/keytarService';
import { CreateAccountView } from '../CreateAccount.view';
import { CreateWalletView } from '../CreateWallet.view';
import { ImportAccountView } from '../ImportAccount.view';
import { ImportLedgerAccountView } from '../ImportLedgerAcoount.view/ImportLedgerAccount.view';
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
const untilFullServiceRuns = async (enqueueSnackbar, closeSnackbar) => {
  for (let i = 0; i < 25; i++) {
    try {
      await getAllAccounts();
      return true;
    } catch (e) {
      const estr = errorToString(e);
      // On certain upgrades, full-service has started, but won't respond to requests while it
      // resyncs the wallet db from the ledger.
      // keep the user informed of the progress, while waiting for
      // full-service to be ready for normal operation.
      if (estr.includes('Resync in progress')) {
        i = 0;
        // rightmost 14 characters of response from full-service is (%xx complete)
        const msg = `Wallet DB being upgraded, please standby ${estr.slice(-14)}`;
        const key = enqueueSnackbar(msg, { persist: true, variant: 'warning' });
        await new Promise((resolve) => setTimeout(resolve, 30000));
        closeSnackbar(key);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
  }

  return false;
};
/* eslint-enable no-await-in-loop */

export const AuthPage: FC = (): JSX.Element => {
  const { addingAccount, isAuthenticated, selectedAccount, encryptedPassword, network } =
    useSelector((state: ReduxStoreState) => state);
  const classes = useStyles();
  const [selectedView, setView] = useState(1);
  const { t } = useTranslation('AuthPage');
  const [walletDbExists, setWalletDbExists] = useState(localStore.getWalletDbExists());
  const [fullServiceIsRunning, setFullServiceIsRunning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [accountIds, setAccountIds] = useState<string[]>([]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const offlineStart = localStore.getOfflineStart();
  useEffect(() => {
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
          await validatePassphrase(password, encryptedPassword);
          await ipcRenderer.invoke('start-full-service', password, null, startInOfflineMode);
          await untilFullServiceRuns(enqueueSnackbar, closeSnackbar);
          const accounts = await getAllAccounts();
          setAccountIds(accounts.accountIds);
          await unlockWallet(password, startInOfflineMode);
          if (accounts.accountIds?.length) {
            await selectAccount(accounts.accountIds[0]);
          }
          setFullServiceIsRunning(true);
        } catch (err) {
          const errorMessage = errorToString(err);
          enqueueSnackbar(errorMessage, { variant: 'error' });
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
        const errorMessage = errorToString(err);
        enqueueSnackbar(errorMessage, { variant: 'error' });
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
      await validatePassphrase(password, encryptedPassword);
      const status = await getWalletStatus();
      const accounts = await getAllAccounts();
      await unlockWallet(password, status.networkBlockHeight === '0');
      if (accounts?.accountIds?.length) {
        await selectAccount(accounts.accountIds[0]);
      }
      setAccountIds(accounts?.accountIds ?? []);
    } catch (err) {
      const errorMessage = errorToString(err);
      enqueueSnackbar(errorMessage, { variant: 'error' });
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

  const onClickCreate = async (accountName: string, isFogEnabled: boolean) => {
    try {
      if (!network) {
        throw new Error('consensus network not set');
      }

      const fogInfo = isFogEnabled
        ? getFogInfo({
            application: 'MOBILECOIN',
            network,
          })
        : undefined;
      await createAccount(accountName, fogInfo);
    } catch (err) {
      const errorMessage = errorToString(err);
      enqueueSnackbar(errorMessage, { variant: 'error' });
    }
  };

  // TODO: improve error handling
  const onClickImport = async (
    accountName: string,
    entropy: string,
    fogEnabled: boolean,
    fogType: 'MOBILECOIN' | 'SIGNAL'
  ) => {
    if (!network) {
      throw new Error('consensus network not set');
    }

    const fogInfo = fogEnabled
      ? getFogInfo({
          application: fogType,
          network,
        })
      : undefined;

    if (isHex64(entropy)) {
      await importLegacyAccount(accountName, entropy, fogInfo);
    } else {
      await importAccount(accountName, entropy, fogInfo);
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
          {selectedView === 4 && <ImportLedgerAccountView />}
          <Box my={3}>
            <Divider />
          </Box>

          {optButton(1, t('createInstead'))}
          {optButton(2, t('importInstead'))}
          {!offlineStart && optButton(3, 'Import View Only Account')}
          {!offlineStart && optButton(4, 'Import Account From Ledger')}
          {addingAccount ? <Button onClick={onClickCancel}>Cancel</Button> : <></>}
        </Card>
      </Container>
    </Box>
  );
};
