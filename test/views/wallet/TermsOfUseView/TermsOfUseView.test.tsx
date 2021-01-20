import React from 'react';

import { TermsOfUseView } from '../../../../app/views/wallet';
import renderSnapshot from '../../../renderSnapshot';

describe('TermsOfUseView', () => {
  describe('component', () => {
    describe('render', () => {
      test('it renders correctly', () => {
        const { asFragment } = renderSnapshot(<TermsOfUseView />);
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
