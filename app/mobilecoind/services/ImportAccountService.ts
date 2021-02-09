// import * as mobileCoinDAPI from '../protos/mobilecoind_api_pb';
import { getAccountKey, getPublicAddress, addMonitor, getBalance, parseAddressCode } from '../api';
import BaseService from './BaseService';
import EncryptEntropyService from './EncryptEntropyService';

interface ImportAccountServiceArgs {
  entropy: Uint8Array | string;
  name: string | null;
  password: string;
  unlockingWallet?: boolean;
}

// TODO -- looks like i should break this out to
// use AddAccountService -- used by both Create and Import
class ImportAccountService extends BaseService<ImportAccountServiceArgs> {
  async call() {
    try {
      const { name, entropy, password, unlockingWallet } = this.argsObj;
      const entropyBuffer =
        typeof entropy === 'string' ? Buffer.from(entropy, 'hex') : Buffer.from(entropy); // lets normalize Uint8Arrays to Buffers
      const GetAccountKeyResponse = await getAccountKey(this.client, {
        entropy: entropyBuffer,
      });
      // TODO -- let's consolidate these constants to one location
      // FIXME: This is true for all of mobilecoind, why am i making so many calls
      // When mobilecoind should be able to give me this information in one call
      const AddMonitorResponse = await addMonitor(this.client, {
        accountKey: GetAccountKeyResponse.getAccountKey(),
        firstBlock: 0,
        firstSubaddress: 0,
        name,
        numSubaddresses: 1, // we are only tracking 1 subaddress
      });
      const monitorId = AddMonitorResponse.getMonitorId();
      const GetPublicAddressResponse = await getPublicAddress(this.client, {
        monitorId,
        subaddressIndex: 0,
      });
      const b58Code = GetPublicAddressResponse.getB58Code();
      const ParseAddressCodeResponse = await parseAddressCode(this.client, {
        b58Code,
      });
      const receiver = ParseAddressCodeResponse.getReceiver();
      if (receiver === undefined) {
        throw new Error('Could not find receiver from public address.');
      }

      const GetBalanceResponse = await getBalance(this.client, {
        monitorId,
        subaddressIndex: 0,
      });
      const balance = GetBalanceResponse.getBalance();

      // TODO - we should really refactor this out into a different service namespace
      // --- maybe bring all of the services there and add client as part as the expected args
      // --- for now, let's just power through by calling null for client
      // TODO - we really shouldn't always shouldn't re-encrypt when we log in
      // let's look into factoring this out and making things smoother.
      if (!unlockingWallet) {
        const EncryptEntropyServiceInstance = new EncryptEntropyService(null, {
          entropyBuffer,
          name,
          password,
        });
        const {
          data: encryptedEntropy,
          isSuccess,
          errorMessage,
        } = await EncryptEntropyServiceInstance.call();

        if (isSuccess) {
          return this.handleSuccess({
            accountName: name, // this is hacking using the input. something is wrong with mob d
            b58Code,
            balance,
            encryptedEntropy,
            entropy,
            monitorId,
            receiver,
          });
        }
        throw new Error(errorMessage);
      } else {
        return this.handleSuccess({
          accountName: name, // this is hacking using the input. something is wrong with mob d
          b58Code,
          balance,
          entropy,
          monitorId,
          receiver,
        });
      }
    } catch (err) {
      return this.handleError(err);
    }
  }
}

// We need to assign to have access to static methods
export default ImportAccountService;
