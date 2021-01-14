// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// https://github.com/mobilecoinofficial/mobilecoin/blob/master/mobilecoind/api/proto/mobilecoind_api.proto
// Copied: 10-10-2020
//
// Copyright (c) 2018-2020 MobileCoin Inc.
//
// MUST BE KEPT IN SYNC WITH RUST CODE!
//
// mobilecoind client data types and service descriptors.
//

const grpc = require('@grpc/grpc-js');
const google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

const blockchain_pb = require('./blockchain_pb.js');
const external_pb = require('./external_pb.js');
const mobilecoind_api_pb = require('./mobilecoind_api_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_AddMonitorRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.AddMonitorRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.AddMonitorRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_AddMonitorRequest(buffer_arg) {
  return mobilecoind_api_pb.AddMonitorRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_AddMonitorResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.AddMonitorResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.AddMonitorResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_AddMonitorResponse(buffer_arg) {
  return mobilecoind_api_pb.AddMonitorResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_CreateAddressCodeRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.CreateAddressCodeRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.CreateAddressCodeRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_CreateAddressCodeRequest(buffer_arg) {
  return mobilecoind_api_pb.CreateAddressCodeRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_CreateAddressCodeResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.CreateAddressCodeResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.CreateAddressCodeResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_CreateAddressCodeResponse(buffer_arg) {
  return mobilecoind_api_pb.CreateAddressCodeResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_CreateRequestCodeRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.CreateRequestCodeRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.CreateRequestCodeRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_CreateRequestCodeRequest(buffer_arg) {
  return mobilecoind_api_pb.CreateRequestCodeRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_CreateRequestCodeResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.CreateRequestCodeResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.CreateRequestCodeResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_CreateRequestCodeResponse(buffer_arg) {
  return mobilecoind_api_pb.CreateRequestCodeResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_CreateTransferCodeRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.CreateTransferCodeRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.CreateTransferCodeRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_CreateTransferCodeRequest(buffer_arg) {
  return mobilecoind_api_pb.CreateTransferCodeRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_CreateTransferCodeResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.CreateTransferCodeResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.CreateTransferCodeResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_CreateTransferCodeResponse(buffer_arg) {
  return mobilecoind_api_pb.CreateTransferCodeResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GenerateEntropyResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GenerateEntropyResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GenerateEntropyResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GenerateEntropyResponse(buffer_arg) {
  return mobilecoind_api_pb.GenerateEntropyResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GenerateOptimizationTxRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GenerateOptimizationTxRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GenerateOptimizationTxRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GenerateOptimizationTxRequest(buffer_arg) {
  return mobilecoind_api_pb.GenerateOptimizationTxRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GenerateOptimizationTxResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GenerateOptimizationTxResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GenerateOptimizationTxResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GenerateOptimizationTxResponse(
  buffer_arg
) {
  return mobilecoind_api_pb.GenerateOptimizationTxResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GenerateTransferCodeTxRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GenerateTransferCodeTxRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GenerateTransferCodeTxRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GenerateTransferCodeTxRequest(buffer_arg) {
  return mobilecoind_api_pb.GenerateTransferCodeTxRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GenerateTransferCodeTxResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GenerateTransferCodeTxResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GenerateTransferCodeTxResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GenerateTransferCodeTxResponse(
  buffer_arg
) {
  return mobilecoind_api_pb.GenerateTransferCodeTxResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GenerateTxFromTxOutListRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GenerateTxFromTxOutListRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GenerateTxFromTxOutListRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GenerateTxFromTxOutListRequest(
  buffer_arg
) {
  return mobilecoind_api_pb.GenerateTxFromTxOutListRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GenerateTxFromTxOutListResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GenerateTxFromTxOutListResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GenerateTxFromTxOutListResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GenerateTxFromTxOutListResponse(
  buffer_arg
) {
  return mobilecoind_api_pb.GenerateTxFromTxOutListResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GenerateTxRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GenerateTxRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GenerateTxRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GenerateTxRequest(buffer_arg) {
  return mobilecoind_api_pb.GenerateTxRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GenerateTxResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GenerateTxResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GenerateTxResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GenerateTxResponse(buffer_arg) {
  return mobilecoind_api_pb.GenerateTxResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetAccountKeyRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetAccountKeyRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetAccountKeyRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetAccountKeyRequest(buffer_arg) {
  return mobilecoind_api_pb.GetAccountKeyRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetAccountKeyResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetAccountKeyResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetAccountKeyResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetAccountKeyResponse(buffer_arg) {
  return mobilecoind_api_pb.GetAccountKeyResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetBalanceRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetBalanceRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetBalanceRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetBalanceRequest(buffer_arg) {
  return mobilecoind_api_pb.GetBalanceRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetBalanceResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetBalanceResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetBalanceResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetBalanceResponse(buffer_arg) {
  return mobilecoind_api_pb.GetBalanceResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetBlockIndexByTxPubKeyRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetBlockIndexByTxPubKeyRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetBlockIndexByTxPubKeyRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetBlockIndexByTxPubKeyRequest(
  buffer_arg
) {
  return mobilecoind_api_pb.GetBlockIndexByTxPubKeyRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetBlockIndexByTxPubKeyResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetBlockIndexByTxPubKeyResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetBlockIndexByTxPubKeyResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetBlockIndexByTxPubKeyResponse(
  buffer_arg
) {
  return mobilecoind_api_pb.GetBlockIndexByTxPubKeyResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetBlockInfoRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetBlockInfoRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetBlockInfoRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetBlockInfoRequest(buffer_arg) {
  return mobilecoind_api_pb.GetBlockInfoRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetBlockInfoResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetBlockInfoResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetBlockInfoResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetBlockInfoResponse(buffer_arg) {
  return mobilecoind_api_pb.GetBlockInfoResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetBlockRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetBlockRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetBlockRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetBlockRequest(buffer_arg) {
  return mobilecoind_api_pb.GetBlockRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetBlockResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetBlockResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetBlockResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetBlockResponse(buffer_arg) {
  return mobilecoind_api_pb.GetBlockResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetLedgerInfoResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetLedgerInfoResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetLedgerInfoResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetLedgerInfoResponse(buffer_arg) {
  return mobilecoind_api_pb.GetLedgerInfoResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetMonitorListResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetMonitorListResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetMonitorListResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetMonitorListResponse(buffer_arg) {
  return mobilecoind_api_pb.GetMonitorListResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetMonitorStatusRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetMonitorStatusRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetMonitorStatusRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetMonitorStatusRequest(buffer_arg) {
  return mobilecoind_api_pb.GetMonitorStatusRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetMonitorStatusResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetMonitorStatusResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetMonitorStatusResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetMonitorStatusResponse(buffer_arg) {
  return mobilecoind_api_pb.GetMonitorStatusResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetNetworkStatusResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetNetworkStatusResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetNetworkStatusResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetNetworkStatusResponse(buffer_arg) {
  return mobilecoind_api_pb.GetNetworkStatusResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetProcessedBlockRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetProcessedBlockRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetProcessedBlockRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetProcessedBlockRequest(buffer_arg) {
  return mobilecoind_api_pb.GetProcessedBlockRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetProcessedBlockResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetProcessedBlockResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetProcessedBlockResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetProcessedBlockResponse(buffer_arg) {
  return mobilecoind_api_pb.GetProcessedBlockResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetPublicAddressRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetPublicAddressRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetPublicAddressRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetPublicAddressRequest(buffer_arg) {
  return mobilecoind_api_pb.GetPublicAddressRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetPublicAddressResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetPublicAddressResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetPublicAddressResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetPublicAddressResponse(buffer_arg) {
  return mobilecoind_api_pb.GetPublicAddressResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetTxStatusAsReceiverRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetTxStatusAsReceiverRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetTxStatusAsReceiverRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetTxStatusAsReceiverRequest(buffer_arg) {
  return mobilecoind_api_pb.GetTxStatusAsReceiverRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetTxStatusAsReceiverResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetTxStatusAsReceiverResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetTxStatusAsReceiverResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetTxStatusAsReceiverResponse(buffer_arg) {
  return mobilecoind_api_pb.GetTxStatusAsReceiverResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetTxStatusAsSenderRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetTxStatusAsSenderRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetTxStatusAsSenderRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetTxStatusAsSenderRequest(buffer_arg) {
  return mobilecoind_api_pb.GetTxStatusAsSenderRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetTxStatusAsSenderResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetTxStatusAsSenderResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetTxStatusAsSenderResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetTxStatusAsSenderResponse(buffer_arg) {
  return mobilecoind_api_pb.GetTxStatusAsSenderResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetUnspentTxOutListRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetUnspentTxOutListRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetUnspentTxOutListRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetUnspentTxOutListRequest(buffer_arg) {
  return mobilecoind_api_pb.GetUnspentTxOutListRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_GetUnspentTxOutListResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.GetUnspentTxOutListResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.GetUnspentTxOutListResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_GetUnspentTxOutListResponse(buffer_arg) {
  return mobilecoind_api_pb.GetUnspentTxOutListResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_ParseAddressCodeRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.ParseAddressCodeRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.ParseAddressCodeRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_ParseAddressCodeRequest(buffer_arg) {
  return mobilecoind_api_pb.ParseAddressCodeRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_ParseAddressCodeResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.ParseAddressCodeResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.ParseAddressCodeResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_ParseAddressCodeResponse(buffer_arg) {
  return mobilecoind_api_pb.ParseAddressCodeResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_ParseRequestCodeRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.ParseRequestCodeRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.ParseRequestCodeRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_ParseRequestCodeRequest(buffer_arg) {
  return mobilecoind_api_pb.ParseRequestCodeRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_ParseRequestCodeResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.ParseRequestCodeResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.ParseRequestCodeResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_ParseRequestCodeResponse(buffer_arg) {
  return mobilecoind_api_pb.ParseRequestCodeResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_ParseTransferCodeRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.ParseTransferCodeRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.ParseTransferCodeRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_ParseTransferCodeRequest(buffer_arg) {
  return mobilecoind_api_pb.ParseTransferCodeRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_ParseTransferCodeResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.ParseTransferCodeResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.ParseTransferCodeResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_ParseTransferCodeResponse(buffer_arg) {
  return mobilecoind_api_pb.ParseTransferCodeResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_PayAddressCodeRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.PayAddressCodeRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.PayAddressCodeRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_PayAddressCodeRequest(buffer_arg) {
  return mobilecoind_api_pb.PayAddressCodeRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_RemoveMonitorRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.RemoveMonitorRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.RemoveMonitorRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_RemoveMonitorRequest(buffer_arg) {
  return mobilecoind_api_pb.RemoveMonitorRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_SendPaymentRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.SendPaymentRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.SendPaymentRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_SendPaymentRequest(buffer_arg) {
  return mobilecoind_api_pb.SendPaymentRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_SendPaymentResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.SendPaymentResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.SendPaymentResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_SendPaymentResponse(buffer_arg) {
  return mobilecoind_api_pb.SendPaymentResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_SubmitTxRequest(arg) {
  if (!(arg instanceof mobilecoind_api_pb.SubmitTxRequest)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.SubmitTxRequest'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_SubmitTxRequest(buffer_arg) {
  return mobilecoind_api_pb.SubmitTxRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_mobilecoind_api_SubmitTxResponse(arg) {
  if (!(arg instanceof mobilecoind_api_pb.SubmitTxResponse)) {
    throw new Error(
      'Expected argument of type mobilecoind_api.SubmitTxResponse'
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mobilecoind_api_SubmitTxResponse(buffer_arg) {
  return mobilecoind_api_pb.SubmitTxResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

const MobilecoindAPIService = (exports.MobilecoindAPIService = {
  // Monitors
  addMonitor: {
    path: '/mobilecoind_api.MobilecoindAPI/AddMonitor',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.AddMonitorRequest,
    responseType: mobilecoind_api_pb.AddMonitorResponse,
    requestSerialize: serialize_mobilecoind_api_AddMonitorRequest,
    requestDeserialize: deserialize_mobilecoind_api_AddMonitorRequest,
    responseSerialize: serialize_mobilecoind_api_AddMonitorResponse,
    responseDeserialize: deserialize_mobilecoind_api_AddMonitorResponse,
  },
  removeMonitor: {
    path: '/mobilecoind_api.MobilecoindAPI/RemoveMonitor',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.RemoveMonitorRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_mobilecoind_api_RemoveMonitorRequest,
    requestDeserialize: deserialize_mobilecoind_api_RemoveMonitorRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getMonitorList: {
    path: '/mobilecoind_api.MobilecoindAPI/GetMonitorList',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: mobilecoind_api_pb.GetMonitorListResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_mobilecoind_api_GetMonitorListResponse,
    responseDeserialize: deserialize_mobilecoind_api_GetMonitorListResponse,
  },
  getMonitorStatus: {
    path: '/mobilecoind_api.MobilecoindAPI/GetMonitorStatus',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.GetMonitorStatusRequest,
    responseType: mobilecoind_api_pb.GetMonitorStatusResponse,
    requestSerialize: serialize_mobilecoind_api_GetMonitorStatusRequest,
    requestDeserialize: deserialize_mobilecoind_api_GetMonitorStatusRequest,
    responseSerialize: serialize_mobilecoind_api_GetMonitorStatusResponse,
    responseDeserialize: deserialize_mobilecoind_api_GetMonitorStatusResponse,
  },
  getUnspentTxOutList: {
    path: '/mobilecoind_api.MobilecoindAPI/GetUnspentTxOutList',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.GetUnspentTxOutListRequest,
    responseType: mobilecoind_api_pb.GetUnspentTxOutListResponse,
    requestSerialize: serialize_mobilecoind_api_GetUnspentTxOutListRequest,
    requestDeserialize: deserialize_mobilecoind_api_GetUnspentTxOutListRequest,
    responseSerialize: serialize_mobilecoind_api_GetUnspentTxOutListResponse,
    responseDeserialize: deserialize_mobilecoind_api_GetUnspentTxOutListResponse,
  },
  // Utilities
  generateEntropy: {
    path: '/mobilecoind_api.MobilecoindAPI/GenerateEntropy',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: mobilecoind_api_pb.GenerateEntropyResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_mobilecoind_api_GenerateEntropyResponse,
    responseDeserialize: deserialize_mobilecoind_api_GenerateEntropyResponse,
  },
  getAccountKey: {
    path: '/mobilecoind_api.MobilecoindAPI/GetAccountKey',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.GetAccountKeyRequest,
    responseType: mobilecoind_api_pb.GetAccountKeyResponse,
    requestSerialize: serialize_mobilecoind_api_GetAccountKeyRequest,
    requestDeserialize: deserialize_mobilecoind_api_GetAccountKeyRequest,
    responseSerialize: serialize_mobilecoind_api_GetAccountKeyResponse,
    responseDeserialize: deserialize_mobilecoind_api_GetAccountKeyResponse,
  },
  getPublicAddress: {
    path: '/mobilecoind_api.MobilecoindAPI/GetPublicAddress',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.GetPublicAddressRequest,
    responseType: mobilecoind_api_pb.GetPublicAddressResponse,
    requestSerialize: serialize_mobilecoind_api_GetPublicAddressRequest,
    requestDeserialize: deserialize_mobilecoind_api_GetPublicAddressRequest,
    responseSerialize: serialize_mobilecoind_api_GetPublicAddressResponse,
    responseDeserialize: deserialize_mobilecoind_api_GetPublicAddressResponse,
  },
  // b58 Codes
  parseRequestCode: {
    path: '/mobilecoind_api.MobilecoindAPI/ParseRequestCode',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.ParseRequestCodeRequest,
    responseType: mobilecoind_api_pb.ParseRequestCodeResponse,
    requestSerialize: serialize_mobilecoind_api_ParseRequestCodeRequest,
    requestDeserialize: deserialize_mobilecoind_api_ParseRequestCodeRequest,
    responseSerialize: serialize_mobilecoind_api_ParseRequestCodeResponse,
    responseDeserialize: deserialize_mobilecoind_api_ParseRequestCodeResponse,
  },
  createRequestCode: {
    path: '/mobilecoind_api.MobilecoindAPI/CreateRequestCode',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.CreateRequestCodeRequest,
    responseType: mobilecoind_api_pb.CreateRequestCodeResponse,
    requestSerialize: serialize_mobilecoind_api_CreateRequestCodeRequest,
    requestDeserialize: deserialize_mobilecoind_api_CreateRequestCodeRequest,
    responseSerialize: serialize_mobilecoind_api_CreateRequestCodeResponse,
    responseDeserialize: deserialize_mobilecoind_api_CreateRequestCodeResponse,
  },
  parseTransferCode: {
    path: '/mobilecoind_api.MobilecoindAPI/ParseTransferCode',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.ParseTransferCodeRequest,
    responseType: mobilecoind_api_pb.ParseTransferCodeResponse,
    requestSerialize: serialize_mobilecoind_api_ParseTransferCodeRequest,
    requestDeserialize: deserialize_mobilecoind_api_ParseTransferCodeRequest,
    responseSerialize: serialize_mobilecoind_api_ParseTransferCodeResponse,
    responseDeserialize: deserialize_mobilecoind_api_ParseTransferCodeResponse,
  },
  createTransferCode: {
    path: '/mobilecoind_api.MobilecoindAPI/CreateTransferCode',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.CreateTransferCodeRequest,
    responseType: mobilecoind_api_pb.CreateTransferCodeResponse,
    requestSerialize: serialize_mobilecoind_api_CreateTransferCodeRequest,
    requestDeserialize: deserialize_mobilecoind_api_CreateTransferCodeRequest,
    responseSerialize: serialize_mobilecoind_api_CreateTransferCodeResponse,
    responseDeserialize: deserialize_mobilecoind_api_CreateTransferCodeResponse,
  },
  parseAddressCode: {
    path: '/mobilecoind_api.MobilecoindAPI/ParseAddressCode',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.ParseAddressCodeRequest,
    responseType: mobilecoind_api_pb.ParseAddressCodeResponse,
    requestSerialize: serialize_mobilecoind_api_ParseAddressCodeRequest,
    requestDeserialize: deserialize_mobilecoind_api_ParseAddressCodeRequest,
    responseSerialize: serialize_mobilecoind_api_ParseAddressCodeResponse,
    responseDeserialize: deserialize_mobilecoind_api_ParseAddressCodeResponse,
  },
  createAddressCode: {
    path: '/mobilecoind_api.MobilecoindAPI/CreateAddressCode',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.CreateAddressCodeRequest,
    responseType: mobilecoind_api_pb.CreateAddressCodeResponse,
    requestSerialize: serialize_mobilecoind_api_CreateAddressCodeRequest,
    requestDeserialize: deserialize_mobilecoind_api_CreateAddressCodeRequest,
    responseSerialize: serialize_mobilecoind_api_CreateAddressCodeResponse,
    responseDeserialize: deserialize_mobilecoind_api_CreateAddressCodeResponse,
  },
  // Txs
  generateTx: {
    path: '/mobilecoind_api.MobilecoindAPI/GenerateTx',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.GenerateTxRequest,
    responseType: mobilecoind_api_pb.GenerateTxResponse,
    requestSerialize: serialize_mobilecoind_api_GenerateTxRequest,
    requestDeserialize: deserialize_mobilecoind_api_GenerateTxRequest,
    responseSerialize: serialize_mobilecoind_api_GenerateTxResponse,
    responseDeserialize: deserialize_mobilecoind_api_GenerateTxResponse,
  },
  generateOptimizationTx: {
    path: '/mobilecoind_api.MobilecoindAPI/GenerateOptimizationTx',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.GenerateOptimizationTxRequest,
    responseType: mobilecoind_api_pb.GenerateOptimizationTxResponse,
    requestSerialize: serialize_mobilecoind_api_GenerateOptimizationTxRequest,
    requestDeserialize: deserialize_mobilecoind_api_GenerateOptimizationTxRequest,
    responseSerialize: serialize_mobilecoind_api_GenerateOptimizationTxResponse,
    responseDeserialize: deserialize_mobilecoind_api_GenerateOptimizationTxResponse,
  },
  generateTransferCodeTx: {
    path: '/mobilecoind_api.MobilecoindAPI/GenerateTransferCodeTx',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.GenerateTransferCodeTxRequest,
    responseType: mobilecoind_api_pb.GenerateTransferCodeTxResponse,
    requestSerialize: serialize_mobilecoind_api_GenerateTransferCodeTxRequest,
    requestDeserialize: deserialize_mobilecoind_api_GenerateTransferCodeTxRequest,
    responseSerialize: serialize_mobilecoind_api_GenerateTransferCodeTxResponse,
    responseDeserialize: deserialize_mobilecoind_api_GenerateTransferCodeTxResponse,
  },
  generateTxFromTxOutList: {
    path: '/mobilecoind_api.MobilecoindAPI/GenerateTxFromTxOutList',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.GenerateTxFromTxOutListRequest,
    responseType: mobilecoind_api_pb.GenerateTxFromTxOutListResponse,
    requestSerialize: serialize_mobilecoind_api_GenerateTxFromTxOutListRequest,
    requestDeserialize: deserialize_mobilecoind_api_GenerateTxFromTxOutListRequest,
    responseSerialize: serialize_mobilecoind_api_GenerateTxFromTxOutListResponse,
    responseDeserialize: deserialize_mobilecoind_api_GenerateTxFromTxOutListResponse,
  },
  submitTx: {
    path: '/mobilecoind_api.MobilecoindAPI/SubmitTx',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.SubmitTxRequest,
    responseType: mobilecoind_api_pb.SubmitTxResponse,
    requestSerialize: serialize_mobilecoind_api_SubmitTxRequest,
    requestDeserialize: deserialize_mobilecoind_api_SubmitTxRequest,
    responseSerialize: serialize_mobilecoind_api_SubmitTxResponse,
    responseDeserialize: deserialize_mobilecoind_api_SubmitTxResponse,
  },
  // Databases
  getLedgerInfo: {
    path: '/mobilecoind_api.MobilecoindAPI/GetLedgerInfo',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: mobilecoind_api_pb.GetLedgerInfoResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_mobilecoind_api_GetLedgerInfoResponse,
    responseDeserialize: deserialize_mobilecoind_api_GetLedgerInfoResponse,
  },
  getBlockInfo: {
    path: '/mobilecoind_api.MobilecoindAPI/GetBlockInfo',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.GetBlockInfoRequest,
    responseType: mobilecoind_api_pb.GetBlockInfoResponse,
    requestSerialize: serialize_mobilecoind_api_GetBlockInfoRequest,
    requestDeserialize: deserialize_mobilecoind_api_GetBlockInfoRequest,
    responseSerialize: serialize_mobilecoind_api_GetBlockInfoResponse,
    responseDeserialize: deserialize_mobilecoind_api_GetBlockInfoResponse,
  },
  getBlock: {
    path: '/mobilecoind_api.MobilecoindAPI/GetBlock',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.GetBlockRequest,
    responseType: mobilecoind_api_pb.GetBlockResponse,
    requestSerialize: serialize_mobilecoind_api_GetBlockRequest,
    requestDeserialize: deserialize_mobilecoind_api_GetBlockRequest,
    responseSerialize: serialize_mobilecoind_api_GetBlockResponse,
    responseDeserialize: deserialize_mobilecoind_api_GetBlockResponse,
  },
  getTxStatusAsSender: {
    path: '/mobilecoind_api.MobilecoindAPI/GetTxStatusAsSender',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.GetTxStatusAsSenderRequest,
    responseType: mobilecoind_api_pb.GetTxStatusAsSenderResponse,
    requestSerialize: serialize_mobilecoind_api_GetTxStatusAsSenderRequest,
    requestDeserialize: deserialize_mobilecoind_api_GetTxStatusAsSenderRequest,
    responseSerialize: serialize_mobilecoind_api_GetTxStatusAsSenderResponse,
    responseDeserialize: deserialize_mobilecoind_api_GetTxStatusAsSenderResponse,
  },
  getTxStatusAsReceiver: {
    path: '/mobilecoind_api.MobilecoindAPI/GetTxStatusAsReceiver',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.GetTxStatusAsReceiverRequest,
    responseType: mobilecoind_api_pb.GetTxStatusAsReceiverResponse,
    requestSerialize: serialize_mobilecoind_api_GetTxStatusAsReceiverRequest,
    requestDeserialize: deserialize_mobilecoind_api_GetTxStatusAsReceiverRequest,
    responseSerialize: serialize_mobilecoind_api_GetTxStatusAsReceiverResponse,
    responseDeserialize: deserialize_mobilecoind_api_GetTxStatusAsReceiverResponse,
  },
  getProcessedBlock: {
    path: '/mobilecoind_api.MobilecoindAPI/GetProcessedBlock',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.GetProcessedBlockRequest,
    responseType: mobilecoind_api_pb.GetProcessedBlockResponse,
    requestSerialize: serialize_mobilecoind_api_GetProcessedBlockRequest,
    requestDeserialize: deserialize_mobilecoind_api_GetProcessedBlockRequest,
    responseSerialize: serialize_mobilecoind_api_GetProcessedBlockResponse,
    responseDeserialize: deserialize_mobilecoind_api_GetProcessedBlockResponse,
  },
  getBlockIndexByTxPubKey: {
    path: '/mobilecoind_api.MobilecoindAPI/GetBlockIndexByTxPubKey',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.GetBlockIndexByTxPubKeyRequest,
    responseType: mobilecoind_api_pb.GetBlockIndexByTxPubKeyResponse,
    requestSerialize: serialize_mobilecoind_api_GetBlockIndexByTxPubKeyRequest,
    requestDeserialize: deserialize_mobilecoind_api_GetBlockIndexByTxPubKeyRequest,
    responseSerialize: serialize_mobilecoind_api_GetBlockIndexByTxPubKeyResponse,
    responseDeserialize: deserialize_mobilecoind_api_GetBlockIndexByTxPubKeyResponse,
  },
  // Convenience calls
  getBalance: {
    path: '/mobilecoind_api.MobilecoindAPI/GetBalance',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.GetBalanceRequest,
    responseType: mobilecoind_api_pb.GetBalanceResponse,
    requestSerialize: serialize_mobilecoind_api_GetBalanceRequest,
    requestDeserialize: deserialize_mobilecoind_api_GetBalanceRequest,
    responseSerialize: serialize_mobilecoind_api_GetBalanceResponse,
    responseDeserialize: deserialize_mobilecoind_api_GetBalanceResponse,
  },
  sendPayment: {
    path: '/mobilecoind_api.MobilecoindAPI/SendPayment',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.SendPaymentRequest,
    responseType: mobilecoind_api_pb.SendPaymentResponse,
    requestSerialize: serialize_mobilecoind_api_SendPaymentRequest,
    requestDeserialize: deserialize_mobilecoind_api_SendPaymentRequest,
    responseSerialize: serialize_mobilecoind_api_SendPaymentResponse,
    responseDeserialize: deserialize_mobilecoind_api_SendPaymentResponse,
  },
  payAddressCode: {
    path: '/mobilecoind_api.MobilecoindAPI/PayAddressCode',
    requestStream: false,
    responseStream: false,
    requestType: mobilecoind_api_pb.PayAddressCodeRequest,
    responseType: mobilecoind_api_pb.SendPaymentResponse,
    requestSerialize: serialize_mobilecoind_api_PayAddressCodeRequest,
    requestDeserialize: deserialize_mobilecoind_api_PayAddressCodeRequest,
    responseSerialize: serialize_mobilecoind_api_SendPaymentResponse,
    responseDeserialize: deserialize_mobilecoind_api_SendPaymentResponse,
  },
  // Network status
  getNetworkStatus: {
    path: '/mobilecoind_api.MobilecoindAPI/GetNetworkStatus',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: mobilecoind_api_pb.GetNetworkStatusResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_mobilecoind_api_GetNetworkStatusResponse,
    responseDeserialize: deserialize_mobilecoind_api_GetNetworkStatusResponse,
  },
});

exports.MobilecoindAPIClient = grpc.makeGenericClientConstructor(
  MobilecoindAPIService
);
