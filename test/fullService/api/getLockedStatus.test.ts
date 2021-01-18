import { getLockedStatus } from '../../../app/fullService/api';
import axiosFullService from '../../../app/fullService/axiosFullService';

jest.mock('../../../app/fullService/axiosFullService');

describe('getLockedStatus', () => {
  test('calls axiosFullService with method and returns response', async () => {
    const expectedMethod = 'get_locked_status';
    const mockReturn = 'anything';
    const mockAxiosFullService = axiosFullService as jest.MockedFunction<
      typeof axiosFullService
    >;
    mockAxiosFullService.mockImplementation(() => {
      return Promise.resolve(mockReturn);
    });

    expect(await getLockedStatus()).toBe(mockReturn);
    expect(mockAxiosFullService).toBeCalledWith(expectedMethod);
  });
});
