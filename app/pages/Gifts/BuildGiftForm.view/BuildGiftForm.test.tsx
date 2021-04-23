import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SnackbarProvider } from 'notistack';

import '../../../testUtils/i18nForTests';
import { BuildGiftForm } from './BuildGiftForm.view';

test('Displays gift form', () => {
  const { container } = render(
    <SnackbarProvider>
      <BuildGiftForm
        buildGiftCode={() => undefined}
        existingPin="111111"
        isSyncedBuffered={() => true}
        pinThresholdPmob="1"
        selectedAccount={{
          account: {
            accountId: 'ea8d4b7b6f1044680388ff73b30ffd06dfde4396d02dafe9d966c9648bc7b1b8',
            firstBlockIndex: '0',
            keyDerivationVersion: '1',
            mainAddress:
              'syJAd2QoH7xSkZvMDV8Q6DdWhnRsmAKqx3LZ5BaLXKezCDjf6nUfps2b8ywm1scSMp5WDbYxNMu5mNniVkmb1fehAGaKQdNQWEEg4vHrCH',
            name: 'fktt22',
            nextSubaddressIndex: '5',
            object: 'account',
            recoveryMode: false,
          },
          balanceStatus: {
            accountBlockIndex: '158974',
            isSynced: true,
            localBlockIndex: '158974',
            networkBlockIndex: '158974',
            object: 'balance',
            orphanedPmob: '18000000000001',
            pendingPmob: '0',
            secretedPmob: '0',
            spentPmob: '35410000000000',
            unspentPmob: '908298888888888',
          },
        }}
        submitGiftCode={() => undefined}
      />
    </SnackbarProvider>
  );

  expect(container.innerHTML.includes('Gift Details')).toBeTruthy();
});
