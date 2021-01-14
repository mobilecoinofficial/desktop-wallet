import { generateEntropy } from '../api';
import BaseService from './BaseService';
import ImportAccountService from './ImportAccountService';

// accountName, entropyString, password;

interface CreateAccountServiceArgs {
  name: string | null;
  password: string;
}
class CreateAccountService extends BaseService<CreateAccountServiceArgs> {
  async call() {
    try {
      const { name, password } = this.argsObj;
      const GenerateEntropyResponse = await generateEntropy(this.client);
      const entropy = GenerateEntropyResponse.getEntropy();
      const ImportAccountServiceInstance = new ImportAccountService(
        this.client,
        {
          entropy,
          name,
          password,
        },
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

export default CreateAccountService;
