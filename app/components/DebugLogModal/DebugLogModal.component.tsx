import React from 'react';
import type { FC } from 'react';

import {
  Backdrop,
  Box,
  Button,
  Fade,
  IconButton,
  makeStyles,
  Modal,
  TextField,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next';

import type { Theme } from '../../theme';
import { MOBIcon } from '../icons';

export interface DebugLogModalProps {
  debugLog: string;
  onClose: () => void;
  onOpenLogsFolder: () => void;
  onSendReport: () => void;
  open: boolean;
  // state: { debugLog: string; open: boolean };
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    closeButton: {
      color: theme.palette.grey[500],
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
    },
    modal: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      maxHeight: '90%',
      padding: theme.spacing(2, 4, 3),
      position: 'relative',
      width: '90%',
    },
    root: {},
    title: {
      margin: 'auto 0',
      paddingLeft: '10px',
    },
  };
});

const DebugLogModal: FC<DebugLogModalProps> = ({
  debugLog,
  onClose,
  onOpenLogsFolder,
  onSendReport,
  open,
}: DebugLogModalProps) => {
  const classes = useStyles();
  const { t } = useTranslation('DebugLogModal');

  const handleClose = () => onClose();
  const handleSendLogs = () => onSendReport();
  const handleOpenLogsFolder = () => onOpenLogsFolder();

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
          <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <Box display="flex" flexDirection="row">
            <MOBIcon height={40} width={40} />
            <Typography className={classes.title} color="textPrimary" gutterBottom variant="h2">
              {t('debugLogs')}
            </Typography>
          </Box>
          <br />
          <Typography variant="body2" color="textSecondary">
            {t('title')}
          </Typography>
          <br />

          <TextField multiline defaultValue={debugLog} rowsMax={20} />
          <br />

          <Box display="flex" flexDirection="row" justifyContent="space-between">
            <Button color="secondary" onClick={handleSendLogs} type="submit" variant="contained">
              Send Logs
            </Button>
            <Button color="secondary" onClick={handleOpenLogsFolder}>
              Open Logs Folder
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default DebugLogModal;
