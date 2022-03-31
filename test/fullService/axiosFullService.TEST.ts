import axios from 'axios';

import {
  axiosFullService,
  handleError,
  handleResponse,
} from '../../app/fullService/axiosFullService';

jest.mock('axios');

const setup = () => {
  // Variables
  const fakeMethod = 'fake_method';
  const fakeParams = { hello: 'world' };

  // Mocks
  const mockAxiosInstance = jest.fn();
  const mockUse = jest.fn();
  // @ts-ignore mock
  mockAxiosInstance.interceptors = {
    response: {
      use: mockUse,
    },
  };
  const mockAxios = axios as jest.MockedFunction<typeof axios>;
  // @ts-ignore mock
  mockAxios.create.mockImplementation(() => mockAxiosInstance);

  return {
    fakeMethod,
    fakeParams,
    mockAxios,
    mockAxiosInstance,
    mockUse,
  };
};

describe('axiosFullService', () => {
  test('creates an axios instance with full service config', async () => {
    const { fakeMethod, fakeParams, mockAxios, mockUse } = setup();
    const expectedConfig = {
      baseURL: 'http://localhost:9090/wallet',
      headers: { 'Content-type': 'application/json' },
      method: 'post',
    };

    await axiosFullService(fakeMethod, fakeParams);
    expect(mockAxios.create).toBeCalledWith(expectedConfig);
    expect(mockUse).toBeCalledWith(handleResponse, handleError);
  });

  test('calls the axiosInstance with the method and params', async () => {
    const { fakeMethod, fakeParams, mockAxiosInstance } = setup();
    const expectedCall = {
      data: {
        method: fakeMethod,
        params: fakeParams,
      },
    };
    const expectedHappyResponse = 'happy path';

    mockAxiosInstance.mockImplementation(() => expectedHappyResponse);

    expect(await axiosFullService(fakeMethod, fakeParams)).toBe(expectedHappyResponse);
    expect(mockAxiosInstance).toBeCalledWith(expectedCall);
  });

  test('on application errors, it returns error message', async () => {
    const { fakeMethod, fakeParams, mockAxiosInstance } = setup();
    const expectedErorrMessage = 'uh oh. bad things';
    const expectedUnknownErrorMessage = 'Unknown Rocket error';

    mockAxiosInstance.mockImplementationOnce(() => {
      throw new Error(expectedErorrMessage);
    });

    expect(await axiosFullService(fakeMethod, fakeParams)).toBe(expectedErorrMessage);

    mockAxiosInstance.mockImplementationOnce(() => {
      throw new Error();
    });

    expect(await axiosFullService(fakeMethod, fakeParams)).toBe(expectedUnknownErrorMessage);
  });

  describe('handleResponse', () => {
    test('it returns data results', () => {
      const response = {
        data: {
          results: 'success',
        },
      };

      // @ts-ignore mock
      expect(handleResposne(response)).toBe(response.data.results);
    });
  });

  describe('handleError', () => {
    test('it returns rejected promise with error message', async () => {
      const expectedErorrMessage = 'uh oh. bad things';
      const expectedUnknownErrorMessage = 'Unknown Full Service error';

      await expect(handleError({ message: expectedErorrMessage })).rejects.toBe(
        expectedErorrMessage
      );
      await expect(handleError({ message: null })).rejects.toBe(expectedUnknownErrorMessage);
    });
  });
});
