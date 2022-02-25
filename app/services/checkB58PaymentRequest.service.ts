import * as fullServiceApi from '../fullService/api';
import type {
  CheckB58PaymentRequestParams,
  CheckB58PaymentRequestResult,
} from '../fullService/api/checkB58PaymentRequest';

const checkB58PaymentRequest = async (
  checkB58PaymentRequestParams: CheckB58PaymentRequestParams
): Promise<CheckB58PaymentRequestResult> =>
  fullServiceApi.checkB58PaymentRequest(checkB58PaymentRequestParams);

export default checkB58PaymentRequest;
export { checkB58PaymentRequest };
export type CheckB58PaymentRequestService = typeof checkB58PaymentRequest;
