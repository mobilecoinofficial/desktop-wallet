import { StringUInt64 } from '../../types';

export const UPDATE_PIN = 'UPDATE_PIN';

export type UpdatePinAction = {
  type: 'UPDATE_PIN';
  payload: {
    pin: string | undefined;
    pinThresholdPmob: StringUInt64;
  };
};

export const updatePinAction = (pin: string, pinThresholdPmob: StringUInt64): UpdatePinAction => ({
  payload: {
    pin,
    pinThresholdPmob,
  },
  type: UPDATE_PIN,
});
