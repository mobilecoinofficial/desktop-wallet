import React, { ChangeEvent, useState } from 'react';
import type { FC } from 'react';

import { Box, Grid, makeStyles, Tab, Tabs } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import TabPanel from '../../../components/TabPanel';
import useFullService from '../../../hooks/useFullService';
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

const GiftsPage: FC<unknown> = () => {
  const classes = useStyles();
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const { t } = useTranslation('GiftingView');

  const {
    // next ones for BuildGift
    deleteStoredGiftCodeB58,
    giftCodes,
    buildGiftCode,
    pin: existingPin,
    pinThresholdPmob,
    submitGiftCode,
    // next ones for ConsumeGift
    checkGiftCodeStatus,
    claimGiftCode,
    // next for both
    selectedAccount,
  } = useFullService();

  const handleChange = (
    _event: ChangeEvent<Record<string, unknown>>,
    newSelectedTabIndex: number
  ) => {
    setSelectedTabIndex(newSelectedTabIndex);
  };

  const BuildGift = () => (
    <BuildGiftPanel
      deleteStoredGiftCodeB58={deleteStoredGiftCodeB58}
      giftCodes={giftCodes}
      buildGiftCode={buildGiftCode}
      existingPin={existingPin as string}
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
