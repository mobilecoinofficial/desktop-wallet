import React from 'react';

import { SplashScreen } from '../../../app/components';
import renderSnapshot from '../../renderSnapshot';

describe('SplashScreen', () => {
  test('renders to screen when called', () => {
    const { asFragment } = renderSnapshot(<SplashScreen />);
    expect(asFragment()).toMatchSnapshot();
  });
});
