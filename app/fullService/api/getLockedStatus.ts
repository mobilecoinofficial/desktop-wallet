import axiosFullService from '../axiosFullService';

const GET_LOCKED_STATUS_METHOD = 'get_locked_status';

type GetLockedStatusResult = {
  status: 'NeverLocked' | 'isLocked' | 'Unlocked';
};

const getLockedStatus = async (): Promise<GetLockedStatusResult> => {
  const { result, error } = await axiosFullService(GET_LOCKED_STATUS_METHOD);

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default getLockedStatus;
