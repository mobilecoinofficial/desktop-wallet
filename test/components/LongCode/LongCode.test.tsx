import React from 'react';

import { render, screen } from '@testing-library/react';

import LongCode from '../../../app/components/LongCode';

describe('LongCode', () => {
  test('renders the correct code', () => {
    const mockCode = 'qIRxJniKuP8GTQ1jKrlu8b9oWiAmemqVjVpHhoKtgpH6UNthB18lTQuAj0mISOmT2Etc3z7E3ecFpRQb4krfWrLwUo2TtvRasOm';

    render(<LongCode code={mockCode} />);

    expect(screen.getByTestId('long-code-code').textContent).toEqual(mockCode);
  });
});
