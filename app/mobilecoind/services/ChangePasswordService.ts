// import * as mobileCoinDAPI from '../protos/mobilecoind_api_pb';
import BaseService from './BaseService';
import DecryptEntropyService from './DecryptEntropyService';
import EncryptEntropyService from './EncryptEntropyService';

interface ChangePasswordServiceArgs {
  oldPassword: string;
  newPassword: string;
}

class ChangePasswordService extends BaseService<ChangePasswordServiceArgs> {
  async call() {
    try {
      const { oldPassword, newPassword } = this.argsObj;

      const DecryptEntropyServiceInstance = new DecryptEntropyService(null, {
        password: oldPassword,
      });
      const {
        data: dataDecrypt,
        errorMessage: errorMessageDecrypt,
        isSuccess: isSuccessDecrypt,
      } = await DecryptEntropyServiceInstance.call();
      if (!isSuccessDecrypt) {
        throw new Error(errorMessageDecrypt);
      }

      const { entropy, name } = dataDecrypt;
      if (typeof entropy !== 'string') {
        throw new Error('Cannot find existing wallet');
      }

      const entropyBuffer = Buffer.from(entropy, 'hex');
      const EncryptEntropyServiceInstance = new EncryptEntropyService(null, {
        entropyBuffer,
        name,
        password: newPassword,
      });
      const { isSuccess, errorMessage } = await EncryptEntropyServiceInstance.call();
      if (isSuccess) {
        return this.handleSuccess({});
      }
      throw new Error(errorMessage);
    } catch (err) {
      const error =
        err.message === "ccm: tag doesn't match" ? new Error('Incorrect Password') : err;
      return this.handleError(error);
    }
  }
}

export default ChangePasswordService;
