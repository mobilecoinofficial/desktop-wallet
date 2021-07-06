import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../../../testUtils/i18nForTests';
import userEvent from '@testing-library/user-event';

import { RetrieveEntropyView } from './RetrieveEntropy.view';

describe('RetrieveEntropyView', () => {
  test('render and submit', async () => {
    const onClickBack = jest.fn();
    const onClickClose = jest.fn();
    const onClickRetrieveEntropy = jest.fn();

    const { getByText } = render(
      <RetrieveEntropyView
        onClickBack={onClickBack}
        onClickClose={onClickClose}
        onClickRetrieveEntropy={onClickRetrieveEntropy}
        accounts={[]}
      />
    );

    expect(getByText('Retrieve Secret Entropy')).toBeInTheDocument();
    const passwordField = (await screen.findByLabelText('Passphrase', {
      selector: 'input',
    })) as HTMLInputElement;
    const submitButton = await screen.findByRole('button', { name: 'Retrieve Entropy' });
    await waitFor(() => userEvent.type(passwordField, 'password'));
    await waitFor(() => userEvent.click(submitButton));
    expect(onClickRetrieveEntropy).toHaveBeenCalled();
  });
});
