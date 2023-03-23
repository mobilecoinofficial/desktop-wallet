import { Fees } from '../../types/NetworkStatus';

export const GET_FEE_PMOB = 'GET_FEES';

export type GetFeesAction = {
  type: 'GET_FEES';
  payload: {
    blockVersion: string;
    fees: Fees;
  };
};

export const getFeesAction = (fees: Fees, blockVersion: string): GetFeesAction => ({
  payload: {
    blockVersion,
    fees,
  },
  type: GET_FEE_PMOB,
});
