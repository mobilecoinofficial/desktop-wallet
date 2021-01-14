import React from 'react';
import type { FC } from 'react';

import {
  Box, Grid, makeStyles, Tab, Tabs,
} from '@material-ui/core';

import TabPanel from '../../../components/TabPanel';
import type { Theme } from '../../../theme';
import BuildGiftPanel from './BuildGiftPanel';
import ConsumeGiftPanel from './ConsumeGiftPanel';

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      backgroundColor: theme.palette.background.dark,
      minHeight: '100%',
      paddingBottom: theme.spacing(3),
    },
  };
});

const GiftingView: FC = () => {
  const classes = useStyles();
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);

  const handleChange = (
    _event: React.ChangeEvent<Record<string, unknown>>,
    newSelectedTabIndex: number,
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
            <Tab label="Gift MOB" />
            <Tab label="Open Gift" />
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
