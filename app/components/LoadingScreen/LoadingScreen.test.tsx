import React from 'react';

import { render } from '@testing-library/react';

import { LoadingScreen } from './LoadingScreen.view';

describe('LoadingScreen', () => {
  test('renders to screen when called', () => {
    const { asFragment } = render(<LoadingScreen />);
    expect(asFragment()).toMatchSnapshot();
  });
});
