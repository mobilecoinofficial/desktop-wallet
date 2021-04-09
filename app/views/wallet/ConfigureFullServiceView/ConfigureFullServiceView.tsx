import React from 'react';
import type { FC } from 'react';

import { Box, Breadcrumbs, Container, Link, Typography, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import routePaths from '../../../constants/routePaths';
import type { Theme } from '../../../theme';
import FullServiceDirectory from './FullServiceDirectory';
import LeaveFullServiceRunning from './LeaveFullServiceRunning';
import LedgerStatus from './LedgerStatus';

const useStyles = makeStyles((theme: Theme) => ({
  cardContainer: {
    paddingBottom: 64,
    paddingTop: 8 * 4,
  },
  modal: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const ConfigureFullServiceView: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('ConfigureFullServiceView');

  return (
    <Container className={classes.cardContainer} maxWidth="sm">
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <Link color="inherit" to={routePaths.APP_SETTINGS} component={RouterLink}>
          <Typography color="textSecondary">{t('settingsBreadcrumb')}</Typography>
        </Link>
        <Typography color="textPrimary">{t('configureFullServiceBreadcrumb')}</Typography>
      </Breadcrumbs>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        my={3}
        flexDirection="column"
      >
        <Typography variant="body2" display="inline" color="textSecondary">
          {t('panelDescription')}
        </Typography>
        <Box py={1} />
        <Typography variant="body2" color="textSecondary">
          {t('daemonDescription')}
        </Typography>
        <Box py={1} />
        <Typography variant="body2" color="textSecondary">
          {t('daemonDescriptionContinued')}
        </Typography>
      </Box>
      <LedgerStatus />
      <LeaveFullServiceRunning />
      <FullServiceDirectory />
    </Container>
  );
};

export default ConfigureFullServiceView;
