import React from 'react';
import type { FC } from 'react';

import { Box, Breadcrumbs, Container, Link, Typography, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import type { Theme } from '../../../theme';
import { ConfigureFullServiceViewProps } from './ConfigureFullService';
import { FullServiceDirectory } from './FullServiceDirectory.view';
import { LeaveFullServiceRunning } from './LeaveFullServiceRunning.view';
import { LedgerStatus } from './LedgerStatus.view';

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

const ConfigureFullServiceView: FC<ConfigureFullServiceViewProps> = ({
  configureFullServiceConfigs,
  onClickBack,
  selectedAccount,
}: ConfigureFullServiceViewProps) => {
  const classes = useStyles();
  const { t } = useTranslation('ConfigureFullServiceView');
  const {
    ledgerDbPath,
    fullServiceDbPath,
    leaveFullServiceRunning,
    toggleLeaveFullServiceRunning,
  } = configureFullServiceConfigs;

  return (
    <Container className={classes.cardContainer} maxWidth="sm">
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link color="inherit" onClick={onClickBack} component="button">
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
      <LedgerStatus selectedAccount={selectedAccount} />
      <LeaveFullServiceRunning
        leaveFullServiceRunning={leaveFullServiceRunning}
        toggleLeaveFullServiceRunning={toggleLeaveFullServiceRunning}
      />
      <FullServiceDirectory ledgerDbPath={ledgerDbPath} fullServiceDbPath={fullServiceDbPath} />
    </Container>
  );
};

export default ConfigureFullServiceView;
export { ConfigureFullServiceView };
