// change_password { oldPassword: "", newPassword: "" }
import axiosFullService from '../axiosFullService';

const CHANGE_PASSWORD_METHOD = 'change_password';

type ChangePasswordParams = {
  newPassword: string;
  oldPassword: string;
};

type ChangePasswordResponse = {
  success: boolean;
};

const changePassword = async ({
  newPassword,
  oldPassword,
}: ChangePasswordParams): Promise<ChangePasswordResponse> => {
  return axiosFullService(CHANGE_PASSWORD_METHOD, {
    new_password: newPassword,
    old_password: oldPassword,
  });
};

export default changePassword;
