import React from 'react';

import 'jest-canvas-mock';
import { render } from '@testing-library/react';

import { QRMob } from './QRMob.view';

describe('QRMob', () => {
  test('renders to screen when called', () => {
    const { asFragment } = render(<QRMob size={280} value="mob:///b58/b58code" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
