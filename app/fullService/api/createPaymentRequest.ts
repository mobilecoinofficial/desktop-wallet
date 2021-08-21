import axiosFullService from '../axiosFullService';

const createPaymentRequest = async (accountId: unknown, amountPmob: unknown): Promise<void> => {
  await axiosFullService('create_payment_request', {
    accountId,
    amountPmob,
  });
};

export default createPaymentRequest;
