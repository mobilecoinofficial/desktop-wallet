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
  submitGiftCode,
} from '../../../services';
import type { Theme } from '../../../theme';
import isSyncedBuffered from '../../../utils/isSyncedBuffered';
import { BuildGiftPanel } from '../BuildGiftPanel.view';
import { ConsumeGiftPanel } from '../ConsumeGiftPanel.view';

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

const GiftsPage: FC = () => {
  const classes = useStyles();
  const { enqueueSnackbar = () => {} } = useSnackbar() || {};
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const { t } = useTranslation('GiftingView');
  const {
    giftCodes,
    pin: existingPin,
    pinThresholdPmob,
    // next for both
    selectedAccount,
  } = useFullService();

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
      codeClicked={handleCodeClicked}
      deleteStoredGiftCodeB58={deleteStoredGiftCodeB58}
      existingPin={existingPin as string}
      getAllGiftCodes={getAllGiftCodes}
      giftCodes={giftCodes}
      handleCopyClick={handleCodeClicked}
      isSyncedBuffered={isSyncedBuffered}
      pinThresholdPmob={pinThresholdPmob}
      selectedAccount={selectedAccount}
      submitGiftCode={submitGiftCode}
    />
  );

  const ConsumeGift = () => (
    <ConsumeGiftPanel
      checkGiftCodeStatus={checkGiftCodeStatus}
      claimGiftCode={claimGiftCode}
      selectedAccount={selectedAccount}
    />
  );

  useEffect(() => {
    getAllGiftCodes();
  }, []);

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
