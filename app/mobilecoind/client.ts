// import { promisify } from 'util';
import { promisify } from 'util';

import type { Empty } from 'google-protobuf/google/protobuf/empty_pb';

// import promisifyAll from '../utils/promisifyAll';
import { MobilecoindAPIClient } from './protos/mobilecoind_api_grpc_pb';
import type {
  AddMonitorRequest,
  AddMonitorResponse,
  CreateAddressCodeRequest,
  CreateTransferCodeResponse,
  GenerateEntropyResponse,
  GenerateTransferCodeTxRequest,
  GenerateTransferCodeTxResponse,
  GenerateTxFromTxOutListRequest,
  GenerateTxFromTxOutListResponse,
  GenerateTxRequest,
  GenerateTxResponse,
  GetAccountKeyRequest,
  GetAccountKeyResponse,
  GetBalanceRequest,
  GetBalanceResponse,
  GetMonitorStatusRequest,
  GetMonitorStatusResponse,
  GetNetworkStatusResponse,
  GetPublicAddressRequest,
  GetPublicAddressResponse,
  GetUnspentTxOutListRequest,
  GetUnspentTxOutListResponse,
  PayAddressCodeRequest,
  ParseAddressCodeRequest,
  ParseAddressCodeResponse,
  ParseTransferCodeRequest,
  ParseTransferCodeResponse,
  SendPaymentResponse,
  SubmitTxRequest,
  SubmitTxResponse,
} from './protos/mobilecoind_api_pb';

const grpc = require('@grpc/grpc-js');

// So, because we call promisifyAll, we remove the callback argument...
// We have two options:
// 1) give all api calls a useless null taht will statisfy the callback expectation
// 2) redefine the client's interface here
// Let's go with 2) for now until we have a better solution.
// Below, the interface should list all current calls withint mobilecoind
// We will add the specific request and response types as we implement their use.
export interface MobilecoindClient {
  addMonitor: (
    AddMonitorRequest: AddMonitorRequest
  ) => Promise<AddMonitorResponse>;
  constructGiftCode: () => Promise<void>;
  createAddressCode: (
    CreateAddressCodeRequest: CreateAddressCodeRequest
  ) => Promise<CreateTransferCodeResponse>;
  createRequestCode: () => Promise<void>;
  createTransferCode: () => Promise<void>;
  generateEntropy: (
    GenerateEntropyRequest: Empty
  ) => Promise<GenerateEntropyResponse>;
  generateOptimizationTx: () => Promise<void>;
  generateTransferCodeTx: (
    GenerateTransferCodeTxRequest: GenerateTransferCodeTxRequest
  ) => Promise<GenerateTransferCodeTxResponse>;
  generateTx: (
    GenerateTxRequest: GenerateTxRequest
  ) => Promise<GenerateTxResponse>;
  generateTxFromTxOutList: (
    GenerateTxFromTxOutListRequest: GenerateTxFromTxOutListRequest
  ) => Promise<GenerateTxFromTxOutListResponse>;
  getAccountKey: (
    GetAccountKeyRequest: GetAccountKeyRequest
  ) => Promise<GetAccountKeyResponse>;
  getBalance: (
    GetBalanceRequest: GetBalanceRequest
  ) => Promise<GetBalanceResponse>;
  getBlock: () => Promise<void>;
  getBlockIndexByTxPubKey: () => Promise<void>;
  getBlockInfo: () => Promise<void>;
  getLedgerInfo: () => Promise<void>;
  getMonitorList: () => Promise<void>;
  getMonitorStatus: (
    GetMonitorStatusRequest: GetMonitorStatusRequest
  ) => Promise<GetMonitorStatusResponse>;
  getNetworkStatus: (
    GetNetworkStatusRequest: Empty
  ) => Promise<GetNetworkStatusResponse>;
  getProcessedBlock: () => Promise<void>;
  getPublicAddress: (
    GetPublicAddressRequest: GetPublicAddressRequest
  ) => Promise<GetPublicAddressResponse>;
  getTxStatusAsReceiver: () => Promise<void>;
  getTxStatusAsSender: () => Promise<void>;
  getUnspentTxOutList: (
    GetUnspentTxOutListRequest: GetUnspentTxOutListRequest
  ) => Promise<GetUnspentTxOutListResponse>;
  parseAddressCode: (
    ParseAddressCodeRequest: ParseAddressCodeRequest
  ) => Promise<ParseAddressCodeResponse>;
  parseRequestCode: () => Promise<void>;
  parseTransferCode: (
    ParseTransferCodeRequest: ParseTransferCodeRequest
  ) => Promise<ParseTransferCodeResponse>;
  payAddressCode: (
    PayAddressCodeRequest: PayAddressCodeRequest
  ) => Promise<SendPaymentResponse>;
  removeMonitor: () => Promise<void>;
  sendPayment: () => Promise<void>;
  submitTx: (SubmitTxRequest: SubmitTxRequest) => Promise<SubmitTxResponse>;
}

// NOTE: All of these hacks are avoided if we get dynamic loading solved
// via buffer-loader (it actually does all of this for us).
// The main issue is, probably simply solved with the correct spike, is
// packaging the .protos into the electron package via electron-builder.
function promisifyClient(client: any): MobilecoindClient {
  Object.keys(Object.getPrototypeOf(client)).forEach((k) => {
    if (typeof client[k] !== 'function') return;

    client[k] = promisify(client[k].bind(client));
  });
  return client;
}

const client: MobilecoindClient = promisifyClient(
  new MobilecoindAPIClient('localhost:4444', grpc.credentials.createInsecure()),
);

export default client;
