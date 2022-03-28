import React, { FC } from 'react';

import { Backdrop, Box, Button, makeStyles, Modal, Typography } from '@material-ui/core';
import { ipcRenderer } from 'electron';
import { useTranslation } from 'react-i18next';

import { LogoIcon } from '../../../components/icons';
import type { Theme } from '../../../theme';
import { CrashShowLog } from '../CrashShowLog.view';

export interface CrashReportModalProps {
  open: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {},
}));

const handleQuitApplication = () => {
  console.log('Quitting...'); // eslint-disable-line no-console
  ipcRenderer.send('close-app');
};

export const CrashReportPage: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('CrashReportPage');
  const [openShowLog, setOpenShowLog] = React.useState(false);
  const [errorLog, setErrorLog] = React.useState('');

  const openLog = () => {
    setErrorLog(ipcRenderer.sendSync('get-error-log'));
    setOpenShowLog(true);
  };

  const closeLog = () => setOpenShowLog(false);

  const handleSendDebugLog = (text: string) => {
    console.log('Sending log somewhere, somehow...'); // eslint-disable-line no-console
    console.log(text); // eslint-disable-line no-console
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.paper} display="flex" flexDirection="column">
        <LogoIcon />
        <br />
        <Typography color="textPrimary" gutterBottom variant="h2">
          {t('uhOh')}
        </Typography>
        <br />
        <Typography variant="body2" color="textSecondary">
          {t('encounteredAnIssue')}
        </Typography>
        <br />
        <Typography variant="body2" color="textSecondary">
          {t('sendReport')}
        </Typography>
        <br />
        <Box>
          <Typography variant="body2" color="textSecondary" display="inline">
            {t('sendDebugLog')}
          </Typography>
          <Button color="primary" onClick={openLog}>
            {t('here')}
          </Button>
          <Typography variant="body2" color="textSecondary" display="inline">
            {t('sendDebugLog2')}
          </Typography>
        </Box>
        <br />
        <br />
        <Button
          color="secondary"
          onClick={handleQuitApplication}
          size="large"
          fullWidth
          type="submit"
          variant="contained"
        >
          {t('quitApplication')}
        </Button>
      </Box>
      <Modal
        className={classes.modal}
        open={openShowLog}
        onClose={closeLog}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
        disableAutoFocus
        disableEnforceFocus
      >
        <div style={{ width: '80%' }}>
          <CrashShowLog errorLog={errorLog} onClose={closeLog} onSendReport={handleSendDebugLog} />
        </div>
      </Modal>
    </Box>
  );
};
