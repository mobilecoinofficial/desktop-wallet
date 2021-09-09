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

import { InactivityDetectProps } from './InactivityDetect';

let inactivityTimer: number;
let reactionTimer: number;

const InactivityDetect: FC<InactivityDetectProps> = ({
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

export default InactivityDetect;
export { InactivityDetect };
