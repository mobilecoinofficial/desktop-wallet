import { StringUInt64 } from '../../types';
import * as localStore from '../../utils/LocalStore';
import { validatePassword } from '../../utils/authentication';
import { encrypt } from '../../utils/encryption';
import { updatePinAction } from '../actions';
import { store } from '../store';

// This call does not require a password. It should only be used when no PIN is set.
export const updatePin = async (
  pin: string,
  pinThresholdPmob: StringUInt64,
  password?: string
): Promise<void> => {
  const { pin: existingPin, secretKey, encryptedPassword } = store.getState();

  try {
    if (encryptedPassword === undefined) {
      throw new Error('encryptedPassword assertion failed');
    }

    if (password) {
      await validatePassword(password, encryptedPassword);
    } else if (existingPin) {
      // This only triggers if attempting to set pin without password.
      // You cannot overwrite an existing PIN without the correct password!
      throw new Error('PIN already exists');
    }

    // encrypt and save PIN to local store
    const encryptedPin = await encrypt(pin, secretKey);
    localStore.setEncryptedPin(encryptedPin);

    // save threshold to local store
    localStore.setPinThresholdPmob(pinThresholdPmob);

    store.dispatch(updatePinAction(pin, pinThresholdPmob));
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw err;
    }
  }
};

export type UpdatePinService = typeof updatePin;
