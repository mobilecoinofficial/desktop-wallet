import React from 'react';

import { render } from '@testing-library/react';

import { GlobalStyles } from './GlobalStyles.view';

describe('GlobalStyles', () => {
  test('renders nothing to screen', () => {
    const { container } = render(<GlobalStyles />);

    expect(container.innerHTML).toBeFalsy();
  });
});
