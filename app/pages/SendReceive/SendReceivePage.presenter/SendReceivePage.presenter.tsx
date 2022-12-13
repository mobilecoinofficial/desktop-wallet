import React, { ChangeEvent, useState } from 'react';
import type { FC } from 'react';

import { Box, Grid, makeStyles, Tab, Tabs } from '@material-ui/core';
import { clipboard, ipcRenderer } from 'electron';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { useCurrentToken } from '../../../hooks/useCurrentToken';
import { ReduxStoreState } from '../../../redux/reducers/reducers';
import { updateContacts } from '../../../redux/services';
import { assignAddressForAccount, buildTransaction, submitTransaction } from '../../../services';
import type { Theme } from '../../../theme';
import { StringHex } from '../../../types';
import type { TxProposal } from '../../../types/TxProposal';
import { commafy, convertTokenValueToDisplayValue } from '../../../utils/convertMob';
import { errorToString } from '../../../utils/errorHandler';
import isSyncedBuffered from '../../../utils/isSyncedBuffered';
import { PaymentRequest } from '../PaymentRequests.view';
import { ReceiveMob } from '../ReceiveMob.view';
import { SendMob, Showing } from '../SendMob.view';

interface TxConfirmation {
  feeConfirmation: bigint;
  totalValueConfirmation: bigint;
  txProposal: TxProposal;
  txProposalReceiverB58Code: string;
}

const EMPTY_CONFIRMATION: TxConfirmation = {
  feeConfirmation: 0n,
  totalValueConfirmation: 0n,
  txProposal: {} as TxProposal,
  txProposalReceiverB58Code: '',
};

const useStyles = makeStyles((theme: Theme) => ({
  padding: {
    paddingBottom: theme.spacing(3),
  },
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
  },
}));

export const SendReceivePage: FC = (): JSX.Element => {
  const {
    contacts,
    pin: existingPin,
    offlineModeEnabled,
    fees,
    pinThresholdPmob,
    selectedAccount,
  } = useSelector((state: ReduxStoreState) => state);
  const token = useCurrentToken();

  const fee = fees[token.id];
  const classes = useStyles();
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [sendingStatus, setSendingStatus] = useState(Showing.INPUT_FORM);
  const [confirmation, setConfirmation] = useState(EMPTY_CONFIRMATION);
  const [includeAccountId, setIncludeAccountId] = useState(true);
  const [formIsChecked, setIsChecked] = useState(false);
  const [formAlias, setAlias] = useState('');
  const [formRecipientPublicAddress, setRecipientPublicAddress] = useState('');

  const networkBlockHeightBigInt = BigInt(selectedAccount.balanceStatus.networkBlockHeight ?? 0);
  const accountBlockHeightBigInt = BigInt(selectedAccount.balanceStatus.accountBlockHeight ?? 0);

  const isSynced = isSyncedBuffered(networkBlockHeightBigInt, accountBlockHeightBigInt);

  const { t } = useTranslation('TransactionView');
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (_event: ChangeEvent<HTMLElement>, newSelectedTabIndex: number) =>
    setSelectedTabIndex(newSelectedTabIndex);

  const handleCodeClicked = (code: string, text: string) => {
    clipboard.writeText(code);
    enqueueSnackbar(text, { variant: 'success' });
  };

  const saveToContacts = async () => {
    const randomColor = () => {
      const RANDOM_COLORS = ['#8B35E0', '#1F639A', '#EAA520', '#15A389', '#8D969D', '#D82E26'];
      return RANDOM_COLORS[Math.floor(RANDOM_COLORS.length * Math.random())];
    };

    const result = await assignAddressForAccount(selectedAccount.account.accountId as StringHex);

    contacts.push({
      abbreviation: formAlias[0].toUpperCase(),
      alias: formAlias,
      assignedAddress: result.address.publicAddressB58,
      color: randomColor(),
      id: uuidv4(),
      isFavorite: false,
      recipientAddress: formRecipientPublicAddress,
    });

    await updateContacts(contacts);
  };

  const onClickConfirm = (resetForm: () => void) => {
    try {
      // fk setSlideExitSpeed(1000);
      submitTransaction(confirmation.txProposal, includeAccountId);

      const totalValueConfirmationAsMob = convertTokenValueToDisplayValue(
        Number(confirmation.totalValueConfirmation),
        token
      );
      const totalValueConfirmationAsMobComma = commafy(`${totalValueConfirmationAsMob}`);
      if (formIsChecked) {
        saveToContacts();
      }
      enqueueSnackbar(`${t('sendSuccess')} ${totalValueConfirmationAsMobComma} ${token.name}!`, {
        variant: 'success',
      });
    } catch (err) {
      enqueueSnackbar(t('sendError'), { variant: 'error' });
    }
    resetForm();
    setConfirmation(EMPTY_CONFIRMATION);
    setSendingStatus(Showing.INPUT_FORM);
  };

  const onClickCancel = () => {
    setSendingStatus(Showing.INPUT_FORM);
    enqueueSnackbar(t('transactionCanceled'), { variant: 'warning' });
  };

  const onClickSend = async ({
    accountId,
    alias,
    isChecked,
    recipientPublicAddress,
    value,
  }: {
    accountId: string;
    alias: string;
    isChecked: boolean;
    recipientPublicAddress: StringHex;
    value: string;
  }) => {
    let result;

    setAlias(alias);
    setIsChecked(isChecked);
    setRecipientPublicAddress(recipientPublicAddress);

    try {
      result = await buildTransaction({
        accountId,
        addressesAndAmounts: [[recipientPublicAddress, { tokenId: `${token.id}`, value }]],
        feeValue: fee,
      });

      if (result === null || result === undefined) {
        throw new Error(t('sendBuildError'));
      }

      const { feeConfirmation, totalValueConfirmation, txProposal, txProposalReceiverB58Code } =
        result;

      setIncludeAccountId(true);

      setConfirmation({
        feeConfirmation,
        totalValueConfirmation,
        txProposal,
        txProposalReceiverB58Code,
      });
      setSendingStatus(Showing.CONFIRM_FORM);
    } catch (err) {
      const errorMessage = errorToString(err);
      enqueueSnackbar(errorMessage, { variant: 'error' });
    }
  };

  const saveTxConfirmation = async (resetForm: () => void) => {
    const confirmationText = JSON.stringify(confirmation, (key, value) =>
      typeof value === 'bigint' ? `${value.toString()}n` : value
    );
    const success = await ipcRenderer.invoke('save-tx-confirmation', confirmationText);

    if (success) {
      if (formIsChecked) {
        saveToContacts();
      }

      enqueueSnackbar(t('txConfirmationSaved'), { variant: 'success' });
      setConfirmation(EMPTY_CONFIRMATION);
      setSendingStatus(Showing.INPUT_FORM);
      resetForm();
    }
  };

  const importTxConfirmation = async () => {
    const txConfirmationText = await ipcRenderer.invoke('load-tx-confirmation');

    if (txConfirmationText === undefined) {
      return;
    }

    try {
      const txConfirmation = JSON.parse(txConfirmationText, (key, value) => {
        if (typeof value === 'string' && /^\d+n$/.test(value)) {
          return BigInt(value.substr(0, value.length - 1));
        }
        return value;
      }) as TxConfirmation;
      if (
        txConfirmation.feeConfirmation === undefined ||
        txConfirmation.totalValueConfirmation === undefined ||
        txConfirmation.txProposal === undefined ||
        txConfirmation.txProposalReceiverB58Code === undefined
      ) {
        throw new Error(t('invalidTransaction'));
      }
      setIncludeAccountId(false);
      setConfirmation(txConfirmation);
      setSendingStatus(Showing.CONFIRM_FORM);
    } catch (err) {
      const errorMessage = errorToString(err);
      enqueueSnackbar(errorMessage, { variant: 'error' });
    }
  };

  const onClickViewPaymentRequest = async ({
    accountId,
    recipientPublicAddress,
    valuePmob,
  }: {
    accountId: string;
    recipientPublicAddress: StringHex;
    valuePmob: string;
  }) => {
    try {
      const result = await buildTransaction({
        accountId,
        addressesAndAmounts: [
          [recipientPublicAddress, { tokenId: `${token.id}`, value: valuePmob }],
        ],
        feeValue: fee,
      });
      if (result === null || result === undefined) {
        throw new Error(t('sendBuildError'));
      }

      const { feeConfirmation, totalValueConfirmation, txProposal, txProposalReceiverB58Code } =
        result;
      setConfirmation({
        feeConfirmation,
        totalValueConfirmation,
        txProposal,
        txProposalReceiverB58Code,
      });
    } catch (err) {
      const errorMessage = errorToString(err);
      enqueueSnackbar(errorMessage, { variant: 'error' });
    }
  };

  const onClickCancelPaymentRequest = () => {
    setConfirmation(EMPTY_CONFIRMATION);
    enqueueSnackbar(t('transactionCanceled'), { variant: 'warning' });
  };

  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Tabs
            variant="fullWidth"
            value={selectedTabIndex}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            className={classes.padding}
          >
            <Tab label={t('send')} />
            <Tab label={t('receive')} />
            <Tab label={t('pay')} />
          </Tabs>
          {selectedTabIndex === 0 && (
            <SendMob
              confirmation={confirmation}
              contacts={contacts}
              existingPin={existingPin as string}
              importTxConfirmation={importTxConfirmation}
              isSynced={isSynced}
              offlineModeEnabled={offlineModeEnabled}
              onClickCancel={onClickCancel}
              onClickConfirm={onClickConfirm}
              onClickSend={onClickSend}
              pinThresholdPmob={parseFloat(pinThresholdPmob)}
              saveTxConfirmation={saveTxConfirmation}
              selectedAccount={selectedAccount}
              showing={sendingStatus}
            />
          )}
          {selectedTabIndex === 1 && (
            <ReceiveMob
              onClickCode={handleCodeClicked}
              contacts={contacts}
              selectedAccount={selectedAccount}
            />
          )}
          {selectedTabIndex === 2 && (
            <PaymentRequest
              onClickViewPaymentRequest={onClickViewPaymentRequest}
              selectedAccount={selectedAccount}
              confirmation={confirmation}
              existingPin={existingPin as string}
              fee={fee}
              isSynced={isSynced}
              onClickCancel={onClickCancelPaymentRequest}
              onClickConfirm={onClickConfirm}
              pinThresholdPmob={parseFloat(pinThresholdPmob)}
              showing={sendingStatus}
              enqueueSnackbar={enqueueSnackbar}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
