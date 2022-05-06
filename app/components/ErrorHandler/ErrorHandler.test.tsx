import React from 'react';

import { render } from '@testing-library/react';

import { ErrorHandler } from './ErrorHandler.view';

describe('ErrorHandler', () => {
  test('renders nothing to screen', () => {
    const { container } = render(<ErrorHandler />);

    expect(container.innerHTML).toBeFalsy();
  });
});
