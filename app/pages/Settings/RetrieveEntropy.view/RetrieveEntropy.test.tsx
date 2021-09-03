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
        entropy=""
      />
    );

    expect(getByText('Retrieve Secret Entropy')).toBeInTheDocument();
    const passwordField = (await screen.findByLabelText('Password', {
      selector: 'input',
    })) as HTMLInputElement;
    const submitButton = await screen.findByRole('button', { name: 'Retrieve Entropy' });
    await waitFor(() => userEvent.type(passwordField, 'password'));
    await waitFor(() => userEvent.click(submitButton));
    expect(onClickRetrieveEntropy).toHaveBeenCalled();
  });

  test('shows entropy', async () => {
    const onClickBack = jest.fn();
    const onClickClose = jest.fn();
    const onClickRetrieveEntropy = jest.fn();

    const { container, getByText } = render(
      <RetrieveEntropyView
        onClickBack={onClickBack}
        onClickClose={onClickClose}
        onClickRetrieveEntropy={onClickRetrieveEntropy}
        accounts={[]}
        entropy="1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
      />
    );

    expect(getByText('Retrieve Secret Entropy')).toBeInTheDocument();

    const parentHtml = container?.parentElement?.innerHTML;
    expect(parentHtml?.includes('We decrypted your Entropy')).toBeTruthy();
    expect(parentHtml?.includes('****************')).toBeTruthy();
  });
});
