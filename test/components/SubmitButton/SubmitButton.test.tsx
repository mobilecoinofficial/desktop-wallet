import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { SubmitButton } from '../../../app/components';

describe('SubmitButton', () => {
  test('calls provided function when clicked', () => {
    const mockFunction = jest.fn();

    render(<SubmitButton isSubmitting={false} onClick={mockFunction} disabled={false} />);

    expect(mockFunction).toHaveBeenCalledTimes(0);

    fireEvent.click(screen.getByTestId('submit-button'));

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  test('does not call function when disabled', () => {
    const mockFunction = jest.fn();

    render(<SubmitButton isSubmitting={false} onClick={mockFunction} disabled />);

    expect(mockFunction).toHaveBeenCalledTimes(0);

    fireEvent.click(screen.getByTestId('submit-button'));

    expect(mockFunction).toHaveBeenCalledTimes(0);
  });

  test('does not call function when submitting', () => {
    const mockFunction = jest.fn();

    render(<SubmitButton isSubmitting={false} onClick={mockFunction} disabled />);

    expect(mockFunction).toHaveBeenCalledTimes(0);

    fireEvent.click(screen.getByTestId('submit-button'));

    expect(mockFunction).toHaveBeenCalledTimes(0);
  });

  test('does not call function when disabled and submitting', () => {
    const mockFunction = jest.fn();

    render(<SubmitButton isSubmitting onClick={mockFunction} disabled />);

    expect(mockFunction).toHaveBeenCalledTimes(0);

    fireEvent.click(screen.getByTestId('submit-button'));

    expect(mockFunction).toHaveBeenCalledTimes(0);
  });
});
