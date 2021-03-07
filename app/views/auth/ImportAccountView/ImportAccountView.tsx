import React from 'react';
import type { FC } from 'react';

import { Box, Button, Card, Container, Divider, Typography, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import LogoIcon from '../../../components/icons/LogoIcon';
import routePaths from '../../../constants/routePaths';
import useFullService from '../../../hooks/useFullService';
import type { Theme } from '../../../theme';
import ImportAccountForm, { importAccountFormOnSubmit } from './ImportAccountForm';

// CBB: this isTest pattern would be better managed with context and hooks.
interface ImportAccountViewProps {
  isTest?: boolean;
}

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

const ImportAccountView: FC<ImportAccountViewProps> = ({ isTest }: ImportAccountViewProps) => {
  const classes = useStyles();
  const { t } = useTranslation('ImportAccountView');
  const { hashedPassword } = useFullService();

  return (
    <Box data-testid="ImportAccountView" className={classes.root}>
      <Container className={classes.viewContainer} maxWidth="sm">
        <LogoIcon className={classes.logoIcon} />
        <Card className={classes.cardContainer}>
          <Typography variant="h2" paragraph>
            {t('title')}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            {t('header')}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            {t('description')}
          </Typography>
          {hashedPassword && (
            <Box data-testid="overwrite-warning">
              <Typography variant="body2" paragraph>
                {t('overwriteWarning')}
              </Typography>
              <Button color="secondary" component={RouterLink} to={routePaths.ROOT}>
                {t('unlockWalletButton')}
              </Button>
            </Box>
          )}
          <ImportAccountForm isTest={isTest} onSubmit={importAccountFormOnSubmit} />
          <Box my={3}>
            <Divider />
          </Box>
          <Button
            color="secondary"
            component={RouterLink}
            to={routePaths.CREATE}
            variant="outlined"
          >
            {t('createInstead')}
          </Button>
        </Card>
      </Container>
    </Box>
  );
};

ImportAccountView.defaultProps = {
  isTest: false,
};

export default ImportAccountView;
