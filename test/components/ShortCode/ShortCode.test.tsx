import React from 'react';

import { render, screen } from '@testing-library/react';

import ShortCode from '../../../app/components/ShortCode';

describe('ShortCode', () => {
  test('renders the correct short code', () => {
    const mockCode =
      'dx6H3G2PJtmlcQDtBun3wRzw0lUkR5iqcIu7mGAZsfgi69X43u25VARu1ewpqy54siUae8kQcdLdA9tShh712qpZnAMicizvJ9s';
    render(<ShortCode code={mockCode} />);

    const shortCode = screen.getByTestId('short-code');
    expect(shortCode.textContent).toEqual('dx-6H-vJ-9s');
  });

  test('Renders nothing if code is too short', () => {
    render(<ShortCode code="" />);

    const shortCode = screen.getByTestId('short-code');
    expect(shortCode.textContent).toEqual('');
  });

  test('Renders nothing if code is too long', () => {
    const mockCode = 'dx6H3G2PJtmlcQDtBun3wRzw0lUkR5iqcIu7mGAZsfdx6H3G2PJtmlcQDtBun3wRzw0lUkR5iqcIu7mGAZsfgi69X43u25VARu1ewpqy54siUae8kQcdLdA9tShh712qpZnAMicizvJ9sdx6H3G2PJtmlcQDtBun3wRzw0lUkR5iqcIu7mGAZsfgi69X43u25VARu1ewpqy54siUae8kQcdLdA9tShh712qpZnAMicizvJ9s';
    render(<ShortCode code={mockCode} />);

    const shortCode = screen.getByTestId('short-code');
    expect(shortCode.textContent).toEqual('');
  });
});
