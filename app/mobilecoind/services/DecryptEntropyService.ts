// import * as mobileCoinDAPI from '../protos/mobilecoind_api_pb';
import { decrypt } from 'sjcl';

import LocalStore from '../../utils/LocalStore';
import scryptKeys from '../../utils/scryptKeys';
import BaseService from './BaseService';

interface DecryptEntropyServiceArgs {
  password: string;
}

class DecryptEntropyService extends BaseService<DecryptEntropyServiceArgs> {
  // It looks like the password we used has a different salt
  // because the salt is lost, we cannot properly unlock
  // we should save the salt to store
  async call() {
    try {
      const LocalStoreInstance = new LocalStore();

      const { password } = this.argsObj;
      const encryptedEntropy = LocalStoreInstance.getEncryptedEntropy();
      if (typeof encryptedEntropy !== 'string') {
        throw new Error('Cannot find existing wallet');
      }

      const salt = LocalStoreInstance.getSalt();
      if (typeof salt !== 'string') throw new Error('Cannot find existing wallet');

      const { secretKeyString } = await scryptKeys(password, salt);

      const entropy = decrypt(secretKeyString, encryptedEntropy);
      const name = LocalStoreInstance.getName();

      return this.handleSuccess({ entropy, name });
    } catch (err) {
      const error = err.message === "ccm: tag doesn't match" ? new Error('Incorrect Password') : err;
      return this.handleError(error);
    }
  }
}

// We need to assign to have access to static methods
export default DecryptEntropyService;
