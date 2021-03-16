import axiosFullService from '../axiosFullService';

const UNLOCK_METHOD = 'unlock';

type UnlockParams = {
  password: string;
};

type UnlockResult = {
  success: boolean;
};

const unlock = async ({ password }: UnlockParams): Promise<UnlockResult> => {
  const { result, error } = await axiosFullService(UNLOCK_METHOD, { password });

  if (error) {
    // TODO - I'll write up a better error handler
    const errorMessage = error === 'Database(PasswordFailed)' ? 'Incorrect Password' : error;
    throw new Error(errorMessage);
  } else {
    return result;
  }
};

export default unlock;
