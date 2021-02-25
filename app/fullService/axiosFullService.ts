import axios from 'axios';
import type { AxiosResponse } from 'axios';
import snakeCaseKeys from 'snakecase-keys';

import skipKeysCamelCase from './utils/skipKeysCamelCase';

interface AxiosFullServiceResponse extends AxiosResponse<any> {
  data: {
    method: string;
    result?: any; // TODO, consider replacing with generic T
    error?: string;
  }
}

export const handleResponse = (
  response: AxiosResponse<AxiosFullServiceResponse>,
): AxiosFullServiceResponse => {
  return response.data;
};

export const handleError = (error: { message?: string }) => {
  // This handles errors from Rocket
  // Usually, bad urls (404) or incorrect methods (422).
  return Promise.reject(error.message || 'Unknown Full-Service error');
};

const axiosFullService = async (
  method: string,
  params?: Record<string, any>,
) => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:9090/wallet',
    headers: { 'Content-type': 'application/json' },
    method: 'post',
  });
  axiosInstance.interceptors.response.use(
    handleResponse,
    handleError,
  );
  const snakeCaseParams = params === undefined ? undefined : snakeCaseKeys(params);

  try {
    const response = await axiosInstance({
      data: {
        method,
        params: snakeCaseParams,
      },
    });

    // TODO: determine if we need to handle errors here or elsewhere
    // such as the API or services
    return skipKeysCamelCase(response);
  } catch (error) {
    return error || 'Unknown Rocket error';
  }
};

export default axiosFullService;
