import React, { ChangeEvent, useEffect, useState } from 'react';
import type { FC } from 'react';

import { Box, Grid, makeStyles, Tab, Tabs } from '@material-ui/core';
import { clipboard } from 'electron';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

import { TabPanel } from '../../../components/TabPanel';
import useFullService from '../../../hooks/useFullService';
import {
  assignAddressForAccount,
  buildTransaction,
  getFeePmob,
  submitTransaction,
  updateContacts,
} from '../../../services';
import type { Theme } from '../../../theme';
import type { StringHex } from '../../../types/SpecialStrings';
import type { TxProposal } from '../../../types/TxProposal';
import { commafy, convertPicoMobStringToMob } from '../../../utils/convertMob';
import isSyncedBuffered from '../../../utils/isSyncedBuffered';
import { ReceiveMob } from '../ReceiveMob.view';
import { SendMob, Showing } from '../SendMob.view';

const EMPTY_CONFIRMATION = {
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

const SendReceivePage: FC = () => {
  const classes = useStyles();
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [sendingStatus, setSendingStatus] = useState(Showing.INPUT_FORM);
  const [confirmation, setConfirmation] = useState(EMPTY_CONFIRMATION);
  const [formIsChecked, setIsChecked] = useState(false);
  const [formAlias, setAlias] = useState('');
  const [formRecipientPublicAddress, setRecipientPublicAddress] = useState('');

  const {
    contacts,
    pin: existingPin,
    feePmob,
    pinThresholdPmob,
    selectedAccount,
  } = useFullService();

  const networkBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.networkBlockIndex as string);
  const accountBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.accountBlockIndex as string);

  const isSynced = isSyncedBuffered(networkBlockIndexBigInt, accountBlockIndexBigInt);

  const { t } = useTranslation('TransactionView');
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (_event: ChangeEvent<HTMLElement>, newSelectedTabIndex: number) => {
    setSelectedTabIndex(newSelectedTabIndex);
  };

  const handleCodeClicked = (code: string, text: string) => {
    clipboard.writeText(code);
    enqueueSnackbar(text, {
      variant: 'success',
    });
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
      assignedAddress: result.address.publicAddress,
      color: randomColor(),
      isFavorite: false,
      recipientAddress: formRecipientPublicAddress,
    });

    await updateContacts(contacts);
  };

  const onClickConfirm = () => {
    try {
      // fk setSlideExitSpeed(1000);
      submitTransaction(confirmation.txProposal);

      const totalValueConfirmationAsMob = convertPicoMobStringToMob(
        confirmation.totalValueConfirmation.toString()
      );
      const totalValueConfirmationAsMobComma = commafy(totalValueConfirmationAsMob);
      if (formIsChecked) {
        saveToContacts();
      }
      enqueueSnackbar(`${t('success')} ${totalValueConfirmationAsMobComma} ${t('mob')}!`, {
        variant: 'success',
      });
      /*
        setStatus({ success: true });
        setSubmitting(false);
        resetForm();
        setIsAwaitingConformation(false);
      */
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      /* FK
      if (isMountedRef.current) {
        setStatus({ success: false });
        setErrors({ submit: err.message });
        setSubmitting(false);
        setIsAwaitingConformation(false);
      }
      */
    }
    setConfirmation(EMPTY_CONFIRMATION);
    setSendingStatus(Showing.INPUT_FORM);
  };

  const onClickCancel = () => {
    setSendingStatus(Showing.INPUT_FORM);
    enqueueSnackbar(t('transactionCanceled'), {
      variant: 'warning',
    });
  };

  const onClickSend = async ({
    accountId,
    alias,
    fee,
    isChecked,
    recipientPublicAddress,
    valuePmob,
  }) => {
    let result;

    setAlias(alias);
    setIsChecked(isChecked);
    setRecipientPublicAddress(recipientPublicAddress);

    try {
      result = await buildTransaction({ accountId, fee, recipientPublicAddress, valuePmob });

      if (result === null || result === undefined) {
        throw new Error('Could not build transaction.');
      }

      const {
        feeConfirmation,
        totalValueConfirmation,
        txProposal,
        txProposalReceiverB58Code,
      } = result;

      setConfirmation({
        feeConfirmation,
        totalValueConfirmation,
        txProposal,
        txProposalReceiverB58Code,
      });
      setSendingStatus(Showing.CONFIRM_FORM);
    } catch (e) {
      console.log('ERROR!', e);
    }

    /*

    } catch (err) {
      setStatus({ success: false });
      setErrors({ submit: err.message });
      setIsAwaitingConformation(false);
      setConfirmation(EMPTY_CONFIRMATION);
    }

    const {
      feeConfirmation,
      totalValueConfirmation,
      txProposal,
      txProposalReceiverB58Code,
    } = result;
    setConfirmation({
      feeConfirmation,
      totalValueConfirmation,
      txProposal,
      txProposalReceiverB58Code,
    });

    */
  };

  const SendMobWithParams = () => (
    <SendMob
      confirmation={confirmation}
      contacts={contacts}
      existingPin={existingPin as string}
      feePmob={feePmob || '0'}
      isSynced={isSynced}
      onClickCancel={onClickCancel}
      onClickConfirm={onClickConfirm}
      onClickSend={onClickSend}
      pinThresholdPmob={parseFloat(pinThresholdPmob)}
      selectedAccount={selectedAccount}
      showing={sendingStatus}
    />
  );

  const ReceiveMobWithParams = () => (
    <ReceiveMob
      onClickCode={handleCodeClicked}
      contacts={contacts}
      selectedAccount={selectedAccount}
    />
  );

  useEffect(getFeePmob, []);

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
          </Tabs>
          <TabPanel
            panels={[SendMobWithParams, ReceiveMobWithParams]}
            selectedTabIndex={selectedTabIndex}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SendReceivePage;
export { SendReceivePage };
