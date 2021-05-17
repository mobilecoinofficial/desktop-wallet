import type { StringUInt64 } from '../../types/SpecialStrings.d';

export const UPDATE_PIN = 'UPDATE_PIN';

export type UpdatePinActionType = {
  type: 'UPDATE_PIN';
  payload: {
    pin: string | undefined;
    pinThresholdPmob: StringUInt64;
  };
};

export const updatePinAction = (
  pin: string,
  pinThresholdPmob: StringUInt64
): UpdatePinActionType => ({
  payload: {
    pin,
    pinThresholdPmob,
  },
  type: UPDATE_PIN,
});
