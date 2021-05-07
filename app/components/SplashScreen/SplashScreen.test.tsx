import React from 'react';

import { render } from '@testing-library/react';

import { SplashScreen } from './SplashScreen.view';

describe('SplashScreen', () => {
  test('renders to screen when called', () => {
    const { asFragment } = render(<SplashScreen />);
    expect(asFragment()).toMatchSnapshot();
  });
});
