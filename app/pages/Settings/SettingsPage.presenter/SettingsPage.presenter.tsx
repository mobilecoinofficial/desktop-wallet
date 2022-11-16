import React, { useState } from 'react';
import type { FC } from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';
import { ipcRenderer } from 'electron';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
  KeyIcon,
  LockIcon,
  MOBIcon,
  OfficialDocumentIcon,
  PrivateDocumentIcon,
  ToolsIcon,
} from '../../../components/icons';
import routePaths from '../../../constants/routePaths';
import useFullServiceConfigs from '../../../hooks/useFullServiceConfigs';
import { ReduxStoreState } from '../../../redux/reducers/reducers';
import {
  addAccount,
  deleteAccount,
  selectAccount,
  updatePassword,
  updatePin,
} from '../../../redux/services';
import { retrieveEntropy } from '../../../services';
import type { Theme } from '../../../theme';
import type { StringUInt64 } from '../../../types/SpecialStrings.d';
import { convertMobStringToPicoMobString } from '../../../utils/convertMob';
import { errorToString } from '../../../utils/errorHandler';
import { getKeychainAccounts, setKeychainAccount } from '../../../utils/keytarService';
import { AccountsView } from '../Accounts/Accounts.view';
import { ChangePasswordView } from '../ChangePassword.view';
import { ChangePinView } from '../ChangePin.view';
import { ConfigureFullServiceView } from '../ConfigureFullService.view';
import { PrivacyPolicyView } from '../PrivacyPolicy.view';
import { RetrieveEntropyView } from '../RetrieveEntropy.view';
import { SettingsOptionsList } from '../SettingsOptionsList.view';
import { TermsOfUseView } from '../TermsOfUse.view';

const SETTINGS = 'settings';
const ACCOUNTS = 'accounts';
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

export const SettingsPage: FC = (): JSX.Element => {
  const classes = useStyles();
  const {
    accounts,
    addingAccount,
    offlineModeEnabled,
    pinThresholdPmob,
    pin,
    selectedAccount,
    transactionLogs,
  } = useSelector((state: ReduxStoreState) => state);

  const [showing, setShowing] = useState(SETTINGS);
  const [entropy, setEntropy] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation('SettingsPage');

  const {
    ledgerDbPath,
    fullServiceBinariesPath,
    fullServiceDbPath,
    leaveFullServiceRunning,
    toggleLeaveFullServiceRunning,
  } = useFullServiceConfigs();

  const configureFullServiceConfigs = {
    fullServiceBinariesPath,
    fullServiceDbPath,
    leaveFullServiceRunning,
    ledgerDbPath,
    toggleLeaveFullServiceRunning,
  };

  const keychainAccounts = getKeychainAccounts();

  const handleOnClick = (path: string) => {
    if (path) {
      setShowing(path);
    }
  };

  const handlePasswordError = (message: string) => enqueueSnackbar(message, { variant: 'error' });

  const onClickChangePassword = async (
    password: string,
    newPassword: string,
    saveChecked: boolean
  ) => {
    try {
      if (saveChecked) {
        const currentAccount = keychainAccounts[0].account;
        await updatePassword(password, newPassword, handlePasswordError);
        setKeychainAccount(currentAccount, newPassword);
      } else {
        await updatePassword(password, newPassword, handlePasswordError);
      }
      enqueueSnackbar(t('changePasswordSuccess'), {
        variant: 'success',
      });
    } catch (err) {
      console.log('ERROR', err); // eslint-disable-line no-console
    }
  };

  const onClickChangePin = async (password: string, newPin: string, newThreshold: StringUInt64) => {
    try {
      await updatePin(newPin, convertMobStringToPicoMobString(newThreshold), password);
      /* istanbul ignore next */
      enqueueSnackbar(t('changePinSuccess'), { variant: 'success' });
    } catch (err) {
      enqueueSnackbar(errorToString(err), { variant: 'error' });
      console.log('ERROR!', err); // eslint-disable-line no-console
    }
  };

  const onClickRetrieveEntropy = async (password: string) => {
    try {
      const entropyString = await retrieveEntropy(password);

      if (typeof entropyString !== 'string') {
        throw new Error(t('error'));
      }
      setEntropy(entropyString);
    } catch (err) {
      enqueueSnackbar(errorToString(err), { variant: 'error' });
      console.log('ERROR!!!', err); // eslint-disable-line no-console
    }
  };

  const exportLedger = async () => {
    const success = await ipcRenderer.invoke('export-ledger-db');
    enqueueSnackbar(success ? 'Success' : 'Failure', { variant: success ? 'success' : 'error' });
  };

  const importLedger = async () => {
    const success = await ipcRenderer.invoke('import-ledger-db');
    enqueueSnackbar(success ? 'Success' : 'Failure', { variant: success ? 'success' : 'error' });
  };

  const exportTransactionHistory = async () => {
    const success = await ipcRenderer.invoke('export-transaction-history', transactionLogs);
    enqueueSnackbar(success ? 'Success' : 'Failure', { variant: success ? 'success' : 'error' });
  };

  const settingsOptionsList = [
    {
      Icon: MOBIcon,
      handleOnClick,
      label: 'accounts',
      path: ACCOUNTS,
    },
    // {
    //   Icon: LockIcon,
    //   handleOnClick,
    //   label: 'changePassword',
    //   path: CHANGE_PASSWORD,
    // },
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

  const onClickAddAccount = () => addAccount(true);
  if (addingAccount) {
    return <Redirect to={routePaths.ROOT} />;
  }

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

    case ACCOUNTS:
      return (
        <Box className={classes.root}>
          <Container maxWidth="md">
            <AccountsView
              accounts={accounts}
              deleteAccount={deleteAccount}
              onClickAddAccount={onClickAddAccount}
              onClickBack={onClickBack}
              selectAccount={selectAccount}
              selectedAccount={selectedAccount}
            />
          </Container>
        </Box>
      );

    case CHANGE_PASSWORD:
      return (
        <ChangePasswordView
          accounts={keychainAccounts}
          onClickBack={onClickBack}
          onClickChangePassword={onClickChangePassword}
        />
      );

    case CHANGE_PIN:
      return (
        <ChangePinView
          accounts={keychainAccounts}
          onClickBack={onClickBack}
          onClickChangePin={onClickChangePin}
          pinThresholdPmob={pinThresholdPmob}
          pin={pin}
        />
      );

    case RETRIEVE_ENTROPY:
      return (
        <RetrieveEntropyView
          accounts={keychainAccounts}
          entropy={entropy}
          onClickBack={onClickBack}
          onClickClose={() => setEntropy('')}
          onClickRetrieveEntropy={onClickRetrieveEntropy}
        />
      );

    case TERMS:
      return <TermsOfUseView onClickBack={onClickBack} />;

    case PRIVACY_POLICY:
      return <PrivacyPolicyView onClickBack={onClickBack} />;

    case CONFIGURE_FULL_SERVICE:
      return (
        <ConfigureFullServiceView
          onClickBack={onClickBack}
          exportLedger={exportLedger}
          exportTransactionHistory={exportTransactionHistory}
          importLedger={importLedger}
          offlineModeEnabled={offlineModeEnabled}
          selectedAccount={selectedAccount}
          configureFullServiceConfigs={configureFullServiceConfigs}
        />
      );

    default:
      return <Redirect to="-" />;
  }
};
