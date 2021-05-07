import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../../../testUtils/i18nForTests';

import { OnboardingModal } from './OnboardingModal.view';

const confirmEntropyKnown = jest.fn();
const setPin = jest.fn();
const pendingSecrets = null;
const showEntropyMsg =
  'We generated a random Entropy to create your new account. Please store this code in a secure, private manner. You will need your Entropy to import this account into other wallets.';
const setPinMsg =
  'Your Transaction PIN is used as an extra safety measure. It is required if a transaction value is higher than the threshold MOB amount.';

describe('OnboardingModal', () => {
  test('renders ShowEntropyModal when no stored entropy', () => {
    const { getByText } = render(
      <OnboardingModal
        confirmEntropyKnown={confirmEntropyKnown}
        setPin={setPin}
        pendingSecrets={pendingSecrets}
        isEntropyKnown={false}
        isPinRequired
      />
    );

    expect(getByText(showEntropyMsg)).toBeInTheDocument();
  });

  test('renders SetPinModal when pin is required', () => {
    const { getByText } = render(
      <OnboardingModal
        confirmEntropyKnown={confirmEntropyKnown}
        setPin={setPin}
        pendingSecrets={pendingSecrets}
        isEntropyKnown
        isPinRequired
      />
    );

    expect(getByText(setPinMsg)).toBeInTheDocument();
  });

  test('renders neither when entropy is known and no pin is required', () => {
    render(
      <OnboardingModal
        confirmEntropyKnown={confirmEntropyKnown}
        setPin={setPin}
        pendingSecrets={pendingSecrets}
        isEntropyKnown
        isPinRequired={false}
      />
    );

    const entropyModal = screen.queryByText(showEntropyMsg);
    const pinModal = screen.queryByText(setPinMsg);
    expect(entropyModal).toBeNull();
    expect(pinModal).toBeNull();
  });
});
