import React, { useRef } from 'react';
import type { FC } from 'react';

import { Box, Button, IconButton, makeStyles, TextField, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next';

import { MOBIcon } from '../../../components/icons';
import type { Theme } from '../../../theme';
import { CrashShowLogProps } from './CrashShowLog.d';

const useStyles = makeStyles((theme: Theme) => ({
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
}));

const CrashShowLog: FC<CrashShowLogProps> = ({
  errorLog,
  onClose,
  onSendReport,
}: CrashShowLogProps) => {
  const classes = useStyles();
  const { t } = useTranslation('CrashShowLog');
  const myTextRef = useRef<HTMLInputElement>();

  return (
    <Box className={classes.paper} display="flex" flexDirection="column">
      <IconButton
        aria-label="close"
        className={classes.closeButton}
        onClick={onClose}
        id="close-icon"
      >
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

      <TextField multiline defaultValue={errorLog} rowsMax={20} inputRef={myTextRef} />
      <br />

      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Button
          color="secondary"
          onClick={() => onSendReport((myTextRef.current as HTMLInputElement).value)}
          type="submit"
          variant="contained"
          id="send-button"
        >
          {t('sendLogsButton')}
        </Button>
      </Box>
    </Box>
  );
};

export default CrashShowLog;
export { CrashShowLog };
