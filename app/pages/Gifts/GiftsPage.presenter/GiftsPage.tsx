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
const EMPTY_CONFIRMATION = {
  giftCodeB58: '',
  giftCodeStatus: '',
  giftValue: 0,
};

const GiftsPage: FC = () => {
  const classes = useStyles();
  const { enqueueSnackbar = () => {} } = useSnackbar() || {};
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [showModalConsume, setShowModalConsume] = useState(false);
  const [confirmation, setConfirmation] = useState(EMPTY_CONFIRMATION);

  const { t } = useTranslation('GiftingView');
  const {
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
      enqueueSnackbar(text, {
        variant: 'success',
      });
    }
  };

  const BuildGift = () => (
    <BuildGiftPanel
      buildGiftCode={buildGiftCode}
      onClickCode={handleCodeClicked}
      deleteStoredGiftCodeB58={deleteStoredGiftCodeB58}
      existingPin={existingPin as string}
      feePmob={feePmob || '0'}
      getAllGiftCodes={getAllGiftCodes}
      giftCodes={giftCodes}
      handleCopyClick={handleCodeClicked}
      isSynced={isSynced}
      pinThresholdPmob={pinThresholdPmob}
      selectedAccount={selectedAccount}
      submitGiftCode={submitGiftCode}
    />
  );

  const onClickCancelConsume = () => {
    setShowModalConsume(false);
    enqueueSnackbar(t('giftCanceled'), {
      variant: 'warning',
    });
  };

  const onClickOpenGiftConsume = async (giftCodeB58) => {
    try {
      const result = await checkGiftCodeStatus({ giftCodeB58 });
      if (result === null || result === undefined) {
        throw new Error(t('giftB58Error'));
      }

      const { giftCodeStatus, giftCodeValue } = result;

      setConfirmation({
        giftCodeB58,
        giftCodeStatus,
        giftValue: giftCodeValue,
      });

      if (giftCodeStatus === 'GiftCodeAvailable') {
        setShowModalConsume(true);
      } else {
        if (giftCodeStatus === 'GiftCodeSubmittedPending') {
          enqueueSnackbar(t('giftB58Error'), {
            variant: 'warning',
          });
        }

        if (giftCodeStatus === 'GiftCodeClaimed') {
          enqueueSnackbar(t('giftClaimed'), {
            variant: 'warning',
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onClickClaimGiftConsume = async () => {
    try {
      await claimGiftCode({
        accountId: selectedAccount.account.accountId,
        giftCodeB58: confirmation.giftCodeB58,
      });

      enqueueSnackbar(t('confirmation'), {
        variant: 'success',
      });
    } catch (err) {
      enqueueSnackbar(t('error'), {
        variant: 'error',
      });
    }

    setShowModalConsume(false);
  };

  const ConsumeGift = () => (
    <ConsumeGiftForm
      confirmation={confirmation}
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
