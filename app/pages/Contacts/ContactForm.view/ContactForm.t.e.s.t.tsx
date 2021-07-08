/*
import React from 'react';

import { act, waitFor, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import '../../../testUtils/i18nForTests';
import { ContactForm } from './ContactForm.view';

describe.skip('Contact form', () => {
  test('shows old contact', async () => {
    const handleClick1 = jest.fn();
    const handleClick2 = jest.fn();
    const handleClick3 = jest.fn();

    const { container } = render(
      <ContactForm
        abbreviation="FK"
        alias="My own person"
        assignedAddress="1234567890"
        color="#FF0000"
        isFavorite={false}
        recipientAddress="9127865938756293486"
        onClickCancel={handleClick1}
        onClickDelete={handleClick2}
        onClickSaved={handleClick3}
      />
    );

    const cancelButton = container.querySelector(
      '[data-testid="cancelButton"]'
    ) as HTMLInputElement;
    const removeButton = container.querySelector(
      '[data-testid="deleteButton"]'
    ) as HTMLInputElement;
    const updateButton = container.querySelector('[data-testid="saveButton"]') as HTMLInputElement;

    expect(cancelButton).not.toBeFalsy();
    expect(removeButton).not.toBeFalsy();
    expect(updateButton).not.toBeFalsy();

    expect(container.innerHTML.includes('FK')).toBeTruthy();
    expect(container.innerHTML.includes('My own person')).toBeTruthy();

    const contactAlias = container.querySelector('[id="contact-alias"]') as HTMLInputElement;
    const contactAbbreviation = container.querySelector(
      '[id="contact-abbreviation"]'
    ) as HTMLInputElement;
    const contactAssignedAddress = container.querySelector(
      '[id="contact-assigned-address"]'
    ) as HTMLInputElement;
    const contactRecipientAddress = container.querySelector(
      '[id="contact-recipient-address"]'
    ) as HTMLInputElement;
    const contactAvatar = container.querySelector('[id="color-avatar"]') as HTMLInputElement;

    expect(contactAlias).not.toBeFalsy();
    expect(contactAbbreviation).not.toBeFalsy();
    expect(contactAssignedAddress).not.toBeFalsy();
    expect(contactRecipientAddress).not.toBeFalsy();
    expect(contactAvatar).not.toBeFalsy();

    await act(async () => userEvent.click(contactAvatar));
    const parent = container.parentElement as HTMLElement;
    expect(parent.innerHTML.includes('Pick any color')).toBeTruthy();

    const cancelPicker = parent.querySelector('[id="cancel-picker"]') as HTMLInputElement;
    expect(cancelPicker).not.toBeFalsy();
    await act(async () => userEvent.click(cancelPicker));

    await act(async () => userEvent.click(contactAvatar));
    const firstColor = parent.querySelector('[title="#8B35E0"]') as HTMLInputElement;
    expect(firstColor).not.toBeFalsy();
    await act(async () => userEvent.click(firstColor));

    await act(async () => userEvent.type(contactAlias, 'A NEW NAME', { delay: 1 }));
    await act(async () => userEvent.tab());
    await waitFor(() => expect(updateButton.disabled).toBeFalsy());
    await act(async () => userEvent.click(updateButton));
    await waitFor(() => expect(handleClick3).toHaveBeenCalled());
  });

  test('shows new contact', async () => {
    const handleClick1 = jest.fn();
    const handleClick2 = jest.fn();
    const handleClick3 = jest.fn();

    const { container } = render(
      <ContactForm
        abbreviation="FK"
        alias="My own person"
        assignedAddress=""
        color="#FF0000"
        recipientAddress=""
        isFavorite={false}
        onClickCancel={handleClick1}
        onClickDelete={handleClick2}
        onClickSaved={handleClick3}
      />
    );

    const cancelButton = container.querySelector(
      '[data-testid="cancelButton"]'
    ) as HTMLInputElement;
    const removeButton = container.querySelector(
      '[data-testid="deleteButton"]'
    ) as HTMLInputElement;
    const updateButton = container.querySelector('[data-testid="saveButton"]') as HTMLInputElement;

    expect(cancelButton).not.toBeFalsy();
    expect(removeButton).toBeFalsy();
    expect(updateButton).not.toBeFalsy();

    expect(container.innerHTML.includes('FK')).toBeTruthy();
    expect(container.innerHTML.includes('My own person')).toBeTruthy();

    await act(async () => userEvent.click(cancelButton));
    expect(handleClick1).toHaveBeenCalled();

    await act(async () => userEvent.click(updateButton));
    expect(handleClick3).not.toHaveBeenCalled(); // missing data, so no call

    const contactAlias = container.querySelector('[id="contact-alias"]') as HTMLInputElement;
    const contactAbbreviation = container.querySelector(
      '[id="contact-abbreviation"]'
    ) as HTMLInputElement;
    const contactAssignedAddress = container.querySelector(
      '[id="contact-assigned-address"]'
    ) as HTMLInputElement;
    const contactRecipientAddress = container.querySelector(
      '[id="contact-recipient-address"]'
    ) as HTMLInputElement;

    expect(contactAlias).not.toBeFalsy();
    expect(contactAbbreviation).not.toBeFalsy();
    expect(contactAssignedAddress).toBeFalsy();
    expect(contactRecipientAddress).not.toBeFalsy();

    await act(async () => userEvent.type(contactAlias, 'A NEW NAME', { delay: 1 }));
    await act(async () => userEvent.tab());
    await act(async () =>
      userEvent.type(contactRecipientAddress, '1014789234789234789234789', { delay: 1 })
    );
    await act(async () => userEvent.tab());
    await act(async () => userEvent.click(updateButton));
    expect(handleClick3).toHaveBeenCalled(); // all data, so call
  });

  test('works with empty data', async () => {
    const handleClick1 = jest.fn();
    const handleClick2 = jest.fn();
    const handleClick3 = jest.fn();

    const { container } = render(
      <ContactForm
        abbreviation=""
        alias=""
        assignedAddress=""
        color=""
        isFavorite={false}
        onClickCancel={handleClick1}
        onClickDelete={handleClick2}
        onClickSaved={handleClick3}
      />
    );

    const cancelButton = container.querySelector(
      '[data-testid="cancelButton"]'
    ) as HTMLInputElement;
    const removeButton = container.querySelector(
      '[data-testid="deleteButton"]'
    ) as HTMLInputElement;
    const updateButton = container.querySelector('[data-testid="saveButton"]') as HTMLInputElement;

    expect(cancelButton).not.toBeFalsy();
    expect(removeButton).toBeFalsy();
    expect(updateButton).not.toBeFalsy();

    await act(async () => userEvent.click(cancelButton));
    expect(handleClick1).toHaveBeenCalled();

    await act(async () => userEvent.click(updateButton));
    expect(handleClick3).not.toHaveBeenCalled();
  });
});
*/
