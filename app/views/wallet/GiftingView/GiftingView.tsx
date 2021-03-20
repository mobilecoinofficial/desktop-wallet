import React, { ChangeEvent, useState } from 'react';
import type { FC } from 'react';

import { Box, Grid, makeStyles, Tab, Tabs } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import TabPanel from '../../../components/TabPanel';
import type { Theme } from '../../../theme';
import BuildGiftPanel from './BuildGiftPanel';
import ConsumeGiftPanel from './ConsumeGiftPanel';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
  },
}));

const GiftingView: FC = () => {
  const classes = useStyles();
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const { t } = useTranslation('GiftingView');

  const handleChange = (
    _event: ChangeEvent<Record<string, unknown>>,
    newSelectedTabIndex: number
  ) => {
    setSelectedTabIndex(newSelectedTabIndex);
  };

  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Tabs
            variant="fullWidth"
            value={selectedTabIndex}
            indicatorColor="secondary"
            textColor="secondary"
            onChange={handleChange}
          >
            <Tab label={t('giftMOB')} />
            <Tab label={t('openGift')} />
          </Tabs>
          <TabPanel
            panels={[BuildGiftPanel, ConsumeGiftPanel]}
            selectedTabIndex={selectedTabIndex}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GiftingView;
