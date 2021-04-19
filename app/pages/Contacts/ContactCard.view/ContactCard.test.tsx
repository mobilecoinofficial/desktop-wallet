import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import '../../../testUtils/i18nForTests';
import { ContactCard } from './ContactCard.view';

test('Displays card', () => {
  const handleClick = jest.fn();

  const { getByText } = render(
    <ContactCard
      abbreviation="FK"
      alias="My own person"
      assignedAddress="1234567890"
      color="#FF0000"
      isFavorite
      onEdit={handleClick}
    />
  );

  expect(getByText('FK')).toBeInTheDocument();

  expect(getByText('My own person')).toBeInTheDocument();

  fireEvent.click(screen.getByText('FK'));
  fireEvent.click(screen.getByText('My own person'));
  expect(handleClick).toHaveBeenCalledTimes(2);
});
