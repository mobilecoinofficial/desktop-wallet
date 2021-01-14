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
import useMobileCoinD from '../../../hooks/useMobileCoinD';
import type { Theme } from '../../../theme';
import CreateAccountForm from './CreateAccountForm';

const useStyles = makeStyles((theme: Theme) => {
  return {
    cardContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: 'auto',
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

const CreateAccountView: FC = () => {
  const classes = useStyles();
  const { encryptedEntropy } = useMobileCoinD();

  return (
    <Box className={classes.root}>
      <Container className={classes.viewContainer} maxWidth="sm">
        <LogoIcon className={classes.logoIcon} />
        <Card className={classes.cardContainer}>
          <Typography color="textPrimary" variant="h2" paragraph>
            Create Account
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Create a new account for this desktop wallet.
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            This option is best for individuals who do not have an existing
            account. If you have an account you would like to use, please import
            an existing account instead.
          </Typography>
          {encryptedEntropy && (
            <>
              <Typography variant="body2" paragraph>
                It appears that this wallet is locked with an encrypted Entropy.
                Creating an account will override the wallet. Please ensure that
                you have secured your Entropy if you wish to change accounts.
              </Typography>
              <Link
                component={RouterLink}
                to={routePaths.ROOT}
                variant="body2"
                paragraph
              >
                Unlock this wallet
              </Link>
            </>
          )}
          <CreateAccountForm />
          <Box my={3}>
            <Divider />
          </Box>
          <Link component={RouterLink} to={routePaths.IMPORT} variant="body2">
            Import account instead
          </Link>
        </Card>
      </Container>
    </Box>
  );
};

export default CreateAccountView;
