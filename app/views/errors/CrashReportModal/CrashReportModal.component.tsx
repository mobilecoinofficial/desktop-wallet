import React from 'react';
import type { FC } from 'react';

import { Backdrop, Box, Button, Fade, makeStyles, Modal, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { LogoIcon } from '../../../components/icons';
import type { Theme } from '../../../theme';
import debugLogger from '../../../utils/debugLogger.client';

export interface CrashReportModalProps {
  open: boolean;
}

const useStyles = makeStyles((theme: Theme) => {
  return {
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
  };
});

const CrashReportModal: FC<CrashReportModalProps> = ({ open }: CrashReportModalProps) => {
  const classes = useStyles();
  const { t } = useTranslation('CrashReportModal');

  const handleQuitApplication = () => {
    debugLogger.crashApplication();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 1000,
      }}
      disableAutoFocus
      disableEnforceFocus
    >
      <Fade in={open}>
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
            <Button
              color="primary"
              onClick={() => {
                debugLogger.openLogsFolder();
              }}
            >
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
            Quit Desktop Wallet
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CrashReportModal;
