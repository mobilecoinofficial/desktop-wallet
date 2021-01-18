import axiosFullService from '../axiosFullService';

type GetLockedStatusResponse = {
  status: 'NeverLocked' | 'isLocked' | 'Unlocked'
};

const getLockedStatus = async (): Promise<GetLockedStatusResponse> => {
  return axiosFullService('get_locked_status');
};

export default getLockedStatus;
