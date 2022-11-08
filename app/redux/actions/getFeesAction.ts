import { Fees } from '../../types/NetworkStatus';

export const GET_FEE_PMOB = 'GET_FEES';

export type GetFeesAction = {
  type: 'GET_FEES';
  payload: { fees: Fees; blockVersion: string };
};

export const getFeesAction = (fees: Fees): GetFeesAction => ({
  payload: { fees },
  type: GET_FEE_PMOB,
});
