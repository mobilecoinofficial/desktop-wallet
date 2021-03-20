import React, { useState } from 'react';
import type { FC } from 'react';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { TIME_FOR_INACTIVITY, TIME_FOR_REACTION } from '../../constants/app';

let inactivityTimer: number;
let reactionTimer: number;

const InactivityDetect: FC = () => {
  const [inactiveTooLong, setInactiveTooLong] = useState(false);
  const { t } = useTranslation('InactivityDetect');

  const prepareForLogout = () => {
    setInactiveTooLong(true);
    document.onmousemove = null;
    document.onkeypress = null;
    reactionTimer = window.setTimeout(() => window.close(), TIME_FOR_REACTION);
  };

  const resetTimer = () => {
    if (inactivityTimer) {
      clearTimeout(inactivityTimer);
    }
    inactivityTimer = window.setTimeout(prepareForLogout, TIME_FOR_INACTIVITY);
  };

  const reenableTimer = () => {
    clearTimeout(reactionTimer);
    setInactiveTooLong(false);
    resetTimer();
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
  };

  document.onmousemove = resetTimer;
  document.onkeypress = resetTimer;
  resetTimer();

  return inactiveTooLong ? (
    <Dialog open={inactiveTooLong}>
      <DialogTitle id="alert-dialog-title">{t('title')}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {t('tooLong')}
          <br />
          {t('confirmToStay')}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={reenableTimer} color="primary" autoFocus>
          {t('keepWorking')}
        </Button>
      </DialogActions>
    </Dialog>
  ) : null;
};

export default InactivityDetect;
