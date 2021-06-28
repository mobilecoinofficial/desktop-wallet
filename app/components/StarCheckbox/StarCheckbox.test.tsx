import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { StarCheckboxProps } from './StarCheckbox.d';
import { StarCheckbox } from './StarCheckbox.view';

const FORMIK = { field: { name: 'starcheckbox' } } as StarCheckboxProps;

describe('StarCheckbox', () => {
  test('renders to screen when called', () => {
    const { container } = render(<StarCheckbox field={FORMIK.field} />);
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
