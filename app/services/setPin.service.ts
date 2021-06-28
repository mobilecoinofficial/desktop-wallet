import { store } from '../contexts/FullServiceContext';
import { updatePinAction } from '../contexts/actions/updatePin.action';
import type { StringUInt64 } from '../types/SpecialStrings';
import * as localStore from '../utils/LocalStore';
import { validatePassphrase } from '../utils/authentication';
import { encrypt } from '../utils/encryption';

// This call does not require a password. It should only be used when no PIN is set.
const setPin = async (
  pin: string,
  pinThresholdPmob: StringUInt64,
  passphrase?: string
): Promise<void> => {
  const { pin: existingPin, secretKey, encryptedPassphrase } = store.state;

  try {
    if (encryptedPassphrase === undefined) {
      throw new Error('encryptedPassphrase assertion failed');
    }

    if (passphrase) {
      await validatePassphrase(passphrase, encryptedPassphrase);
    } else if (existingPin) {
      // This only triggers if attempting to set pin without passphrase.
      // You cannot overwrite an existing PIN without the correct passphrase!
      throw new Error('PIN already exists');
    }

    // encrypt and save PIN to local store
    const encryptedPin = await encrypt(pin, secretKey);
    localStore.setEncryptedPin(encryptedPin);

    // save threshold to local store
    localStore.setPinThresholdPmob(pinThresholdPmob);

    store.dispatch(updatePinAction(pin, pinThresholdPmob));
  } catch (err) {
    throw new Error(err.message);
  }
};

export default setPin;
export { setPin };
export type SetPinService = typeof setPin;
