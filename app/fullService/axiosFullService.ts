import axios from 'axios';
import type { AxiosResponse } from 'axios';
import snakeCaseKeys from 'snakecase-keys';

import skipKeysCamelCase from './utils/skipKeysCamelCase';

interface FullServiceResponse extends AxiosResponse {
  data: {
    method: string;
    jsonrpc: string;
    result?: any; // TODO, consider replacing with generic T
    error?: string;
  };
}

interface AxiosFullServiceResponse {
  result?: any; // TODO, consider replacing with generic T
  error?: string;
}

export const handleResponse = (
  response: AxiosResponse<FullServiceResponse>
): FullServiceResponse => {
  return response.data;
};

export const handleError = (error: { message?: string }) => {
  // This handles errors from Rocket
  // Usually, bad urls (404) or incorrect methods (422).
  return Promise.reject(error.message || 'Unknown Full-Service error');
};

const axiosFullService = async (
  method: string,
  params?: Record<string, any>
): Promise<AxiosFullServiceResponse> => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:9090/wallet',
    headers: { 'Content-type': 'application/json' },
    method: 'post',
  });
  axiosInstance.interceptors.response.use(handleResponse, handleError);
  const snakeCaseParams = params === undefined ? undefined : snakeCaseKeys(params);
  try {
    const response = await axiosInstance({
      data: {
        jsonrpc: '2.0',
        method,
        params: snakeCaseParams,
      },
    });
    // @ts-ignore override
    if (!response.jsonrpc) {
      // Throw is response is not jsonrpc
      const errorMessage =
        typeof response === 'string' ? response : 'Full-Service returned an unexpected object.';
      throw new Error(errorMessage);
    }

    // TODO: determine if we need to handle errors here or elsewhere
    // such as the API or services
    return skipKeysCamelCase(response);
  } catch (error) {
    // TODO: when we hit an unknown error, I think we can assume this application needs to restart
    // So, we should figure out a bug report path and a reset button.
    const errorMessage = error.message || 'Unknown Rocket error';
    return { error: errorMessage };
  }
};

export default axiosFullService;
