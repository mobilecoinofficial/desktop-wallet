import React, { ChangeEvent, useState } from 'react';
import type { FC } from 'react';

import { Box, Grid, makeStyles, Tab, Tabs } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import TabPanel from '../../../components/TabPanel';
import useFullService from '../../../hooks/useFullService';
import type { Theme } from '../../../theme';
import { ReceiveMob } from '../ReceiveMob.view';
import { SendMob } from '../SendMob.view';

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
  const {
    assignAddressForAccount,
    buildTransaction,
    contacts,
    pin: existingPin,
    pinThresholdPmob,
    selectedAccount,
    submitTransaction,
    updateContacts,
  } = useFullService();

  const { t } = useTranslation('TransactionView');

  const handleChange = (
    _event: ChangeEvent<Record<string, unknown>>,
    newSelectedTabIndex: number
  ) => {
    setSelectedTabIndex(newSelectedTabIndex);
  };

  const SendMobWithParams = () => (
    <SendMob
      assignAddressForAccount={assignAddressForAccount}
      buildTransaction={buildTransaction}
      contacts={contacts}
      existingPin={existingPin}
      pinThresholdPmob={pinThresholdPmob}
      selectedAccount={selectedAccount}
      submitTransaction={submitTransaction}
      updateContacts={updateContacts}
    />
  );

  const ReceiveMobWithParams = () => (
    <ReceiveMob contacts={contacts} selectedAccount={selectedAccount} />
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
