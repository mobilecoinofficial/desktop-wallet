import React from 'react';

import { act, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import '../../../testUtils/i18nForTests';
import { CrashShowLog } from './CrashShowLog.view';

const ERROR_LOG = '1. first line\n2. second line of the log\n3. third log line\n';

describe('CrashShowLog', () => {
  test('works OK', async () => {
    const fakeSend = jest.fn();
    const fakeClose = jest.fn();

    const { container } = render(
      <CrashShowLog errorLog={ERROR_LOG} onSendReport={fakeSend} onClose={fakeClose} />
    );

    expect(container.innerHTML.includes(ERROR_LOG)).toBeTruthy();

    const sendButton = container.querySelector('[id="send-button"]') as HTMLInputElement;
    expect(sendButton).not.toBeFalsy();
    await act(async () => userEvent.click(sendButton));
    expect(fakeSend).toHaveBeenCalledWith(ERROR_LOG);

    const closeIcon = container.querySelector('[id="close-icon"]') as HTMLInputElement;
    await act(async () => userEvent.click(closeIcon));
    expect(fakeClose).toHaveBeenCalled();
  });
});
