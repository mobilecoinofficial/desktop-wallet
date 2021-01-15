import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import ResetLedger from '../../../../app/views/wallet/ConfigureMobilecoindView/ResetLedger';

describe('ResetLedger', () => {
  test('Reset ledger renders view and triggers reset modal', async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <ResetLedger />
      </Router>
    );

    const resetModalBtn = screen.getByTestId('submit-button');

    expect(screen.queryByText('Reset the ledger?')).not.toBeInTheDocument();
    fireEvent.click(resetModalBtn);
    expect(screen.getByText('Reset the ledger?')).toBeInTheDocument();
  });
});
