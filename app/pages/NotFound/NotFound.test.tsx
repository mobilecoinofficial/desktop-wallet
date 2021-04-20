import React from 'react';

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

import '../../testUtils/i18nForTests';
import { NotFoundPage } from './NotFound.view';

test('Common display', () => {
  const { container } = render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  );
  expect(
    container.innerHTML.includes('404: The page you are looking for is not here')
  ).toBeTruthy();
  expect(container.innerHTML.includes('You should never see this page')).toBeTruthy();
  expect(container.innerHTML.includes('Back to home')).toBeTruthy();
});
