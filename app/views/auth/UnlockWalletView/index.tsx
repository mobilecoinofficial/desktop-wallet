import React from 'react';
import type { FC } from 'react';

import {
  Box,
  Card,
  Container,
  Divider,
  Link,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import LogoIcon from '../../../components/icons/LogoIcon';
import routePaths from '../../../constants/routePaths';
import type { Theme } from '../../../theme';
import UnlockWalletForm from './UnlockWalletForm';

const useStyles = makeStyles((theme: Theme) => {
  return {
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
  };
});

const UnlockWalletView: FC = () => {
  const classes = useStyles();

  return (
    <Box data-testid="UnlockWalletView" className={classes.root}>
      <Container className={classes.viewContainer} maxWidth="sm">
        <LogoIcon className={classes.logoIcon} />
        <Card className={classes.cardContainer}>
          <Typography variant="h2" paragraph>
            Unlock Wallet
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Please enter the passphrase you used to secure your wallet. If you
            cannot recall your passphrase, you may re-import the account into
            your wallet using their Entropy seed.
          </Typography>
          <UnlockWalletForm />
          <Box my={3}>
            <Divider />
          </Box>
          <Link component={RouterLink} to={routePaths.IMPORT} variant="body2">
            Import account from Entropy seed instead
          </Link>
        </Card>
      </Container>
    </Box>
  );
};

export default UnlockWalletView;
