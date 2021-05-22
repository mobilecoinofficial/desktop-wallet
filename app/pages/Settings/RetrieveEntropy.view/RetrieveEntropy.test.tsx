import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../../../testUtils/i18nForTests';
import userEvent from '@testing-library/user-event';

import { RetrieveEntropyView } from './RetrieveEntropy.view';

describe('RetrieveEntropyView', () => {
  test('render and submit', async () => {
    const handleOnClick = jest.fn();
    const retrieveEntropy = jest.fn().mockReturnValue('1234567890');
    const { getByText } = render(
      <RetrieveEntropyView onClickBack={handleOnClick} retrieveEntropy={retrieveEntropy} />
    );
    expect(getByText('Retrieve Secret Entropy')).toBeInTheDocument();
    const passwordField = screen.getByLabelText('Passphrase', {
      selector: 'input',
    }) as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: 'Retrieve Entropy' });
    userEvent.type(passwordField, 'password');
    await waitFor(() => userEvent.click(submitButton));
    expect(retrieveEntropy).toBeCalledWith('password');
  });

  test('failure retrieving entropy', async () => {
    const handleOnClick = jest.fn();
    const retrieveEntropy = jest.fn().mockReturnValue(undefined);
    const { getByText } = render(
      <RetrieveEntropyView onClickBack={handleOnClick} retrieveEntropy={retrieveEntropy} />
    );
    expect(getByText('Retrieve Secret Entropy')).toBeInTheDocument();
    const passwordField = screen.getByLabelText('Passphrase', {
      selector: 'input',
    }) as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: 'Retrieve Entropy' });
    userEvent.type(passwordField, 'password');
    await waitFor(() => userEvent.click(submitButton));
    expect(retrieveEntropy).toBeCalledWith('password');
  });
});
