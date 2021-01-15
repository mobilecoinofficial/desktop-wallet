/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import useMobilecoindConfigs from '../../../../app/hooks/useMobilecoindConfigs';
import LeaveMobilecoindRunning from '../../../../app/views/wallet/ConfigureMobilecoindView';

jest.mock('../../../../app/hooks/useMobilecoindConfigs');

function setupComponent() {
  const mockLeaveMobilecoindRunning = jest.fn();
  const mockToggleLeaveMobilecoindRunning = jest.fn();
  const mockUseMobilecoindConfigs = useMobilecoindConfigs as jest.MockedFunction<
    typeof useMobilecoindConfigs
  >;

  // @ts-ignore mock
  mockUseMobilecoindConfigs.mockImplementation(() => {
    return {
      leaveMobilecoindRunning: mockLeaveMobilecoindRunning,
      toggleLeaveMobilecoindRunning: mockToggleLeaveMobilecoindRunning,
    };
  });
  return {
    mockLeaveMobilecoindRunning,
    mockToggleLeaveMobilecoindRunning,
  };
}

describe('LeaveMobilecoindRunning', () => {
  test('Leave Mobilecoind Running View renders', () => {
    setupComponent();
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <LeaveMobilecoindRunning />
      </Router>
    );

    expect(
      screen.getByText(/MobileCoinD Background Process/i)
    ).toBeInTheDocument();
  });

  test('toggleLeaveMobilecoindRunning should change state', () => {
    const { mockLeaveMobilecoindRunning } = setupComponent();
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <LeaveMobilecoindRunning />
      </Router>
    );
    expect(mockLeaveMobilecoindRunning).toBeFalsy;
    expect(screen.queryByText('Leave MobileCoinD Active is on'))
      .toBeInTheDocument;

    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.queryByText('Leave MobileCoinD Active is off'))
      .toBeInTheDocument;
  });
});
