import React from 'react';

import { screen, render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { TOKENS } from '../../constants/tokens';
import { MOBNumberFormat } from './MOBNumberFormat.view';

describe('MOBNumberFormat', () => {
  test('renders formatted pMob value', () => {
    render(<MOBNumberFormat value="10" token={TOKENS.MOB} prefix="+" suffix="received" />);

    expect(screen.getByText('+0.000000000010received')).toBeInTheDocument();
  });

  test('formats numbers greater than pMOB desired length to decimal scale of 12', () => {
    render(
      <MOBNumberFormat
        value="1.000000000000000"
        convert={false}
        token={TOKENS.MOB}
        prefix="-"
        suffix="sent"
      />
    );

    expect(screen.getByText('-1.000000000000sent')).toBeInTheDocument();
  });
});
