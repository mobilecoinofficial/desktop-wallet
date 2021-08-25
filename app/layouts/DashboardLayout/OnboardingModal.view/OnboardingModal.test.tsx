import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../../../testUtils/i18nForTests';

import { OnboardingModal } from './OnboardingModal.view';

const confirmEntropyKnown = jest.fn();
const setPin = jest.fn();

const ENTROPY_MSG =
  'We decrypted your Entropy and will now show you the code on your screen. Please store this code in a secure, private manner. You will need your Entropy to import this account into other wallets.';
const PIN_MSG =
  'Your Transaction PIN is used as an extra safety measure. It is required if a transaction value is higher than the threshold MOB amount.';

describe('OnboardingModal', () => {
  test('renders ShowEntropyModal when no stored entropy', () => {
    const { container } = render(
      <div>
        <OnboardingModal
          confirmEntropyKnown={confirmEntropyKnown}
          setPin={setPin}
          pendingSecrets={null}
          isEntropyKnown={false}
          isPinRequired
        />
      </div>
    );

    expect(container?.parentElement?.innerHTML.includes(ENTROPY_MSG)).toBeTruthy();
  });

  test('renders SetPinModal when pin is required', () => {
    const { container } = render(
      <OnboardingModal
        confirmEntropyKnown={confirmEntropyKnown}
        setPin={setPin}
        pendingSecrets={null}
        isEntropyKnown
        isPinRequired
      />
    );

    expect(container?.parentElement?.innerHTML.includes(PIN_MSG)).toBeTruthy();
  });

  test('renders neither when entropy is known and no pin is required', () => {
    const { container } = render(
      <OnboardingModal
        confirmEntropyKnown={confirmEntropyKnown}
        setPin={setPin}
        pendingSecrets={null}
        isEntropyKnown
        isPinRequired={false}
      />
    );

    expect(container?.parentElement?.innerHTML.includes(ENTROPY_MSG)).toBeFalsy();
    expect(container?.parentElement?.innerHTML.includes(PIN_MSG)).toBeFalsy();
  });
});
