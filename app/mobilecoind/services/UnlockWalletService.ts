import BaseService from './BaseService';
import DecryptEntropyService from './DecryptEntropyService';
import ImportAccountService from './ImportAccountService';

interface UnlockWalletServiceArgs {
  password: string;
}

class UnlockWalletService extends BaseService<UnlockWalletServiceArgs> {
  async call() {
    try {
      const { password } = this.argsObj;
      const DecryptEntropyServiceInstance = new DecryptEntropyService(null, {
        password,
      });

      const {
        data: dataDecrypt,
        errorMessage: errorMessageDecrypt,
        isSuccess: isSuccessDecrypt,
      } = await DecryptEntropyServiceInstance.call();
      if (!isSuccessDecrypt) throw new Error(errorMessageDecrypt);

      const { entropy, name } = dataDecrypt;

      const ImportAccountServiceInstance = new ImportAccountService(
        this.client,
        {
          entropy,
          name,
          password,
          unlockingWallet: true,
        }
      );

      const {
        isSuccess,
        data,
        errorMessage,
      } = await ImportAccountServiceInstance.call();

      if (isSuccess) {
        return this.handleSuccess(data);
      }
      throw new Error(errorMessage);
    } catch (err) {
      return this.handleError(err);
    }
  }
}

export default UnlockWalletService;
