import React from 'react';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useFullServiceConfigs from '../../../../app/hooks/useFullServiceConfigs';
import LeaveFullServiceRunning from '../../../../app/views/wallet/ConfigureFullServiceView';
import renderSnapshot from '../../../renderSnapshot';

jest.mock('../../../../app/hooks/useFullServiceConfigs');

function setupComponent(isLeaveFullServiceRunning: boolean) {
  const mockToggleLeaveFullServiceRunning = jest.fn();
  const mockUseFullServiceConfigs = useFullServiceConfigs as jest.MockedFunction<
    typeof useFullServiceConfigs
  >;
  // @ts-ignore mock
  mockUseFullServiceConfigs.mockImplementation(() => ({
    leaveFullServiceRunning: isLeaveFullServiceRunning,
    toggleLeaveFullServiceRunning: mockToggleLeaveFullServiceRunning,
  }));
  renderSnapshot(<LeaveFullServiceRunning />);

  // Render Elements
  const offQuery = screen.queryByText('Leave FullService Active is off');
  const onQuery = screen.queryByText('Leave FullService Active is on');
  const offDescriptionQuery = screen.queryByText(
    'FullService will not continue to sync when you exit the wallet.'
  );
  const onDescriptionQuery = screen.queryByText(
    'FullService will continue to sync when you exit the wallet.'
  );
  const toggleSwitch = screen.getByRole('checkbox') as HTMLInputElement;
  return {
    isLeaveFullServiceRunning,
    mockToggleLeaveFullServiceRunning,
    offDescriptionQuery,
    offQuery,
    onDescriptionQuery,
    onQuery,
    toggleSwitch,
  };
}

describe('LeaveFullServiceRunning', () => {
  describe('when leaveFullServiceRunning is false', () => {
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

  describe('when leaveFullServiceRunning is true', () => {
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
    test('it calls toggleLeaveFullServiceRunning on click', () => {
      const { mockToggleLeaveFullServiceRunning, toggleSwitch } = setupComponent(true);
      userEvent.click(toggleSwitch);
      expect(mockToggleLeaveFullServiceRunning).toBeCalled();
    });
  });
});
