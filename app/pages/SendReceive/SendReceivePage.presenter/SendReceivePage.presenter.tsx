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
import isSyncedBuffered from '../../../utils/isSyncedBuffered';
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
    contacts,
    pin: existingPin,
    feePmob,
    pinThresholdPmob,
    selectedAccount,
  } = useFullService();

  const { t } = useTranslation('TransactionView');
  const { enqueueSnackbar = () => {} } = useSnackbar() || {};

  const handleChange = (_event: ChangeEvent<HTMLElement>, newSelectedTabIndex: number) => {
    setSelectedTabIndex(newSelectedTabIndex);
  };

  const handleCodeClicked = (code: string, text: string) => {
    clipboard.writeText(code);
    enqueueSnackbar(text, {
      variant: 'success',
    });
  };

  const SendMobWithParams = () => (
    <SendMob
      assignAddressForAccount={assignAddressForAccount}
      buildTransaction={buildTransaction}
      contacts={contacts}
      existingPin={existingPin as string}
      feePmob={feePmob || '0'}
      isSyncedBuffered={isSyncedBuffered}
      pinThresholdPmob={parseFloat(pinThresholdPmob)}
      selectedAccount={selectedAccount}
      submitTransaction={submitTransaction}
      updateContacts={updateContacts}
    />
  );

  const ReceiveMobWithParams = () => (
    <ReceiveMob
      codeClicked={handleCodeClicked}
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
