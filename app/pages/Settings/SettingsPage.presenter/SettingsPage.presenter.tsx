import React, { useState } from 'react';
import type { FC } from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

import {
  KeyIcon,
  LockIcon,
  OfficialDocumentIcon,
  PrivateDocumentIcon,
  ToolsIcon,
} from '../../../components/icons';
import useFullService from '../../../hooks/useFullService';
import useFullServiceConfigs from '../../../hooks/useFullServiceConfigs';
import { changePassword, retrieveEntropy, setPin } from '../../../services';
import type { Theme } from '../../../theme';
import { getKeychainAccounts, setKeychainAccount } from '../../../utils/keytarService';
import { ChangePasswordView } from '../ChangePassword.view';
import { ChangePinView } from '../ChangePin.view';
import { ConfigureFullServiceView } from '../ConfigureFullService.view';
import { PrivacyPolicyView } from '../PrivacyPolicy.view';
import { RetrieveEntropyView } from '../RetrieveEntropy.view';
import { SettingsOptionsList } from '../SettingsOptionsList.view';
import { TermsOfUseView } from '../TermsOfUse.view';

const SETTINGS = 'settings';
const CHANGE_PASSWORD = 'changePassword';
const CHANGE_PIN = 'changePin';
const RETRIEVE_ENTROPY = 'retrieveEntropy';
const TERMS = 'terms';
const PRIVACY_POLICY = 'privacyPolicy';
const CONFIGURE_FULL_SERVICE = 'configureFullService';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const SettingsPage: FC = () => {
  const classes = useStyles();
  const [showing, setShowing] = useState(SETTINGS);
  const { pinThresholdPmob, pin, selectedAccount } = useFullService();

  const {
    ledgerDbPath,
    fullServiceDbPath,
    leaveFullServiceRunning,
    toggleLeaveFullServiceRunning,
  } = useFullServiceConfigs();
  const configureFullServiceConfigs = {
    fullServiceDbPath,
    leaveFullServiceRunning,
    ledgerDbPath,
    toggleLeaveFullServiceRunning,
  };

  const handleOnClick = (path: string) => {
    if (path) {
      setShowing(path);
    }
  };

  const accounts = getKeychainAccounts();

  const settingsOptionsList = [
    {
      Icon: LockIcon,
      handleOnClick,
      label: 'changePassword',
      path: CHANGE_PASSWORD,
    },
    {
      Icon: LockIcon,
      handleOnClick,
      label: 'changePin',
      path: CHANGE_PIN,
    },
    {
      Icon: KeyIcon,
      handleOnClick,
      label: 'retrieveEntropy',
      path: RETRIEVE_ENTROPY,
    },
    {
      Icon: OfficialDocumentIcon,
      handleOnClick,
      label: 'terms',
      path: TERMS,
    },
    {
      Icon: PrivateDocumentIcon,
      handleOnClick,
      label: 'privacyPolicy',
      path: PRIVACY_POLICY,
    },
    {
      Icon: ToolsIcon,
      handleOnClick,
      label: 'configureFullService',
      path: CONFIGURE_FULL_SERVICE,
    },
  ];

  const onClickBack = () => setShowing(SETTINGS);

  switch (showing) {
    case SETTINGS:
      return (
        <Box className={classes.root}>
          <Container maxWidth="md">
            <SettingsOptionsList
              settingOptionsList={settingsOptionsList}
              handleOnClick={handleOnClick}
            />
          </Container>
        </Box>
      );

    case CHANGE_PASSWORD:
      return (
        <ChangePasswordView
          accounts={accounts}
          onClickBack={onClickBack}
          changePassword={changePassword}
          setKeychainAccount={setKeychainAccount}
        />
      );

    case CHANGE_PIN:
      return (
        <ChangePinView
          onClickBack={onClickBack}
          pinThresholdPmob={pinThresholdPmob}
          pin={pin}
          setPin={setPin}
        />
      );

    case RETRIEVE_ENTROPY:
      return <RetrieveEntropyView onClickBack={onClickBack} retrieveEntropy={retrieveEntropy} />;

    case TERMS:
      return <TermsOfUseView onClickBack={onClickBack} />;

    case PRIVACY_POLICY:
      return <PrivacyPolicyView onClickBack={onClickBack} />;

    case CONFIGURE_FULL_SERVICE:
      return (
        <ConfigureFullServiceView
          onClickBack={onClickBack}
          selectedAccount={selectedAccount}
          configureFullServiceConfigs={configureFullServiceConfigs}
        />
      );

    default:
      return <Redirect to="-" />;
  }
};

export default SettingsPage;
export { SettingsPage };
