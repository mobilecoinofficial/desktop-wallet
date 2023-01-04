import axios from 'axios';
import type { AxiosResponse } from 'axios';
import snakeCaseKeys from 'snakecase-keys';

import * as localStore from '../utils/LocalStore';
import { errorToString } from '../utils/errorHandler';
import { camelCaseObjectKeys } from './utils/camelCase';

type FullServiceResponse = AxiosResponse & {
  data: {
    method: string;
    jsonrpc: string;
    result?: any; // TODO, consider replacing with generic T
    error?: string;
  };
};

export type AxiosFullServiceResponse<T> = {
  result?: T;
  error?: string;
};

export const handleResponse = (response: AxiosResponse<FullServiceResponse>): FullServiceResponse =>
  response.data;

export const handleError = (error: { message?: string }) =>
  // This handles errors from Rocket
  // Usually, bad urls (404) or incorrect methods (422).
  Promise.reject(error.message || 'Unknown Full-Service error');

// TODO: refactor to include better error handling. Returning an optional error param offloads error
// handling to the caller, breaking DRY
const axiosFullService = async <T>(
  method: string,
  params: Record<string, any> | null,
  apiVersion?: 'v1' | 'v2' // defaults to v2. currently only gift codes require v1
): Promise<AxiosFullServiceResponse<T>> => {
  const baseURLVersion = apiVersion === 'v1' ? '' : '/v2';
  const axiosInstance = axios.create({
    baseURL: `http://localhost:9090/wallet${baseURLVersion}`,
    headers: { 'Content-type': 'application/json', 'X-API-KEY': localStore.getAPIKey() },
    method: 'post',
  });
  axiosInstance.interceptors.response.use(handleResponse, handleError);
  // const isParams = params && Boolean(Object.keys(params).length);
  const snakeCaseParams = params && snakeCaseKeys(params);
  try {
    const response = await axiosInstance({
      data: {
        id: 1,
        jsonrpc: '2.0',
        method,
        params: snakeCaseParams,
      },
      timeout: 10000,
    });
    // @ts-ignore override
    if (!response.jsonrpc) {
      // Throw is response is not jsonrpc
      const errorMessage =
        typeof response === 'string' ? response : 'Full-Service returned an unexpected object.';
      throw new Error(errorMessage);
    }

    if (response.result) {
      return { result: camelCaseObjectKeys(response.result) };
    }

    if (response.error) {
      return { error: response.error.data?.details ?? 'unknown full-service error' };
    }

    console.warn('no result from full-service');
    return { result: 'no result from full-service' };
  } catch (error) {
    const errorMessage = errorToString(error);
    throw new Error(errorMessage);
  }
};

export default axiosFullService;
