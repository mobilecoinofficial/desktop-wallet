import { StringUInt64 } from '../../../types';

export const UPDATE_FEE_PMOB = 'UPDATE_FEE_PMOB';

export type UpdateFeePmobAction = {
  type: 'UPDATE_FEE_PMOB';
  payload: { feePmob: StringUInt64 };
};
