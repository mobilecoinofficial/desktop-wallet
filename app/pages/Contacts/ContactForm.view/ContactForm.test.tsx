import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import '../../../testUtils/i18nForTests';
import { ContactForm } from './ContactForm.view';

test('Displays card', () => {
  const handleClick1 = jest.fn();
  const handleClick2 = jest.fn();
  const handleClick3 = jest.fn();

  const { getByText, container } = render(
    <ContactForm
      abbreviation="FK"
      alias="My own person"
      assignedAddress="1234567890"
      color="#FF0000"
      isFavorite={false}
      onCancel={handleClick1}
      onDelete={handleClick2}
      onSaved={handleClick3}
    />
  );

  expect(getByText('FK')).toBeInTheDocument();
  expect(container.innerHTML.includes('My own person')).toBeTruthy();

  fireEvent.click(screen.getByTestId('cancelButton'));
  expect(handleClick1).toHaveBeenCalled();

  fireEvent.click(screen.getByTestId('deleteButton'));
  expect(handleClick2).toHaveBeenCalled();

  fireEvent.click(screen.getByTestId('saveButton'));
  expect(handleClick3).not.toHaveBeenCalled(); // button is disabled, so click is ignored
});
