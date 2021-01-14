// import * as mobileCoinDAPI from '../protos/mobilecoind_api_pb';
import { encrypt } from 'sjcl';

import LocalStore from '../../utils/LocalStore';
import scryptKeys from '../../utils/scryptKeys';
import BaseService from './BaseService';

interface EncryptEntropyServiceArgs {
  entropyBuffer: Buffer;
  name: string | null; // mobilecoind monitor name function appears to be broken. let's store locally for now
  password: string;
}

// TODO - clean up this note

// {
// "iv":"tjp81jkAzUpW1bI9gLDDpg==", // iv Base64 encoded
// "v":1,                           // version
// "iter":1000,                     // iteration count
// "ks":128,                        // key size in bits
// "ts":64,                         // authentication strength
// "mode":"ccm",                    // mode
// "adata":"xxx",                   // authenticated data
// "cipher":"aes",                  // cipher
// "salt":"lx06UoJDNys=",           // key derivation salt
// "ct":"Gv7ptKdTtUz6AGtX"          // ciphet text
// }

// /** Default values for encryption */
// defaults: { v:1, iter:10000, ks:128, ts:64, mode:"ccm", adata:"", cipher:"aes" },
// /** Simple encryption function.
//  * @param {String|bitArray} password The password or key.
//  * @param {String} plaintext The data to encrypt.
//  * @param {Object} [params] The parameters including tag, iv and salt.
//  * @param {Object} [rp] A returned version with filled-in parameters.
//  * @return {Object} The cipher raw data.
//  * @throws {sjcl.exception.invalid} if a parameter is invalid.
//  */

class EncryptEntropyService extends BaseService<EncryptEntropyServiceArgs> {
  async call() {
    try {
      const LocalStoreInstance = new LocalStore();
      const { entropyBuffer, name, password } = this.argsObj;
      const { publicSaltString, secretKeyString } = await scryptKeys(password);

      // TODO - right now we're using sjcl for ease of use. We should spike into
      // crypto.createCipheriv to see what benefits we get.
      const entropyString = entropyBuffer.toString('hex');
      const encryptedEntropy = encrypt(secretKeyString, entropyString);
      // TODO, right now, we're just lazily storing these values at the top layer
      // later, when we implement multiple accounts, this information should be nested
      // and normalized

      LocalStoreInstance.setEncryptedEntropy(encryptedEntropy);
      LocalStoreInstance.setSalt(publicSaltString);
      LocalStoreInstance.setName(name);

      return this.handleSuccess({});
    } catch (err) {
      return this.handleError(err);
    }
  }
}

// We need to assign to have access to static methods
export default EncryptEntropyService;
