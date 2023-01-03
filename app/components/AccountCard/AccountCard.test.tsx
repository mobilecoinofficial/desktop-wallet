/* eslint-disable jest/no-commented-out-tests */
import React from 'react';

import 'jest-canvas-mock';
import { screen, render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';

import { store } from '../../redux/store';
import { AccountCard } from './AccountCard.view';
import '@testing-library/jest-dom/extend-expect';
import '../../testUtils/i18nForTests';

const MOCK_LONG_CODE = 'mockLongCode';

const ACCOUNTS = {
  accountIds: ['ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8'],
  accountMap: {
    ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8: {
      accountId: 'ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8',
      firstBlockIndex: '0',
      keyDerivationVersion: '1',
      mainAddress:
        'syJAd2QoH7xSkZvMDV8Q6DdWhnRsmAKqx3LZ5BaLXKezCDjf6nUfps2b8ywm1scSMp5WDbYxNMu5mNniVkmb1fehAGaKQdNQWEEg4vHrCH',
      name: 'FK OWN',
      nextBlockIndex: '161411',
      nextSubaddressIndex: '2',
      object: 'account',
      recoveryMode: false,
    },
  },
};

function setupComponent(props?) {
  const { container } = render(
    <SnackbarProvider>
      <Provider store={store}>
        <AccountCard
          account={{
            ...{
              b58Code: MOCK_LONG_CODE,
              balance: 'one million',
            },
            ...props,
          }}
          accounts={ACCOUNTS}
        />
      </Provider>
    </SnackbarProvider>
  );
  return container;
}

describe('AccountCard', () => {
  test('renders long code with tooltip by default and toggles correctly', async () => {
    setupComponent();

    expect(screen.queryByTestId('account-card-center')).not.toBeNull();
    expect(screen.queryByTestId('long-code-code')).not.toBeNull();
    expect(screen.queryByTestId('account-card-tooltip')).toHaveAttribute(
      'title',
      'Click to copy to clipboard'
    );
    expect(screen.queryByTestId('account-card-qr-code')).toBeNull();

    await act(async () => userEvent.click(screen.getByTestId('account-card-toggle')));

    expect(screen.queryByTestId('long-code-code')).toBeNull();
    expect(screen.queryByTestId('account-card-tooltip')).toBeNull();
    expect(screen.queryByTestId('account-card-qr-code')).not.toBeNull();
  });

  test('renders name correctly', () => {
    setupComponent();
    expect(screen.getByTestId('account-card-name').textContent).toEqual('FK OWN');
  });

  test('renders correct toggle tooltip', () => {
    setupComponent();

    const toggle = screen.getByTestId('account-card-toggle');

    expect(toggle).toHaveAttribute('title', 'Show MOB URL QR Code');

    userEvent.click(screen.getByTestId('account-card-toggle'));

    expect(toggle).toHaveAttribute('title', 'Show account address code');
  });

  // test('copies LongCode to clipboard and shows success message', async () => {
  //   setupComponent();

  //   userEvent.click(screen.getByTestId('account-card-tooltip'));

  //   await waitFor(() => expect(screen.getByText('Address code copied to clipboard.')).toBeInTheDocument());
  // });
});
