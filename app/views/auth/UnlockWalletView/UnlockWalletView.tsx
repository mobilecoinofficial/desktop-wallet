import React from 'react';
import type { FC } from 'react';

import { Box, Button, Card, Container, Divider, Typography, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import LogoIcon from '../../../components/icons/LogoIcon';
import routePaths from '../../../constants/routePaths';
import type { Theme } from '../../../theme';
import UnlockWalletForm, { unlockWalletFormOnSubmit } from './UnlockWalletForm';

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

const UnlockWalletView: FC = () => {
  const classes = useStyles();
  const [t] = useTranslation('UnlockWalletView');

  return (
    <Box data-testid="UnlockWalletView" className={classes.root}>
      <Container className={classes.viewContainer} maxWidth="sm">
        <LogoIcon className={classes.logoIcon} />
        <Box width="552px">
          <Card className={classes.cardContainer}>
            <Typography variant="h2" paragraph>
              {t('title')}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              {t('description')}
            </Typography>
            <UnlockWalletForm onSubmit={unlockWalletFormOnSubmit} />
            <Box my={3}>
              <Divider />
            </Box>
            <Button
              color="secondary"
              component={RouterLink}
              to={routePaths.IMPORT}
              variant="outlined"
            >
              {t('importInstead')}
            </Button>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default UnlockWalletView;
