import { StringUInt64 } from '../../types';

export const GET_FEE_PMOB = 'GET_FEE_PMOB';

export type GetFeePmobAction = {
  type: 'GET_FEE_PMOB';
  payload: { feePmob: StringUInt64 };
};

export const getFeePmobAction = (feePmob: StringUInt64): GetFeePmobAction => ({
  payload: { feePmob },
  type: GET_FEE_PMOB,
});
