import type { StringUInt64 } from '../../types/SpecialStrings';

export const UPDATE_FEE_PMOB = 'UPDATE_FEE_PMOB';

export type UpdateFeePmobActionType = {
  type: 'UPDATE_FEE_PMOB';
  payload: { feePmob: StringUInt64 };
};

export const updateFeePmobAction = (feePmob: StringUInt64): UpdateFeePmobActionType => ({
  payload: { feePmob },
  type: UPDATE_FEE_PMOB,
});
