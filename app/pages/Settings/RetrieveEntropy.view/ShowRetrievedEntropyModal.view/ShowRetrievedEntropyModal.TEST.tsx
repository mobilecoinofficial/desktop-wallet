import React from 'react';

import { act, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '../../../../testUtils/i18nForTests';
import { ShowRetrievedEntropyModal } from './ShowRetrievedEntropyModal.view';

jest.setTimeout(30000);

test("Entropy doesn't show until pressing the button", async () => {
  const ENTROPY = '0189237809162578012341578095785623235456457863945781623480';
  const open = true;
  const onClose = jest.fn();

  const { container } = render(
    <div>
      <ShowRetrievedEntropyModal open={open} onClose={onClose} entropy={ENTROPY} />
    </div>
  );

  const showHideButton = container.querySelector('[id="show-hide-button"]') as HTMLInputElement;
  const securedButton = container.querySelector('[id="secured-button"]') as HTMLInputElement;

  await waitFor(() => expect(showHideButton).not.toBeFalsy());
  await waitFor(() => expect(securedButton).not.toBeFalsy());
  await waitFor(() => expect(container.innerHTML.includes(ENTROPY)).toBeFalsy());

  await act(async () => userEvent.click(showHideButton));
  await waitFor(() => expect(container.innerHTML.includes(ENTROPY)).toBeTruthy());

  await act(async () => userEvent.click(showHideButton));
  await waitFor(() => expect(container.innerHTML.includes(ENTROPY)).toBeFalsy());

  await act(async () => userEvent.click(securedButton));
  await waitFor(() => expect(onClose).toHaveBeenCalled());
});
