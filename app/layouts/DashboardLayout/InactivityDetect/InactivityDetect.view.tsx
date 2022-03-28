import React, { useState, FC } from 'react';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { InactivityDetectProps } from './InactivityDetect';

let inactivityTimer: number;
let reactionTimer: number;

export const InactivityDetect: FC<InactivityDetectProps> = ({
  handleCloseApp,
  selectedAccount,
  TIME_FOR_INACTIVITY,
  TIME_FOR_REACTION,
}: InactivityDetectProps) => {
  const [inactiveTooLong, setInactiveTooLong] = useState(false);
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
    setInactiveTooLong(false);
    resetTimer();
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
  };

  prepareForLogout = () => {
    const networkBlockHeightBigInt = BigInt(selectedAccount.balanceStatus.networkBlockHeight ?? 0);
    const localBlockHeightBigInt = BigInt(selectedAccount.balanceStatus.localBlockHeight ?? 0);
    const accountBlockHeightBigInt = BigInt(selectedAccount.balanceStatus.accountBlockHeight ?? 0);
    const acceptableDiffBigInt = BigInt(2);
    const isSynced =
      networkBlockHeightBigInt >= accountBlockHeightBigInt &&
      networkBlockHeightBigInt >= localBlockHeightBigInt &&
      localBlockHeightBigInt >= accountBlockHeightBigInt &&
      networkBlockHeightBigInt - accountBlockHeightBigInt < acceptableDiffBigInt;

    if (isSynced) {
      setInactiveTooLong(true);
      document.onmousemove = null;
      document.onkeypress = null;
      reactionTimer = window.setTimeout(() => handleCloseApp(), TIME_FOR_REACTION);
    } else {
      reenableTimer();
    }
  };

  document.onmousemove = resetTimer;
  document.onkeypress = resetTimer;
  // resetTimer();

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
