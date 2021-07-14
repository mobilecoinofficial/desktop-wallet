import axiosFullService from '../axiosFullService';

const createPaymentRequest = async (accountId: unknown, amountPmob: unknown) => {
  const res = await axiosFullService('create_payment_request', {
    accountId,
    amountPmob,
  });
  console.log(res);
};

export default createPaymentRequest;
