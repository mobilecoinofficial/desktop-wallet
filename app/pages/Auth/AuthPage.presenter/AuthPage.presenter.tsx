import React, { useState, useEffect } from 'react';
import type { FC } from 'react';

import { Box, Button, Card, Container, Divider, makeStyles } from '@material-ui/core';
import { ipcRenderer } from 'electron';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';

import { SplashScreen } from '../../../components/SplashScreen';
import LogoIcon from '../../../components/icons/LogoIcon';
import routePaths from '../../../constants/routePaths';
import useFullService from '../../../hooks/useFullService';
import {
  addAccount,
  createAccount,
  createWallet,
  deleteWallet,
  getWalletStatus,
  importAccount,
  importLegacyAccount,
  selectAccount,
  unlockWallet,
} from '../../../services';
import type { Theme } from '../../../theme';
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
  for (;;) {
    try {
      await getWalletStatus();
      return true;
    } catch (e) {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
};
/* eslint-enable no-await-in-loop */

const AuthPage: FC = () => {
  const classes = useStyles();
  const { addingAccount, isAuthenticated, selectedAccount } = useFullService();
  const [selectedView, setView] = useState(1);
  const { t } = useTranslation('AuthPage');
  const [walletDbExists, setWalletDbExists] = useState(localStore.getWalletDbExists());
  const [fullServiceIsRunning, setFullServiceIsRunning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [accountIds, setAccountIds] = useState([]);

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
      const onClickUnlock = async (password: string) => {
        try {
          await ipcRenderer.invoke('start-full-service', password, null);
          await untilFullServiceRuns();
          const status = await getWalletStatus();
          await unlockWallet(password);
          if (status.accountIds.length) {
            await selectAccount(status.accountIds[0]);
          }
          setAccountIds(status.accountIds);
          setFullServiceIsRunning(true);
        } catch (err) {
          console.log(err);
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
              />
            </Card>
          </Container>
        </Box>
      );
    }
    const onClickCreateWallet = async (password: string) => {
      try {
        await ipcRenderer.invoke('start-full-service', password, null);
        await untilFullServiceRuns();
        const status = await getWalletStatus();
        await createWallet(password);
        await unlockWallet(password);
        setAccountIds(status.accountIds);
        setWalletDbExists(true);
        setFullServiceIsRunning(true);
      } catch (err) {
        console.log(err);
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
      await unlockWallet(password);
      if (status.accountIds.length > 0) {
        await selectAccount(status.accountIds[0]);
      }
      setAccountIds(status.accountIds);
    } catch (err) {
      console.log(err);
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
      console.log('ERROR!', err);
    }
  };

  const onClickImport = async (accountName: string, entropy: string) => {
    try {
      if (isHex64(entropy)) {
        await importLegacyAccount(accountName, entropy);
      } else {
        await importAccount(accountName, entropy);
      }
    } catch (err) {
      /* nothing now... TODO: fix! */
    }
  };

  const onClickCancel = () => {
    addAccount(false);
  };

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

export default AuthPage;
export { AuthPage };
