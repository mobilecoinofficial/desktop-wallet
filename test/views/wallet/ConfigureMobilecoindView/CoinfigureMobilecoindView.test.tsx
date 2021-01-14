import React from 'react';

import useMobileCoinD from '../../../../app/hooks/useMobileCoinD';
import { ConfigureMobilecoindView } from '../../../../app/views/wallet';
import renderSnapshot from '../../../renderSnapshot';

jest.mock('../../../../app/hooks/useMobileCoinD');

function setupComponent() {
  const mockUseMobileCoinD = useMobileCoinD as jest.MockedFunction<
    typeof useMobileCoinD
  >;

  const { asFragment } = renderSnapshot(<ConfigureMobilecoindView />);

  // @ts-ignore mock
  mockUseMobileCoinD.mockImplementation(() => {
    return {
      accountName: 'accountName',
      b58Code: 'string',
      balance: BigInt(2),
      encryptedEntropy: 'string',
      entropy: null,
      giftCodes: null,
      isAuthenticated: true,
      isEntropyKnown: true,
      isInitialised: true,
      localBlockIndex: 4,
      mobUrl: 'string',
      monitorId: null,
      networkHighestBlockIndex: 4,
      nextBlock: 5,
      receiver: null,
    };
  });

  return {
    asFragment,
  };
}

describe('Configure Mobilecoind View', () => {
  describe('component', () => {
    describe('render', () => {
      test('it renders correctly', async () => {
        const { asFragment } = setupComponent();
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
