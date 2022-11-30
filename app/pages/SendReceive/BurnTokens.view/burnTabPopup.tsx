import React, { FC } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from '@material-ui/core';
import { useHotkeys } from 'react-hotkeys-hook';

export type BurnMenuState = 'off' | 'confirming' | 'enabled';

type BurnPopupProps = {
  burnMenuState: BurnMenuState;
  setBurnMenuState: (state: BurnMenuState) => void;
};

export const BurnTabPopup: FC<BurnPopupProps> = ({
  burnMenuState,
  setBurnMenuState,
}: BurnPopupProps): JSX.Element => {
  useHotkeys(
    'ctrl+shift+b+n',
    () => {
      if (burnMenuState === 'off') {
        setBurnMenuState('confirming');
      }
    },
    [burnMenuState]
  );

  return (
    <Dialog open={burnMenuState === 'confirming'}>
      <DialogTitle>
        <span style={{ fontSize: '24px' }}>Enable token burning?</span>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Burning tokens permanently destroys them. Once you burn a token you can never retreive it.
          Are you sure you want to enable token burning?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setBurnMenuState('off')}>Cancel</Button>
        <Button onClick={() => setBurnMenuState('enabled')} color="primary">
          Enable Burning
        </Button>
      </DialogActions>
    </Dialog>
  );
};
