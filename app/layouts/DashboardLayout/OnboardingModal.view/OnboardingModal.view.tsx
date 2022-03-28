import React, { FC } from 'react';

import { SetPinModal } from '../SetPinModal.view';
import { ShowEntropyModal } from '../ShowEntropyModal.view';
import { OnboardingModalProps } from './OnboardingModal';

export const OnboardingModal: FC<OnboardingModalProps> = ({
  confirmEntropyKnown,
  isEntropyKnown,
  isPinRequired,
  pendingSecrets,
  updatePin,
}: OnboardingModalProps) => {
  const isShowEntropyModalShown = !isEntropyKnown;
  const isSetPinModalShown = isPinRequired;
  const mnemonic = pendingSecrets?.mnemonic || '';

  if (isShowEntropyModalShown) {
    return (
      <ShowEntropyModal
        isShown={isShowEntropyModalShown}
        mnemonic={mnemonic}
        confirmEntropyKnown={confirmEntropyKnown}
      />
    );
  }
  if (isSetPinModalShown) {
    return <SetPinModal isShown={isSetPinModalShown} onPinSubmit={updatePin} />;
  }
  return null;
};
