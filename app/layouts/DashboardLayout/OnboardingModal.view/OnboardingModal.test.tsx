import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../../../testUtils/i18nForTests';
import { Provider } from 'react-redux';

import { store } from '../../../redux/store';
import { OnboardingModal } from './OnboardingModal.view';

const confirmEntropyKnown = jest.fn();
const updatePin = jest.fn();
const pendingSecrets = null;
const showEntropyMsg =
  'We generated a random Entropy to create your new account. Please store this code in a secure, private manner. You will need your Entropy to import this account into other wallets.';
const setPinMsg =
  'Your Transaction PIN is used as an extra safety measure. It is required if a transaction value is higher than the threshold MOB amount.';

describe('OnboardingModal', () => {
  test('renders ShowEntropyModal when no stored entropy', () => {
    const { getByText } = render(
      <Provider store={store}>
        <OnboardingModal
          confirmEntropyKnown={confirmEntropyKnown}
          updatePin={updatePin}
          pendingSecrets={pendingSecrets}
          isEntropyKnown={false}
          isPinRequired
        />
      </Provider>
    );

    expect(getByText(showEntropyMsg)).toBeInTheDocument();
  });

  test('renders SetPinModal when pin is required', () => {
    const { getByText } = render(
      <Provider store={store}>
        <OnboardingModal
          confirmEntropyKnown={confirmEntropyKnown}
          updatePin={updatePin}
          pendingSecrets={pendingSecrets}
          isEntropyKnown
          isPinRequired
        />
      </Provider>
    );

    expect(getByText(setPinMsg)).toBeInTheDocument();
  });

  test('renders neither when entropy is known and no pin is required', () => {
    render(
      <Provider store={store}>
        <OnboardingModal
          confirmEntropyKnown={confirmEntropyKnown}
          updatePin={updatePin}
          pendingSecrets={pendingSecrets}
          isEntropyKnown
          isPinRequired={false}
        />
      </Provider>
    );

    const entropyModal = screen.queryByText(showEntropyMsg);
    const pinModal = screen.queryByText(setPinMsg);
    expect(entropyModal).toBeNull();
    expect(pinModal).toBeNull();
  });
});
