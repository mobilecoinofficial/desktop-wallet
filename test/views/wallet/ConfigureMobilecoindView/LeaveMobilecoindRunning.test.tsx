import React from 'react';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useMobilecoindConfigs from '../../../../app/hooks/useMobilecoindConfigs';
import LeaveMobilecoindRunning from '../../../../app/views/wallet/ConfigureMobilecoindView';
import renderSnapshot from '../../../renderSnapshot';

jest.mock('../../../../app/hooks/useMobilecoindConfigs');

function setupComponent(isLeaveMobilecoindRunning: boolean) {
  const mockToggleLeaveMobilecoindRunning = jest.fn();
  const mockUseMobilecoindConfigs = useMobilecoindConfigs as jest.MockedFunction<
    typeof useMobilecoindConfigs
  >;
  // @ts-ignore mock
  mockUseMobilecoindConfigs.mockImplementation(() => {
    return {
      leaveMobilecoindRunning: isLeaveMobilecoindRunning,
      toggleLeaveMobilecoindRunning: mockToggleLeaveMobilecoindRunning,
    };
  });
  renderSnapshot(<LeaveMobilecoindRunning />);

  // Render Elements
  const offQuery = screen.queryByText('Leave MobileCoinD Active is off');
  const onQuery = screen.queryByText('Leave MobileCoinD Active is on');
  const offDescriptionQuery = screen.queryByText(
    'MobileCoinD will not continue to sync when you exit the wallet.',
  );
  const onDescriptionQuery = screen.queryByText(
    'MobileCoinD will continue to sync when you exit the wallet.',
  );
  const toggleSwitch = screen.getByRole('checkbox') as HTMLInputElement;
  return {
    isLeaveMobilecoindRunning,
    mockToggleLeaveMobilecoindRunning,
    offDescriptionQuery,
    offQuery,
    onDescriptionQuery,
    onQuery,
    toggleSwitch,
  };
}

describe('LeaveMobilecoindRunning', () => {
  describe('when leaveMobilecoindRunning is false', () => {
    test('the CTA is to toggle it on', () => {
      const { offQuery, onQuery } = setupComponent(false);
      expect(offQuery).toBeInTheDocument();
      expect(onQuery).not.toBeInTheDocument();
    });

    test('the description is correct', () => {
      const { offDescriptionQuery, onDescriptionQuery } = setupComponent(false);
      expect(offDescriptionQuery).toBeInTheDocument();
      expect(onDescriptionQuery).not.toBeInTheDocument();
    });

    test('the switch is off', () => {
      const { toggleSwitch } = setupComponent(false);
      expect(toggleSwitch.checked).toBe(false);
    });
  });

  describe('when leaveMobilecoindRunning is true', () => {
    test('the CTA is to toggle it on', () => {
      const { offQuery, onQuery } = setupComponent(true);
      expect(offQuery).not.toBeInTheDocument();
      expect(onQuery).toBeInTheDocument();
    });

    test('the description is correct', () => {
      const { offDescriptionQuery, onDescriptionQuery } = setupComponent(true);
      expect(offDescriptionQuery).not.toBeInTheDocument();
      expect(onDescriptionQuery).toBeInTheDocument();
    });

    test('the switch is off', () => {
      const { toggleSwitch } = setupComponent(true);
      expect(toggleSwitch.checked).toBe(true);
    });
  });

  describe('toggle switch', () => {
    test('it calls toggleLeaveMobilecoindRunning on click', () => {
      const {
        mockToggleLeaveMobilecoindRunning,
        toggleSwitch,
      } = setupComponent(true);
      userEvent.click(toggleSwitch);
      expect(mockToggleLeaveMobilecoindRunning).toBeCalled();
    });
  });
});
