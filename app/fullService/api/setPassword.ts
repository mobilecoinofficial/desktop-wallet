import axiosFullService from '../axiosFullService';

const SET_PASSWORD_METHOD = 'set_password';

type SetPasswordParams = {
  password: string;
};

type SetPasswordResult = {
  success: boolean;
};

const setPassword = async ({ password }: SetPasswordParams): Promise<SetPasswordResult> => {
  const { result, error } = await axiosFullService(SET_PASSWORD_METHOD, {
    password,
  });

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default setPassword;
