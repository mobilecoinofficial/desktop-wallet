import React from 'react';

import { render, screen } from '@testing-library/react';

import { SplashScreen } from '../../../app/components';

describe('SplashScreen', () => {
  test('renders to screen when called', () => {
    render(<SplashScreen />);

    expect(screen.queryByTestId('splash-screen')).not.toBeNull();
  });
});
