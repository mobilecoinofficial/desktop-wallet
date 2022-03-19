import * as fullServiceApi from '../fullService/api';
import type {
  CheckB58PaymentRequestParams,
  CheckB58PaymentRequestResponse,
} from '../fullService/api/checkB58PaymentRequest';

export const checkB58PaymentRequest = async (
  checkB58PaymentRequestParams: CheckB58PaymentRequestParams
): Promise<CheckB58PaymentRequestResponse> =>
  fullServiceApi.checkB58PaymentRequest(checkB58PaymentRequestParams);

export type CheckB58PaymentRequestService = typeof checkB58PaymentRequest;
