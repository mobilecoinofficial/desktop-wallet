import React from 'react';
import type { FC } from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';

import {
  KeyIcon,
  LockIcon,
  OfficialDocumentIcon,
  PrivateDocumentIcon,
  ToolsIcon,
} from '../../../components/icons';
import routePaths from '../../../constants/routePaths';
import type { Theme } from '../../../theme';
import SettingsOptionsList from './SettingsOptionsList';

const settingsOptionsList = [
  {
    Icon: LockIcon,
    label: 'Change Password',
    path: routePaths.APP_SETTINGS_CHANGE_PASSWORD,
  },
  {
    Icon: KeyIcon,
    label: 'Retrieve Secret Entropy',
    path: routePaths.APP_SETTINGS_RETRIEVE_ENTROPY,
  },
  {
    Icon: OfficialDocumentIcon,
    label: 'Terms of Use',
    path: routePaths.APP_SETTINGS_TERMS_OF_USE,
  },
  {
    Icon: PrivateDocumentIcon,
    label: 'Privacy Policy',
    path: routePaths.APP_SETTINGS_PRIVACY_POLICY,
  },
  {
    Icon: ToolsIcon,
    label: 'Configure MobileCoinD',
    path: routePaths.APP_SETTINGS_CONFIGURE_MOBILECOIND,
  },
];

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      backgroundColor: theme.palette.background.dark,
      minHeight: '100%',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3),
    },
  };
});

const SettingsView: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="md">
        <SettingsOptionsList settingOptionsList={settingsOptionsList} />
      </Container>
    </Box>
  );
};

export default SettingsView;
