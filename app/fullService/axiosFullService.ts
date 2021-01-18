import axios from 'axios';
import type { AxiosResponse } from 'axios';

interface AxiosFullServiceResponse<T extends {}> {
  method: string;
  results: T;
}

export const handleResposne = (response: AxiosResponse<AxiosFullServiceResponse<any>>) => {
// TODO: parse response to be success or error and handle
// Failures from the API are returned as errors.details
  return response.data.results;
};

export const handleError = (error: { message?: string }) => {
  // This handles errors from Rocket
  // Usually, bad urls (404) or incorrect methods (422).
  return Promise.reject(error.message || 'Unknown Full Service error');
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

  axiosInstance.interceptors.response.use(handleResposne, handleError);

  try {
    const response = await axiosInstance({
      data: {
        method,
        params,
      },
    });

    // TODO: determine if we need to handle errors here or elsewhere
    // such as the API or services
    return response;
  } catch (error) {
    return error.message || 'Unknown Rocket error';
  }
};

export default axiosFullService;
