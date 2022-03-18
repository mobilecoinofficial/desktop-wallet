import { StringUInt64 } from '../../../types';
import { UpdatePinAction, UPDATE_PIN } from './type';

export const updatePinAction = (pin: string, pinThresholdPmob: StringUInt64): UpdatePinAction => ({
  payload: {
    pin,
    pinThresholdPmob,
  },
  type: UPDATE_PIN,
});
