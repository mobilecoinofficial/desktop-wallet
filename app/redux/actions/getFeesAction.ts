import { Fees, Network } from '../../types/NetworkStatus';

export const GET_FEE_PMOB = 'GET_FEES';

export type GetFeesAction = {
  type: 'GET_FEES';
  payload: {
    blockVersion: string;
    fees: Fees;
    network: Network;
  };
};

export const getFeesAction = (
  fees: Fees,
  blockVersion: string,
  network: Network
): GetFeesAction => ({
  payload: {
    blockVersion,
    fees,
    network,
  },
  type: GET_FEE_PMOB,
});
