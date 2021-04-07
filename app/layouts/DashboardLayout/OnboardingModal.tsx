import React from 'react';
import type { FC } from 'react';

import useFullService from '../../hooks/useFullService';
import SetPinModal from './SetPinModal';
import ShowEntropyModal from './ShowEntropyModal';

const OnboardingModal: FC = () => {
  const {
    confirmEntropyKnown,
    isEntropyKnown,
    isPinRequired,
    pendingSecrets,
    setPin,
  } = useFullService();

  const isShowEntropyModalShown = !isEntropyKnown;
  const isSetPinModalShown = isPinRequired;
  const mnemonic = pendingSecrets?.mnemonic || '';

  if (isShowEntropyModalShown) {
    return (
      <ShowEntropyModal
        isShown={isShowEntropyModalShown}
        mnemonic={mnemonic}
        onEntropyConfirmed={confirmEntropyKnown}
      />
    );
  }
  if (isSetPinModalShown) {
    return <SetPinModal isShown={isSetPinModalShown} onPinSubmit={setPin} />;
  }
  return null;
};

export default OnboardingModal;
