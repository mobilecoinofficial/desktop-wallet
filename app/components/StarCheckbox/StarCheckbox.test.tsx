import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { StarCheckbox } from './StarCheckbox.view';

describe('StarCheckbox', () => {
  test('renders to screen when called', () => {
    const { container } = render(<StarCheckbox formik={{ name: 'scbox' }} />);
    const scCheckBox = container.querySelector('[name="starcheckbox"]') as HTMLInputElement;
    expect(scCheckBox).not.toBeFalsy();
    expect(scCheckBox.checked).toBeFalsy();
    const originalContent = container.querySelector('[class="MuiIconButton-label"]')?.innerHTML;
    userEvent.click(scCheckBox);
    const alternateContent = container.querySelector('[class="MuiIconButton-label"]')?.innerHTML;
    expect(scCheckBox.checked).toBeTruthy();
    userEvent.click(scCheckBox);
    expect(container.querySelector('[class="MuiIconButton-label"]')?.innerHTML).toEqual(
      originalContent
    );
    expect(scCheckBox.checked).toBeFalsy();
    userEvent.click(scCheckBox);
    expect(container.querySelector('[class="MuiIconButton-label"]')?.innerHTML).toEqual(
      alternateContent
    );
  });
});
