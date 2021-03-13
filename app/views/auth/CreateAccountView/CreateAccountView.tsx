import React from 'react';
import type { FC } from 'react';

import { Box, Button, Card, Container, Divider, Typography, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import LogoIcon from '../../../components/icons/LogoIcon';
import routePaths from '../../../constants/routePaths';
import useMobileCoinD from '../../../hooks/useMobileCoinD';
import type { Theme } from '../../../theme';
import CreateAccountForm, { createAccountFormOnSubmit } from './CreateAccountForm';

export interface CreateAccountViewProps {
  isTest?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
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
}));

const CreateAccountView: FC<CreateAccountViewProps> = ({ isTest }: CreateAccountViewProps) => {
  const classes = useStyles();
  const { encryptedEntropy } = useMobileCoinD();
  const { t } = useTranslation('CreateAccountView');

  return (
    <Box data-testid="CreateAccountView" className={classes.root}>
      <Container className={classes.viewContainer} maxWidth="sm">
        <LogoIcon className={classes.logoIcon} />
        <Card className={classes.cardContainer}>
          <Typography color="textPrimary" variant="h2" paragraph>
            {t('title')}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            {t('header')}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            {t('description')}
          </Typography>
          {encryptedEntropy && (
            <Box data-testid="overwrite-warning">
              <Typography variant="body2" paragraph>
                {t('overwriteWarning')}
              </Typography>
              <Button color="secondary" component={RouterLink} to={routePaths.ROOT}>
                {t('unlockWalletButton')}
              </Button>
            </Box>
          )}
          <CreateAccountForm isTest={isTest} onSubmit={createAccountFormOnSubmit} />
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
      </Container>
    </Box>
  );
};

CreateAccountView.defaultProps = {
  isTest: false,
};

export default CreateAccountView;
