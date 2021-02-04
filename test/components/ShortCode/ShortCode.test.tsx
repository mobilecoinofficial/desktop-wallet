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
});
