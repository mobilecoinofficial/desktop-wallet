import { StringUInt64 } from '../../../types';
import { UpdateFeePmobAction, UPDATE_FEE_PMOB } from './type';

export const updateFeePmobAction = (feePmob: StringUInt64): UpdateFeePmobAction => ({
  payload: { feePmob },
  type: UPDATE_FEE_PMOB,
});
