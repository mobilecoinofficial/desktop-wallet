import React from 'react';

import { render, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import '../../../testUtils/i18nForTests';
import { GiftCode } from './GiftCode.view';

describe('Show gift code form', () => {
  test('initial view', async () => {
    const onClickCode = jest.fn();
    const onCloseClick = jest.fn();
    const GIFT_CODE =
      'KCFVdywow627w6AjyNF6vnczSP3rS6zuFj72x4XvC2fERaWQHyMQhzGv8yL4oqSF7KRHdqgbpisLZ2Q46x7DYns8wQSQyq7wwLhEd7wN';

    const { container } = render(
      <GiftCode giftCode={GIFT_CODE} onClickCode={onClickCode} onCloseClick={onCloseClick} />
    );

    expect(container.innerHTML.includes('K')).toBeTruthy();
    expect(container.innerHTML.includes('C')).toBeTruthy();
    expect(container.innerHTML.includes('F')).toBeTruthy();
    expect(container.innerHTML.includes('V')).toBeTruthy();
    expect(container.innerHTML.includes('d')).toBeTruthy();
    expect(container.innerHTML.includes('7')).toBeTruthy();
    expect(container.innerHTML.includes('W')).toBeTruthy();
    expect(container.innerHTML.includes('N')).toBeTruthy();

    const closeGiftCodeButton = container.querySelector(
      '[data-testid="submit-button"]'
    ) as HTMLInputElement;
    expect(closeGiftCodeButton).toBeTruthy();
    expect(closeGiftCodeButton.disabled).toBeFalsy();

    const codeField = container.querySelector('[data-testid="long-code-code"]') as HTMLInputElement;
    expect(codeField).toBeTruthy();
    expect(codeField.disabled).toBeFalsy();

    await act(async () => userEvent.click(codeField));
    await waitFor(() =>
      expect(onClickCode).toHaveBeenCalledWith(GIFT_CODE, 'Gift code copied to clipboard.')
    );

    await act(async () => userEvent.click(closeGiftCodeButton));
    await waitFor(() => expect(onCloseClick).toHaveBeenCalled());
  });
});
