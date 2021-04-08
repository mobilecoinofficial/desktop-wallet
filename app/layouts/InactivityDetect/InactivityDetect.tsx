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
import useFullService from '../../hooks/useFullService';

let inactivityTimer: number;
let reactionTimer: number;
let countdownTimer: number;

const InactivityDetect: FC = () => {
  const [inactiveTooLong, setInactiveTooLong] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [nowTime, setNowTime] = useState(0);
  const { selectedAccount } = useFullService();
  const { t } = useTranslation('InactivityDetect');

  let prepareForLogout = (): void | undefined => undefined; // to avoid "use before defining" ESLint complaint

  const resetTimer = () => {
    if (inactivityTimer) {
      clearTimeout(inactivityTimer);
    }
    inactivityTimer = window.setTimeout(prepareForLogout, TIME_FOR_INACTIVITY);
  };

  const reenableTimer = () => {
    clearTimeout(reactionTimer);
    clearTimeout(countdownTimer);
    setInactiveTooLong(false);
    resetTimer();
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
  };

  prepareForLogout = () => {
    const networkBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.networkBlockIndex);
    const localBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.localBlockIndex);
    const accountBlockIndexBigInt = BigInt(selectedAccount.balanceStatus.accountBlockIndex);
    const acceptableDiffBigInt = BigInt(2);
    const isSynced =
      networkBlockIndexBigInt >= accountBlockIndexBigInt &&
      networkBlockIndexBigInt >= localBlockIndexBigInt &&
      localBlockIndexBigInt >= accountBlockIndexBigInt &&
      networkBlockIndexBigInt - accountBlockIndexBigInt < acceptableDiffBigInt;

    if (isSynced) {
      setInactiveTooLong(true);
      document.onmousemove = null;
      document.onkeypress = null;
      reactionTimer = window.setTimeout(() => window.close(), TIME_FOR_REACTION);

      const now = new Date().valueOf();
      setStartTime(now);
      setNowTime(now);
      countdownTimer = window.setInterval(() => setNowTime(new Date().valueOf()), 500);
    } else {
      reenableTimer();
    }
  };

  const msecondsToMMSS = (ms: number) =>
    ms <= 0
      ? '00:00'
      : `${Math.floor(ms / 60_000)}:${String(Math.floor(100 + ((ms / 1000) % 60))).substr(1)}`;

  document.onmousemove = resetTimer;
  document.onkeypress = resetTimer;
  resetTimer();

  return inactiveTooLong ? (
    <Dialog open={inactiveTooLong}>
      <DialogTitle id="alert-dialog-title">{t('title')}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {t('tooLong')} {msecondsToMMSS(TIME_FOR_REACTION - (nowTime - startTime))}s
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
