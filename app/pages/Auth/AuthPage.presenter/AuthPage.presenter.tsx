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
import { createAccount, importAccount, importLegacyAccount, unlockWallet } from '../../../services';
import type { Theme } from '../../../theme';
import { setKeychainAccount /* , getKeychainAccounts */ } from '../../../utils/keytarService';
import { CreateAccountView } from '../CreateAccount.view';
import { ImportAccountView } from '../ImportAccount.view';
// import { UnlockAccountView } from '../UnlockAccount.view';
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

const AuthPage: FC = () => {
  const classes = useStyles();
  const { isAuthenticated, isInitialized } = useFullService();
  const [selectedView, setView] = useState(1);
  const [isUnlocked, setUnlocked] = useState(false);
  const { t } = useTranslation('AuthPage');

  useEffect(() => {}, [isUnlocked]);

  const onUnlock = async (pwd: string) => {
    if (pwd) {
      try {
        await ipcRenderer.invoke('logged-in');
        await unlockWallet(pwd);
        // setUnlocked(true); // not needed; unlockWallet(...) sets isAuthenticated
      } catch (e) {
        if (e.message.includes('Invalid Password')) {
          setUnlocked(false);
        }
      }
    }
  };

  if (!isInitialized) {
    return <SplashScreen />;
  }

  if (isAuthenticated) {
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

  if (!isUnlocked) {
    return (
      <Box data-testid="AuthPageId" className={classes.root}>
        <Container className={classes.viewContainer} maxWidth="sm">
          <LogoIcon className={classes.logoIcon} />
          <Card className={classes.cardContainer}>
            <UnlockWalletView unlockWallet={onUnlock} />
          </Card>
        </Container>
      </Box>
    );
  }

  /*
    return (
      <Box data-testid="AuthPageId" className={classes.root}>
        <Container className={classes.viewContainer} maxWidth="sm">
          <LogoIcon className={classes.logoIcon} />
          <Card className={classes.cardContainer}>
            <UnlockAccountView unlockWallet={unlockWallet} accounts={getKeychainAccounts()} />
          </Card>
        </Container>
      </Box>
    );
  */

  return (
    <Box data-testid="AuthPageId" className={classes.root}>
      <Container className={classes.viewContainer} maxWidth="sm">
        <LogoIcon className={classes.logoIcon} />
        <Card className={classes.cardContainer}>
          {selectedView === 1 && (
            <CreateAccountView
              createAccount={createAccount}
              setKeychainAccount={setKeychainAccount}
            />
          )}

          {selectedView === 2 && (
            <ImportAccountView
              importAccount={importAccount}
              importLegacyAccount={importLegacyAccount}
              setKeychainAccount={setKeychainAccount}
            />
          )}

          <Box my={3}>
            <Divider />
          </Box>

          {optButton(1, t('createInstead'))}
          {optButton(2, t('importInstead'))}
        </Card>
      </Container>
    </Box>
  );
};

export default AuthPage;
export { AuthPage };
