import React, { ChangeEvent, useEffect, useState } from 'react';
import type { FC } from 'react';

import { Box, Grid, makeStyles, Tab, Tabs } from '@material-ui/core';
import { clipboard } from 'electron';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

import { TabPanel } from '../../../components/TabPanel';
import useFullService from '../../../hooks/useFullService';
import {
  buildGiftCode,
  checkGiftCodeStatus,
  claimGiftCode,
  deleteStoredGiftCodeB58,
  getAllGiftCodes,
  getFeePmob,
  submitGiftCode,
} from '../../../services';
import type { Theme } from '../../../theme';
import type { TxProposal } from '../../../types/TxProposal';
import { convertMobStringToPicoMobString } from '../../../utils/convertMob';
import isSyncedBuffered from '../../../utils/isSyncedBuffered';
import { BuildGiftPanel } from '../BuildGiftPanel.view';
import { ConsumeGiftForm } from '../ConsumeGiftForm.view';

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

// CBB: Shouldn't have to use this hack to get around state issues
const EMPTY_CONFIRMATION_CONSUME = {
  giftCodeB58: '',
  giftCodeStatus: '',
  giftValue: 0,
};

const EMPTY_CONFIRMATION_BUILD = {
  feeConfirmation: 0n,
  giftCodeB58: '',
  totalValueConfirmation: 0n,
  txProposal: {} as TxProposal,
};

const GiftsPage: FC = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [showModalBuild, setShowModalBuild] = useState(false);
  const [showModalConsume, setShowModalConsume] = useState(false);
  const [confirmationBuild, setConfirmationBuild] = useState(EMPTY_CONFIRMATION_BUILD);
  const [confirmationConsume, setConfirmationConsume] = useState(EMPTY_CONFIRMATION_CONSUME);

  const { t } = useTranslation('GiftingView');
  const {
    accounts,
    feePmob,
    giftCodes,
    pin: existingPin,
    pinThresholdPmob,
    // next for both
    selectedAccount,
  } = useFullService();

  const networkBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.networkBlockIndex as string);
  const accountBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.accountBlockIndex as string);

  const isSynced = isSyncedBuffered(networkBlockIndexBigInt, accountBlockIndexBigInt);

  const handleChange = (_event: ChangeEvent<HTMLElement>, newSelectedTabIndex: number) => {
    setSelectedTabIndex(newSelectedTabIndex);
  };

  const handleCodeClicked = (code: string, text: string) => {
    clipboard.writeText(code);
    if (text) {
      enqueueSnackbar(text, { variant: 'success' });
    }
  };

  const onClickCreateGift = async (mobValue: string, feeAmount: string) => {
    try {
      const adjustedValue = Number(mobValue) + Number(feeAmount);

      const result = await buildGiftCode({
        accountId: selectedAccount.account.accountId,
        valuePmob: convertMobStringToPicoMobString(String(adjustedValue)),
      });

      if (result === null || result === undefined) {
        throw new Error(t('errorBuild'));
      }

      const { feeConfirmation, giftCodeB58, totalValueConfirmation, txProposal } = result;

      setConfirmationBuild({
        feeConfirmation,
        giftCodeB58,
        totalValueConfirmation,
        txProposal,
      });

      setShowModalBuild(true);
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
    }
  };

  const onClickCancelBuild = () => {
    setShowModalBuild(false);
    setConfirmationBuild(EMPTY_CONFIRMATION_BUILD);
    enqueueSnackbar(t('giftCanceled'), { variant: 'warning' });
  };

  const onClickConfirmBuild = async () => {
    setShowModalBuild(false);
    try {
      if (confirmationBuild.txProposal === null || confirmationBuild.txProposal === undefined) {
        throw new Error(t('confirmationNotFound'));
      }
      await submitGiftCode({
        fromAccountId: selectedAccount.account.accountId,
        giftCodeB58: confirmationBuild.giftCodeB58,
        txProposal: confirmationBuild.txProposal,
      });

      await getAllGiftCodes();
      enqueueSnackbar(t('giftCreated'), { variant: 'success' });
    } catch (err) {
      enqueueSnackbar(t('errorCreate'), { variant: 'error' });
    }
    setConfirmationBuild(EMPTY_CONFIRMATION_BUILD);
  };

  const onClickDeleteGiftCodeBuild = async (giftCode: string) => {
    try {
      await deleteStoredGiftCodeB58(giftCode);
      enqueueSnackbar(t('giftDeleted'), { variant: 'success' });
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
    }
    getAllGiftCodes();
  };

  const BuildGift = () => (
    <BuildGiftPanel
      accounts={accounts}
      buildGiftCode={buildGiftCode}
      confirmation={confirmationBuild}
      deleteStoredGiftCodeB58={deleteStoredGiftCodeB58}
      existingPin={existingPin as string}
      feePmob={feePmob || '0'}
      getAllGiftCodes={getAllGiftCodes}
      giftCodes={giftCodes}
      handleCopyClick={handleCodeClicked}
      isSynced={isSynced}
      onClickCancelBuild={onClickCancelBuild}
      onClickCode={handleCodeClicked}
      onClickConfirmBuild={onClickConfirmBuild}
      onClickCreateGift={onClickCreateGift}
      onClickDeleteGiftCode={onClickDeleteGiftCodeBuild}
      pinThresholdPmob={pinThresholdPmob}
      selectedAccount={selectedAccount}
      showModal={showModalBuild}
      submitGiftCode={submitGiftCode}
    />
  );

  const onClickCancelConsume = () => {
    setShowModalConsume(false);
    enqueueSnackbar(t('giftCanceled'), { variant: 'warning' });
  };

  const onClickOpenGiftConsume = async (giftCodeB58: string) => {
    try {
      const result = await checkGiftCodeStatus({ giftCodeB58 });
      if (result === null || result === undefined) {
        throw new Error(t('giftB58Error'));
      }

      const { giftCodeStatus, giftCodeValue } = result;

      setConfirmationConsume({
        giftCodeB58,
        giftCodeStatus,
        giftValue: giftCodeValue,
      });

      if (giftCodeStatus === 'GiftCodeAvailable') {
        setShowModalConsume(true);
      } else {
        if (giftCodeStatus === 'GiftCodeSubmittedPending') {
          enqueueSnackbar(t('giftB58Error'), { variant: 'warning' });
        }

        if (giftCodeStatus === 'GiftCodeClaimed') {
          enqueueSnackbar(t('giftPreviouslyClaimed'), { variant: 'warning' });
        }
      }
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'warning' });
    }
  };

  const onClickClaimGiftConsume = async () => {
    try {
      await claimGiftCode({
        accountId: selectedAccount.account.accountId,
        giftCodeB58: confirmationConsume.giftCodeB58,
      });

      enqueueSnackbar(t('giftConsumed'), { variant: 'success' });
    } catch (err) {
      enqueueSnackbar(t('giftConsumeError'), { variant: 'error' });
    }

    setShowModalConsume(false);
  };

  const ConsumeGift = () => (
    <ConsumeGiftForm
      confirmation={confirmationConsume}
      feePmob={feePmob || '0'}
      onClickCancel={onClickCancelConsume}
      onClickClaimGift={onClickClaimGiftConsume}
      onClickOpenGift={onClickOpenGiftConsume}
      selectedAccount={selectedAccount}
      showModal={showModalConsume}
    />
  );

  useEffect(getAllGiftCodes, []);
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
            <Tab label={t('tabs.createGift')} />
            <Tab label={t('tabs.openGift')} />
          </Tabs>
          <TabPanel panels={[BuildGift, ConsumeGift]} selectedTabIndex={selectedTabIndex} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GiftsPage;
export { GiftsPage };
