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
import { decrypt as sjclDecrypt, encrypt as sjclEncrypt, SjclCipherEncrypted } from 'sjcl';

export const decrypt = async (
  encryptedObject: SjclCipherEncrypted,
  secretKey: string
): Promise<string> => {
  const sensitiveString = sjclDecrypt(secretKey, encryptedObject);

  return sensitiveString;
};

export const encrypt = async (
  sensitiveString: string,
  secretKey: string
): Promise<SjclCipherEncrypted> => {
  const encryptedObject = sjclEncrypt(secretKey, sensitiveString);

  return encryptedObject;
};
