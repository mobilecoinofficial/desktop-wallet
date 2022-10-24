import React from 'react';
import type { FC } from 'react';

import { SetPinModal } from '../SetPinModal.view';
import { ShowEntropyModal } from '../ShowEntropyModal.view';
import { OnboardingModalProps } from './OnboardingModal';

const OnboardingModal: FC<OnboardingModalProps> = ({
  confirmEntropyKnown,
  isEntropyKnown,
  isPinRequired,
  updatePin,
}: OnboardingModalProps) => {
  const isShowEntropyModalShown = !isEntropyKnown;
  const isSetPinModalShown = isPinRequired;

  if (isShowEntropyModalShown) {
    return (
      <ShowEntropyModal
        isShown={isShowEntropyModalShown}
        confirmEntropyKnown={confirmEntropyKnown}
      />
    );
  }
  if (isSetPinModalShown) {
    return <SetPinModal isShown={isSetPinModalShown} onPinSubmit={updatePin} />;
  }
  return null;
};

export default OnboardingModal;
export { OnboardingModal };
