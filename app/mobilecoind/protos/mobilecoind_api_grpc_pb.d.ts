// package: mobilecoind_api
// file: mobilecoind_api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as mobilecoind_api_pb from "./mobilecoind_api_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as external_pb from "./external_pb";
import * as blockchain_pb from "./blockchain_pb";

interface IMobilecoindAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addMonitor: IMobilecoindAPIService_IAddMonitor;
    removeMonitor: IMobilecoindAPIService_IRemoveMonitor;
    getMonitorList: IMobilecoindAPIService_IGetMonitorList;
    getMonitorStatus: IMobilecoindAPIService_IGetMonitorStatus;
    getUnspentTxOutList: IMobilecoindAPIService_IGetUnspentTxOutList;
    generateEntropy: IMobilecoindAPIService_IGenerateEntropy;
    getAccountKey: IMobilecoindAPIService_IGetAccountKey;
    getPublicAddress: IMobilecoindAPIService_IGetPublicAddress;
    parseRequestCode: IMobilecoindAPIService_IParseRequestCode;
    createRequestCode: IMobilecoindAPIService_ICreateRequestCode;
    parseTransferCode: IMobilecoindAPIService_IParseTransferCode;
    createTransferCode: IMobilecoindAPIService_ICreateTransferCode;
    parseAddressCode: IMobilecoindAPIService_IParseAddressCode;
    createAddressCode: IMobilecoindAPIService_ICreateAddressCode;
    generateTx: IMobilecoindAPIService_IGenerateTx;
    generateOptimizationTx: IMobilecoindAPIService_IGenerateOptimizationTx;
    generateTransferCodeTx: IMobilecoindAPIService_IGenerateTransferCodeTx;
    generateTxFromTxOutList: IMobilecoindAPIService_IGenerateTxFromTxOutList;
    submitTx: IMobilecoindAPIService_ISubmitTx;
    getLedgerInfo: IMobilecoindAPIService_IGetLedgerInfo;
    getBlockInfo: IMobilecoindAPIService_IGetBlockInfo;
    getBlock: IMobilecoindAPIService_IGetBlock;
    getTxStatusAsSender: IMobilecoindAPIService_IGetTxStatusAsSender;
    getTxStatusAsReceiver: IMobilecoindAPIService_IGetTxStatusAsReceiver;
    getProcessedBlock: IMobilecoindAPIService_IGetProcessedBlock;
    getBlockIndexByTxPubKey: IMobilecoindAPIService_IGetBlockIndexByTxPubKey;
    getBalance: IMobilecoindAPIService_IGetBalance;
    sendPayment: IMobilecoindAPIService_ISendPayment;
    payAddressCode: IMobilecoindAPIService_IPayAddressCode;
    getNetworkStatus: IMobilecoindAPIService_IGetNetworkStatus;
}

interface IMobilecoindAPIService_IAddMonitor extends grpc.MethodDefinition<mobilecoind_api_pb.AddMonitorRequest, mobilecoind_api_pb.AddMonitorResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/AddMonitor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.AddMonitorRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.AddMonitorRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.AddMonitorResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.AddMonitorResponse>;
}
interface IMobilecoindAPIService_IRemoveMonitor extends grpc.MethodDefinition<mobilecoind_api_pb.RemoveMonitorRequest, google_protobuf_empty_pb.Empty> {
    path: "/mobilecoind_api.MobilecoindAPI/RemoveMonitor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.RemoveMonitorRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.RemoveMonitorRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IMobilecoindAPIService_IGetMonitorList extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, mobilecoind_api_pb.GetMonitorListResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/GetMonitorList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.GetMonitorListResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.GetMonitorListResponse>;
}
interface IMobilecoindAPIService_IGetMonitorStatus extends grpc.MethodDefinition<mobilecoind_api_pb.GetMonitorStatusRequest, mobilecoind_api_pb.GetMonitorStatusResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/GetMonitorStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.GetMonitorStatusRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.GetMonitorStatusRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.GetMonitorStatusResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.GetMonitorStatusResponse>;
}
interface IMobilecoindAPIService_IGetUnspentTxOutList extends grpc.MethodDefinition<mobilecoind_api_pb.GetUnspentTxOutListRequest, mobilecoind_api_pb.GetUnspentTxOutListResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/GetUnspentTxOutList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.GetUnspentTxOutListRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.GetUnspentTxOutListRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.GetUnspentTxOutListResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.GetUnspentTxOutListResponse>;
}
interface IMobilecoindAPIService_IGenerateEntropy extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, mobilecoind_api_pb.GenerateEntropyResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/GenerateEntropy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.GenerateEntropyResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.GenerateEntropyResponse>;
}
interface IMobilecoindAPIService_IGetAccountKey extends grpc.MethodDefinition<mobilecoind_api_pb.GetAccountKeyRequest, mobilecoind_api_pb.GetAccountKeyResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/GetAccountKey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.GetAccountKeyRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.GetAccountKeyRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.GetAccountKeyResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.GetAccountKeyResponse>;
}
interface IMobilecoindAPIService_IGetPublicAddress extends grpc.MethodDefinition<mobilecoind_api_pb.GetPublicAddressRequest, mobilecoind_api_pb.GetPublicAddressResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/GetPublicAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.GetPublicAddressRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.GetPublicAddressRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.GetPublicAddressResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.GetPublicAddressResponse>;
}
interface IMobilecoindAPIService_IParseRequestCode extends grpc.MethodDefinition<mobilecoind_api_pb.ParseRequestCodeRequest, mobilecoind_api_pb.ParseRequestCodeResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/ParseRequestCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.ParseRequestCodeRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.ParseRequestCodeRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.ParseRequestCodeResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.ParseRequestCodeResponse>;
}
interface IMobilecoindAPIService_ICreateRequestCode extends grpc.MethodDefinition<mobilecoind_api_pb.CreateRequestCodeRequest, mobilecoind_api_pb.CreateRequestCodeResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/CreateRequestCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.CreateRequestCodeRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.CreateRequestCodeRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.CreateRequestCodeResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.CreateRequestCodeResponse>;
}
interface IMobilecoindAPIService_IParseTransferCode extends grpc.MethodDefinition<mobilecoind_api_pb.ParseTransferCodeRequest, mobilecoind_api_pb.ParseTransferCodeResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/ParseTransferCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.ParseTransferCodeRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.ParseTransferCodeRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.ParseTransferCodeResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.ParseTransferCodeResponse>;
}
interface IMobilecoindAPIService_ICreateTransferCode extends grpc.MethodDefinition<mobilecoind_api_pb.CreateTransferCodeRequest, mobilecoind_api_pb.CreateTransferCodeResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/CreateTransferCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.CreateTransferCodeRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.CreateTransferCodeRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.CreateTransferCodeResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.CreateTransferCodeResponse>;
}
interface IMobilecoindAPIService_IParseAddressCode extends grpc.MethodDefinition<mobilecoind_api_pb.ParseAddressCodeRequest, mobilecoind_api_pb.ParseAddressCodeResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/ParseAddressCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.ParseAddressCodeRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.ParseAddressCodeRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.ParseAddressCodeResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.ParseAddressCodeResponse>;
}
interface IMobilecoindAPIService_ICreateAddressCode extends grpc.MethodDefinition<mobilecoind_api_pb.CreateAddressCodeRequest, mobilecoind_api_pb.CreateAddressCodeResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/CreateAddressCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.CreateAddressCodeRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.CreateAddressCodeRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.CreateAddressCodeResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.CreateAddressCodeResponse>;
}
interface IMobilecoindAPIService_IGenerateTx extends grpc.MethodDefinition<mobilecoind_api_pb.GenerateTxRequest, mobilecoind_api_pb.GenerateTxResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/GenerateTx";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.GenerateTxRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.GenerateTxRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.GenerateTxResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.GenerateTxResponse>;
}
interface IMobilecoindAPIService_IGenerateOptimizationTx extends grpc.MethodDefinition<mobilecoind_api_pb.GenerateOptimizationTxRequest, mobilecoind_api_pb.GenerateOptimizationTxResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/GenerateOptimizationTx";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.GenerateOptimizationTxRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.GenerateOptimizationTxRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.GenerateOptimizationTxResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.GenerateOptimizationTxResponse>;
}
interface IMobilecoindAPIService_IGenerateTransferCodeTx extends grpc.MethodDefinition<mobilecoind_api_pb.GenerateTransferCodeTxRequest, mobilecoind_api_pb.GenerateTransferCodeTxResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/GenerateTransferCodeTx";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.GenerateTransferCodeTxRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.GenerateTransferCodeTxRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.GenerateTransferCodeTxResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.GenerateTransferCodeTxResponse>;
}
interface IMobilecoindAPIService_IGenerateTxFromTxOutList extends grpc.MethodDefinition<mobilecoind_api_pb.GenerateTxFromTxOutListRequest, mobilecoind_api_pb.GenerateTxFromTxOutListResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/GenerateTxFromTxOutList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.GenerateTxFromTxOutListRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.GenerateTxFromTxOutListRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.GenerateTxFromTxOutListResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.GenerateTxFromTxOutListResponse>;
}
interface IMobilecoindAPIService_ISubmitTx extends grpc.MethodDefinition<mobilecoind_api_pb.SubmitTxRequest, mobilecoind_api_pb.SubmitTxResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/SubmitTx";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.SubmitTxRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.SubmitTxRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.SubmitTxResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.SubmitTxResponse>;
}
interface IMobilecoindAPIService_IGetLedgerInfo extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, mobilecoind_api_pb.GetLedgerInfoResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/GetLedgerInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.GetLedgerInfoResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.GetLedgerInfoResponse>;
}
interface IMobilecoindAPIService_IGetBlockInfo extends grpc.MethodDefinition<mobilecoind_api_pb.GetBlockInfoRequest, mobilecoind_api_pb.GetBlockInfoResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/GetBlockInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.GetBlockInfoRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.GetBlockInfoRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.GetBlockInfoResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.GetBlockInfoResponse>;
}
interface IMobilecoindAPIService_IGetBlock extends grpc.MethodDefinition<mobilecoind_api_pb.GetBlockRequest, mobilecoind_api_pb.GetBlockResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/GetBlock";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.GetBlockRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.GetBlockRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.GetBlockResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.GetBlockResponse>;
}
interface IMobilecoindAPIService_IGetTxStatusAsSender extends grpc.MethodDefinition<mobilecoind_api_pb.GetTxStatusAsSenderRequest, mobilecoind_api_pb.GetTxStatusAsSenderResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/GetTxStatusAsSender";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.GetTxStatusAsSenderRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.GetTxStatusAsSenderRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.GetTxStatusAsSenderResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.GetTxStatusAsSenderResponse>;
}
interface IMobilecoindAPIService_IGetTxStatusAsReceiver extends grpc.MethodDefinition<mobilecoind_api_pb.GetTxStatusAsReceiverRequest, mobilecoind_api_pb.GetTxStatusAsReceiverResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/GetTxStatusAsReceiver";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.GetTxStatusAsReceiverRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.GetTxStatusAsReceiverRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.GetTxStatusAsReceiverResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.GetTxStatusAsReceiverResponse>;
}
interface IMobilecoindAPIService_IGetProcessedBlock extends grpc.MethodDefinition<mobilecoind_api_pb.GetProcessedBlockRequest, mobilecoind_api_pb.GetProcessedBlockResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/GetProcessedBlock";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.GetProcessedBlockRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.GetProcessedBlockRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.GetProcessedBlockResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.GetProcessedBlockResponse>;
}
interface IMobilecoindAPIService_IGetBlockIndexByTxPubKey extends grpc.MethodDefinition<mobilecoind_api_pb.GetBlockIndexByTxPubKeyRequest, mobilecoind_api_pb.GetBlockIndexByTxPubKeyResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/GetBlockIndexByTxPubKey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.GetBlockIndexByTxPubKeyRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.GetBlockIndexByTxPubKeyRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.GetBlockIndexByTxPubKeyResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.GetBlockIndexByTxPubKeyResponse>;
}
interface IMobilecoindAPIService_IGetBalance extends grpc.MethodDefinition<mobilecoind_api_pb.GetBalanceRequest, mobilecoind_api_pb.GetBalanceResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/GetBalance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.GetBalanceRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.GetBalanceRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.GetBalanceResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.GetBalanceResponse>;
}
interface IMobilecoindAPIService_ISendPayment extends grpc.MethodDefinition<mobilecoind_api_pb.SendPaymentRequest, mobilecoind_api_pb.SendPaymentResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/SendPayment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.SendPaymentRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.SendPaymentRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.SendPaymentResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.SendPaymentResponse>;
}
interface IMobilecoindAPIService_IPayAddressCode extends grpc.MethodDefinition<mobilecoind_api_pb.PayAddressCodeRequest, mobilecoind_api_pb.SendPaymentResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/PayAddressCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mobilecoind_api_pb.PayAddressCodeRequest>;
    requestDeserialize: grpc.deserialize<mobilecoind_api_pb.PayAddressCodeRequest>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.SendPaymentResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.SendPaymentResponse>;
}
interface IMobilecoindAPIService_IGetNetworkStatus extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, mobilecoind_api_pb.GetNetworkStatusResponse> {
    path: "/mobilecoind_api.MobilecoindAPI/GetNetworkStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<mobilecoind_api_pb.GetNetworkStatusResponse>;
    responseDeserialize: grpc.deserialize<mobilecoind_api_pb.GetNetworkStatusResponse>;
}

export const MobilecoindAPIService: IMobilecoindAPIService;

export interface IMobilecoindAPIServer {
    addMonitor: grpc.handleUnaryCall<mobilecoind_api_pb.AddMonitorRequest, mobilecoind_api_pb.AddMonitorResponse>;
    removeMonitor: grpc.handleUnaryCall<mobilecoind_api_pb.RemoveMonitorRequest, google_protobuf_empty_pb.Empty>;
    getMonitorList: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, mobilecoind_api_pb.GetMonitorListResponse>;
    getMonitorStatus: grpc.handleUnaryCall<mobilecoind_api_pb.GetMonitorStatusRequest, mobilecoind_api_pb.GetMonitorStatusResponse>;
    getUnspentTxOutList: grpc.handleUnaryCall<mobilecoind_api_pb.GetUnspentTxOutListRequest, mobilecoind_api_pb.GetUnspentTxOutListResponse>;
    generateEntropy: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, mobilecoind_api_pb.GenerateEntropyResponse>;
    getAccountKey: grpc.handleUnaryCall<mobilecoind_api_pb.GetAccountKeyRequest, mobilecoind_api_pb.GetAccountKeyResponse>;
    getPublicAddress: grpc.handleUnaryCall<mobilecoind_api_pb.GetPublicAddressRequest, mobilecoind_api_pb.GetPublicAddressResponse>;
    parseRequestCode: grpc.handleUnaryCall<mobilecoind_api_pb.ParseRequestCodeRequest, mobilecoind_api_pb.ParseRequestCodeResponse>;
    createRequestCode: grpc.handleUnaryCall<mobilecoind_api_pb.CreateRequestCodeRequest, mobilecoind_api_pb.CreateRequestCodeResponse>;
    parseTransferCode: grpc.handleUnaryCall<mobilecoind_api_pb.ParseTransferCodeRequest, mobilecoind_api_pb.ParseTransferCodeResponse>;
    createTransferCode: grpc.handleUnaryCall<mobilecoind_api_pb.CreateTransferCodeRequest, mobilecoind_api_pb.CreateTransferCodeResponse>;
    parseAddressCode: grpc.handleUnaryCall<mobilecoind_api_pb.ParseAddressCodeRequest, mobilecoind_api_pb.ParseAddressCodeResponse>;
    createAddressCode: grpc.handleUnaryCall<mobilecoind_api_pb.CreateAddressCodeRequest, mobilecoind_api_pb.CreateAddressCodeResponse>;
    generateTx: grpc.handleUnaryCall<mobilecoind_api_pb.GenerateTxRequest, mobilecoind_api_pb.GenerateTxResponse>;
    generateOptimizationTx: grpc.handleUnaryCall<mobilecoind_api_pb.GenerateOptimizationTxRequest, mobilecoind_api_pb.GenerateOptimizationTxResponse>;
    generateTransferCodeTx: grpc.handleUnaryCall<mobilecoind_api_pb.GenerateTransferCodeTxRequest, mobilecoind_api_pb.GenerateTransferCodeTxResponse>;
    generateTxFromTxOutList: grpc.handleUnaryCall<mobilecoind_api_pb.GenerateTxFromTxOutListRequest, mobilecoind_api_pb.GenerateTxFromTxOutListResponse>;
    submitTx: grpc.handleUnaryCall<mobilecoind_api_pb.SubmitTxRequest, mobilecoind_api_pb.SubmitTxResponse>;
    getLedgerInfo: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, mobilecoind_api_pb.GetLedgerInfoResponse>;
    getBlockInfo: grpc.handleUnaryCall<mobilecoind_api_pb.GetBlockInfoRequest, mobilecoind_api_pb.GetBlockInfoResponse>;
    getBlock: grpc.handleUnaryCall<mobilecoind_api_pb.GetBlockRequest, mobilecoind_api_pb.GetBlockResponse>;
    getTxStatusAsSender: grpc.handleUnaryCall<mobilecoind_api_pb.GetTxStatusAsSenderRequest, mobilecoind_api_pb.GetTxStatusAsSenderResponse>;
    getTxStatusAsReceiver: grpc.handleUnaryCall<mobilecoind_api_pb.GetTxStatusAsReceiverRequest, mobilecoind_api_pb.GetTxStatusAsReceiverResponse>;
    getProcessedBlock: grpc.handleUnaryCall<mobilecoind_api_pb.GetProcessedBlockRequest, mobilecoind_api_pb.GetProcessedBlockResponse>;
    getBlockIndexByTxPubKey: grpc.handleUnaryCall<mobilecoind_api_pb.GetBlockIndexByTxPubKeyRequest, mobilecoind_api_pb.GetBlockIndexByTxPubKeyResponse>;
    getBalance: grpc.handleUnaryCall<mobilecoind_api_pb.GetBalanceRequest, mobilecoind_api_pb.GetBalanceResponse>;
    sendPayment: grpc.handleUnaryCall<mobilecoind_api_pb.SendPaymentRequest, mobilecoind_api_pb.SendPaymentResponse>;
    payAddressCode: grpc.handleUnaryCall<mobilecoind_api_pb.PayAddressCodeRequest, mobilecoind_api_pb.SendPaymentResponse>;
    getNetworkStatus: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, mobilecoind_api_pb.GetNetworkStatusResponse>;
}

export interface IMobilecoindAPIClient {
    addMonitor(request: mobilecoind_api_pb.AddMonitorRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.AddMonitorResponse) => void): grpc.ClientUnaryCall;
    addMonitor(request: mobilecoind_api_pb.AddMonitorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.AddMonitorResponse) => void): grpc.ClientUnaryCall;
    addMonitor(request: mobilecoind_api_pb.AddMonitorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.AddMonitorResponse) => void): grpc.ClientUnaryCall;
    removeMonitor(request: mobilecoind_api_pb.RemoveMonitorRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    removeMonitor(request: mobilecoind_api_pb.RemoveMonitorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    removeMonitor(request: mobilecoind_api_pb.RemoveMonitorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getMonitorList(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetMonitorListResponse) => void): grpc.ClientUnaryCall;
    getMonitorList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetMonitorListResponse) => void): grpc.ClientUnaryCall;
    getMonitorList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetMonitorListResponse) => void): grpc.ClientUnaryCall;
    getMonitorStatus(request: mobilecoind_api_pb.GetMonitorStatusRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetMonitorStatusResponse) => void): grpc.ClientUnaryCall;
    getMonitorStatus(request: mobilecoind_api_pb.GetMonitorStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetMonitorStatusResponse) => void): grpc.ClientUnaryCall;
    getMonitorStatus(request: mobilecoind_api_pb.GetMonitorStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetMonitorStatusResponse) => void): grpc.ClientUnaryCall;
    getUnspentTxOutList(request: mobilecoind_api_pb.GetUnspentTxOutListRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetUnspentTxOutListResponse) => void): grpc.ClientUnaryCall;
    getUnspentTxOutList(request: mobilecoind_api_pb.GetUnspentTxOutListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetUnspentTxOutListResponse) => void): grpc.ClientUnaryCall;
    getUnspentTxOutList(request: mobilecoind_api_pb.GetUnspentTxOutListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetUnspentTxOutListResponse) => void): grpc.ClientUnaryCall;
    generateEntropy(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateEntropyResponse) => void): grpc.ClientUnaryCall;
    generateEntropy(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateEntropyResponse) => void): grpc.ClientUnaryCall;
    generateEntropy(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateEntropyResponse) => void): grpc.ClientUnaryCall;
    getAccountKey(request: mobilecoind_api_pb.GetAccountKeyRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetAccountKeyResponse) => void): grpc.ClientUnaryCall;
    getAccountKey(request: mobilecoind_api_pb.GetAccountKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetAccountKeyResponse) => void): grpc.ClientUnaryCall;
    getAccountKey(request: mobilecoind_api_pb.GetAccountKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetAccountKeyResponse) => void): grpc.ClientUnaryCall;
    getPublicAddress(request: mobilecoind_api_pb.GetPublicAddressRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetPublicAddressResponse) => void): grpc.ClientUnaryCall;
    getPublicAddress(request: mobilecoind_api_pb.GetPublicAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetPublicAddressResponse) => void): grpc.ClientUnaryCall;
    getPublicAddress(request: mobilecoind_api_pb.GetPublicAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetPublicAddressResponse) => void): grpc.ClientUnaryCall;
    parseRequestCode(request: mobilecoind_api_pb.ParseRequestCodeRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.ParseRequestCodeResponse) => void): grpc.ClientUnaryCall;
    parseRequestCode(request: mobilecoind_api_pb.ParseRequestCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.ParseRequestCodeResponse) => void): grpc.ClientUnaryCall;
    parseRequestCode(request: mobilecoind_api_pb.ParseRequestCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.ParseRequestCodeResponse) => void): grpc.ClientUnaryCall;
    createRequestCode(request: mobilecoind_api_pb.CreateRequestCodeRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.CreateRequestCodeResponse) => void): grpc.ClientUnaryCall;
    createRequestCode(request: mobilecoind_api_pb.CreateRequestCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.CreateRequestCodeResponse) => void): grpc.ClientUnaryCall;
    createRequestCode(request: mobilecoind_api_pb.CreateRequestCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.CreateRequestCodeResponse) => void): grpc.ClientUnaryCall;
    parseTransferCode(request: mobilecoind_api_pb.ParseTransferCodeRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.ParseTransferCodeResponse) => void): grpc.ClientUnaryCall;
    parseTransferCode(request: mobilecoind_api_pb.ParseTransferCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.ParseTransferCodeResponse) => void): grpc.ClientUnaryCall;
    parseTransferCode(request: mobilecoind_api_pb.ParseTransferCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.ParseTransferCodeResponse) => void): grpc.ClientUnaryCall;
    createTransferCode(request: mobilecoind_api_pb.CreateTransferCodeRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.CreateTransferCodeResponse) => void): grpc.ClientUnaryCall;
    createTransferCode(request: mobilecoind_api_pb.CreateTransferCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.CreateTransferCodeResponse) => void): grpc.ClientUnaryCall;
    createTransferCode(request: mobilecoind_api_pb.CreateTransferCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.CreateTransferCodeResponse) => void): grpc.ClientUnaryCall;
    parseAddressCode(request: mobilecoind_api_pb.ParseAddressCodeRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.ParseAddressCodeResponse) => void): grpc.ClientUnaryCall;
    parseAddressCode(request: mobilecoind_api_pb.ParseAddressCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.ParseAddressCodeResponse) => void): grpc.ClientUnaryCall;
    parseAddressCode(request: mobilecoind_api_pb.ParseAddressCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.ParseAddressCodeResponse) => void): grpc.ClientUnaryCall;
    createAddressCode(request: mobilecoind_api_pb.CreateAddressCodeRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.CreateAddressCodeResponse) => void): grpc.ClientUnaryCall;
    createAddressCode(request: mobilecoind_api_pb.CreateAddressCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.CreateAddressCodeResponse) => void): grpc.ClientUnaryCall;
    createAddressCode(request: mobilecoind_api_pb.CreateAddressCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.CreateAddressCodeResponse) => void): grpc.ClientUnaryCall;
    generateTx(request: mobilecoind_api_pb.GenerateTxRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateTxResponse) => void): grpc.ClientUnaryCall;
    generateTx(request: mobilecoind_api_pb.GenerateTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateTxResponse) => void): grpc.ClientUnaryCall;
    generateTx(request: mobilecoind_api_pb.GenerateTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateTxResponse) => void): grpc.ClientUnaryCall;
    generateOptimizationTx(request: mobilecoind_api_pb.GenerateOptimizationTxRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateOptimizationTxResponse) => void): grpc.ClientUnaryCall;
    generateOptimizationTx(request: mobilecoind_api_pb.GenerateOptimizationTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateOptimizationTxResponse) => void): grpc.ClientUnaryCall;
    generateOptimizationTx(request: mobilecoind_api_pb.GenerateOptimizationTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateOptimizationTxResponse) => void): grpc.ClientUnaryCall;
    generateTransferCodeTx(request: mobilecoind_api_pb.GenerateTransferCodeTxRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateTransferCodeTxResponse) => void): grpc.ClientUnaryCall;
    generateTransferCodeTx(request: mobilecoind_api_pb.GenerateTransferCodeTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateTransferCodeTxResponse) => void): grpc.ClientUnaryCall;
    generateTransferCodeTx(request: mobilecoind_api_pb.GenerateTransferCodeTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateTransferCodeTxResponse) => void): grpc.ClientUnaryCall;
    generateTxFromTxOutList(request: mobilecoind_api_pb.GenerateTxFromTxOutListRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateTxFromTxOutListResponse) => void): grpc.ClientUnaryCall;
    generateTxFromTxOutList(request: mobilecoind_api_pb.GenerateTxFromTxOutListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateTxFromTxOutListResponse) => void): grpc.ClientUnaryCall;
    generateTxFromTxOutList(request: mobilecoind_api_pb.GenerateTxFromTxOutListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateTxFromTxOutListResponse) => void): grpc.ClientUnaryCall;
    submitTx(request: mobilecoind_api_pb.SubmitTxRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.SubmitTxResponse) => void): grpc.ClientUnaryCall;
    submitTx(request: mobilecoind_api_pb.SubmitTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.SubmitTxResponse) => void): grpc.ClientUnaryCall;
    submitTx(request: mobilecoind_api_pb.SubmitTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.SubmitTxResponse) => void): grpc.ClientUnaryCall;
    getLedgerInfo(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetLedgerInfoResponse) => void): grpc.ClientUnaryCall;
    getLedgerInfo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetLedgerInfoResponse) => void): grpc.ClientUnaryCall;
    getLedgerInfo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetLedgerInfoResponse) => void): grpc.ClientUnaryCall;
    getBlockInfo(request: mobilecoind_api_pb.GetBlockInfoRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBlockInfoResponse) => void): grpc.ClientUnaryCall;
    getBlockInfo(request: mobilecoind_api_pb.GetBlockInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBlockInfoResponse) => void): grpc.ClientUnaryCall;
    getBlockInfo(request: mobilecoind_api_pb.GetBlockInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBlockInfoResponse) => void): grpc.ClientUnaryCall;
    getBlock(request: mobilecoind_api_pb.GetBlockRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBlockResponse) => void): grpc.ClientUnaryCall;
    getBlock(request: mobilecoind_api_pb.GetBlockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBlockResponse) => void): grpc.ClientUnaryCall;
    getBlock(request: mobilecoind_api_pb.GetBlockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBlockResponse) => void): grpc.ClientUnaryCall;
    getTxStatusAsSender(request: mobilecoind_api_pb.GetTxStatusAsSenderRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetTxStatusAsSenderResponse) => void): grpc.ClientUnaryCall;
    getTxStatusAsSender(request: mobilecoind_api_pb.GetTxStatusAsSenderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetTxStatusAsSenderResponse) => void): grpc.ClientUnaryCall;
    getTxStatusAsSender(request: mobilecoind_api_pb.GetTxStatusAsSenderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetTxStatusAsSenderResponse) => void): grpc.ClientUnaryCall;
    getTxStatusAsReceiver(request: mobilecoind_api_pb.GetTxStatusAsReceiverRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetTxStatusAsReceiverResponse) => void): grpc.ClientUnaryCall;
    getTxStatusAsReceiver(request: mobilecoind_api_pb.GetTxStatusAsReceiverRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetTxStatusAsReceiverResponse) => void): grpc.ClientUnaryCall;
    getTxStatusAsReceiver(request: mobilecoind_api_pb.GetTxStatusAsReceiverRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetTxStatusAsReceiverResponse) => void): grpc.ClientUnaryCall;
    getProcessedBlock(request: mobilecoind_api_pb.GetProcessedBlockRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetProcessedBlockResponse) => void): grpc.ClientUnaryCall;
    getProcessedBlock(request: mobilecoind_api_pb.GetProcessedBlockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetProcessedBlockResponse) => void): grpc.ClientUnaryCall;
    getProcessedBlock(request: mobilecoind_api_pb.GetProcessedBlockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetProcessedBlockResponse) => void): grpc.ClientUnaryCall;
    getBlockIndexByTxPubKey(request: mobilecoind_api_pb.GetBlockIndexByTxPubKeyRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBlockIndexByTxPubKeyResponse) => void): grpc.ClientUnaryCall;
    getBlockIndexByTxPubKey(request: mobilecoind_api_pb.GetBlockIndexByTxPubKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBlockIndexByTxPubKeyResponse) => void): grpc.ClientUnaryCall;
    getBlockIndexByTxPubKey(request: mobilecoind_api_pb.GetBlockIndexByTxPubKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBlockIndexByTxPubKeyResponse) => void): grpc.ClientUnaryCall;
    getBalance(request: mobilecoind_api_pb.GetBalanceRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBalanceResponse) => void): grpc.ClientUnaryCall;
    getBalance(request: mobilecoind_api_pb.GetBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBalanceResponse) => void): grpc.ClientUnaryCall;
    getBalance(request: mobilecoind_api_pb.GetBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBalanceResponse) => void): grpc.ClientUnaryCall;
    sendPayment(request: mobilecoind_api_pb.SendPaymentRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.SendPaymentResponse) => void): grpc.ClientUnaryCall;
    sendPayment(request: mobilecoind_api_pb.SendPaymentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.SendPaymentResponse) => void): grpc.ClientUnaryCall;
    sendPayment(request: mobilecoind_api_pb.SendPaymentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.SendPaymentResponse) => void): grpc.ClientUnaryCall;
    payAddressCode(request: mobilecoind_api_pb.PayAddressCodeRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.SendPaymentResponse) => void): grpc.ClientUnaryCall;
    payAddressCode(request: mobilecoind_api_pb.PayAddressCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.SendPaymentResponse) => void): grpc.ClientUnaryCall;
    payAddressCode(request: mobilecoind_api_pb.PayAddressCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.SendPaymentResponse) => void): grpc.ClientUnaryCall;
    getNetworkStatus(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetNetworkStatusResponse) => void): grpc.ClientUnaryCall;
    getNetworkStatus(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetNetworkStatusResponse) => void): grpc.ClientUnaryCall;
    getNetworkStatus(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetNetworkStatusResponse) => void): grpc.ClientUnaryCall;
}

export class MobilecoindAPIClient extends grpc.Client implements IMobilecoindAPIClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public addMonitor(request: mobilecoind_api_pb.AddMonitorRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.AddMonitorResponse) => void): grpc.ClientUnaryCall;
    public addMonitor(request: mobilecoind_api_pb.AddMonitorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.AddMonitorResponse) => void): grpc.ClientUnaryCall;
    public addMonitor(request: mobilecoind_api_pb.AddMonitorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.AddMonitorResponse) => void): grpc.ClientUnaryCall;
    public removeMonitor(request: mobilecoind_api_pb.RemoveMonitorRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public removeMonitor(request: mobilecoind_api_pb.RemoveMonitorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public removeMonitor(request: mobilecoind_api_pb.RemoveMonitorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getMonitorList(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetMonitorListResponse) => void): grpc.ClientUnaryCall;
    public getMonitorList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetMonitorListResponse) => void): grpc.ClientUnaryCall;
    public getMonitorList(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetMonitorListResponse) => void): grpc.ClientUnaryCall;
    public getMonitorStatus(request: mobilecoind_api_pb.GetMonitorStatusRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetMonitorStatusResponse) => void): grpc.ClientUnaryCall;
    public getMonitorStatus(request: mobilecoind_api_pb.GetMonitorStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetMonitorStatusResponse) => void): grpc.ClientUnaryCall;
    public getMonitorStatus(request: mobilecoind_api_pb.GetMonitorStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetMonitorStatusResponse) => void): grpc.ClientUnaryCall;
    public getUnspentTxOutList(request: mobilecoind_api_pb.GetUnspentTxOutListRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetUnspentTxOutListResponse) => void): grpc.ClientUnaryCall;
    public getUnspentTxOutList(request: mobilecoind_api_pb.GetUnspentTxOutListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetUnspentTxOutListResponse) => void): grpc.ClientUnaryCall;
    public getUnspentTxOutList(request: mobilecoind_api_pb.GetUnspentTxOutListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetUnspentTxOutListResponse) => void): grpc.ClientUnaryCall;
    public generateEntropy(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateEntropyResponse) => void): grpc.ClientUnaryCall;
    public generateEntropy(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateEntropyResponse) => void): grpc.ClientUnaryCall;
    public generateEntropy(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateEntropyResponse) => void): grpc.ClientUnaryCall;
    public getAccountKey(request: mobilecoind_api_pb.GetAccountKeyRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetAccountKeyResponse) => void): grpc.ClientUnaryCall;
    public getAccountKey(request: mobilecoind_api_pb.GetAccountKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetAccountKeyResponse) => void): grpc.ClientUnaryCall;
    public getAccountKey(request: mobilecoind_api_pb.GetAccountKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetAccountKeyResponse) => void): grpc.ClientUnaryCall;
    public getPublicAddress(request: mobilecoind_api_pb.GetPublicAddressRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetPublicAddressResponse) => void): grpc.ClientUnaryCall;
    public getPublicAddress(request: mobilecoind_api_pb.GetPublicAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetPublicAddressResponse) => void): grpc.ClientUnaryCall;
    public getPublicAddress(request: mobilecoind_api_pb.GetPublicAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetPublicAddressResponse) => void): grpc.ClientUnaryCall;
    public parseRequestCode(request: mobilecoind_api_pb.ParseRequestCodeRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.ParseRequestCodeResponse) => void): grpc.ClientUnaryCall;
    public parseRequestCode(request: mobilecoind_api_pb.ParseRequestCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.ParseRequestCodeResponse) => void): grpc.ClientUnaryCall;
    public parseRequestCode(request: mobilecoind_api_pb.ParseRequestCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.ParseRequestCodeResponse) => void): grpc.ClientUnaryCall;
    public createRequestCode(request: mobilecoind_api_pb.CreateRequestCodeRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.CreateRequestCodeResponse) => void): grpc.ClientUnaryCall;
    public createRequestCode(request: mobilecoind_api_pb.CreateRequestCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.CreateRequestCodeResponse) => void): grpc.ClientUnaryCall;
    public createRequestCode(request: mobilecoind_api_pb.CreateRequestCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.CreateRequestCodeResponse) => void): grpc.ClientUnaryCall;
    public parseTransferCode(request: mobilecoind_api_pb.ParseTransferCodeRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.ParseTransferCodeResponse) => void): grpc.ClientUnaryCall;
    public parseTransferCode(request: mobilecoind_api_pb.ParseTransferCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.ParseTransferCodeResponse) => void): grpc.ClientUnaryCall;
    public parseTransferCode(request: mobilecoind_api_pb.ParseTransferCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.ParseTransferCodeResponse) => void): grpc.ClientUnaryCall;
    public createTransferCode(request: mobilecoind_api_pb.CreateTransferCodeRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.CreateTransferCodeResponse) => void): grpc.ClientUnaryCall;
    public createTransferCode(request: mobilecoind_api_pb.CreateTransferCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.CreateTransferCodeResponse) => void): grpc.ClientUnaryCall;
    public createTransferCode(request: mobilecoind_api_pb.CreateTransferCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.CreateTransferCodeResponse) => void): grpc.ClientUnaryCall;
    public parseAddressCode(request: mobilecoind_api_pb.ParseAddressCodeRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.ParseAddressCodeResponse) => void): grpc.ClientUnaryCall;
    public parseAddressCode(request: mobilecoind_api_pb.ParseAddressCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.ParseAddressCodeResponse) => void): grpc.ClientUnaryCall;
    public parseAddressCode(request: mobilecoind_api_pb.ParseAddressCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.ParseAddressCodeResponse) => void): grpc.ClientUnaryCall;
    public createAddressCode(request: mobilecoind_api_pb.CreateAddressCodeRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.CreateAddressCodeResponse) => void): grpc.ClientUnaryCall;
    public createAddressCode(request: mobilecoind_api_pb.CreateAddressCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.CreateAddressCodeResponse) => void): grpc.ClientUnaryCall;
    public createAddressCode(request: mobilecoind_api_pb.CreateAddressCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.CreateAddressCodeResponse) => void): grpc.ClientUnaryCall;
    public generateTx(request: mobilecoind_api_pb.GenerateTxRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateTxResponse) => void): grpc.ClientUnaryCall;
    public generateTx(request: mobilecoind_api_pb.GenerateTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateTxResponse) => void): grpc.ClientUnaryCall;
    public generateTx(request: mobilecoind_api_pb.GenerateTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateTxResponse) => void): grpc.ClientUnaryCall;
    public generateOptimizationTx(request: mobilecoind_api_pb.GenerateOptimizationTxRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateOptimizationTxResponse) => void): grpc.ClientUnaryCall;
    public generateOptimizationTx(request: mobilecoind_api_pb.GenerateOptimizationTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateOptimizationTxResponse) => void): grpc.ClientUnaryCall;
    public generateOptimizationTx(request: mobilecoind_api_pb.GenerateOptimizationTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateOptimizationTxResponse) => void): grpc.ClientUnaryCall;
    public generateTransferCodeTx(request: mobilecoind_api_pb.GenerateTransferCodeTxRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateTransferCodeTxResponse) => void): grpc.ClientUnaryCall;
    public generateTransferCodeTx(request: mobilecoind_api_pb.GenerateTransferCodeTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateTransferCodeTxResponse) => void): grpc.ClientUnaryCall;
    public generateTransferCodeTx(request: mobilecoind_api_pb.GenerateTransferCodeTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateTransferCodeTxResponse) => void): grpc.ClientUnaryCall;
    public generateTxFromTxOutList(request: mobilecoind_api_pb.GenerateTxFromTxOutListRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateTxFromTxOutListResponse) => void): grpc.ClientUnaryCall;
    public generateTxFromTxOutList(request: mobilecoind_api_pb.GenerateTxFromTxOutListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateTxFromTxOutListResponse) => void): grpc.ClientUnaryCall;
    public generateTxFromTxOutList(request: mobilecoind_api_pb.GenerateTxFromTxOutListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GenerateTxFromTxOutListResponse) => void): grpc.ClientUnaryCall;
    public submitTx(request: mobilecoind_api_pb.SubmitTxRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.SubmitTxResponse) => void): grpc.ClientUnaryCall;
    public submitTx(request: mobilecoind_api_pb.SubmitTxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.SubmitTxResponse) => void): grpc.ClientUnaryCall;
    public submitTx(request: mobilecoind_api_pb.SubmitTxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.SubmitTxResponse) => void): grpc.ClientUnaryCall;
    public getLedgerInfo(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetLedgerInfoResponse) => void): grpc.ClientUnaryCall;
    public getLedgerInfo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetLedgerInfoResponse) => void): grpc.ClientUnaryCall;
    public getLedgerInfo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetLedgerInfoResponse) => void): grpc.ClientUnaryCall;
    public getBlockInfo(request: mobilecoind_api_pb.GetBlockInfoRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBlockInfoResponse) => void): grpc.ClientUnaryCall;
    public getBlockInfo(request: mobilecoind_api_pb.GetBlockInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBlockInfoResponse) => void): grpc.ClientUnaryCall;
    public getBlockInfo(request: mobilecoind_api_pb.GetBlockInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBlockInfoResponse) => void): grpc.ClientUnaryCall;
    public getBlock(request: mobilecoind_api_pb.GetBlockRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBlockResponse) => void): grpc.ClientUnaryCall;
    public getBlock(request: mobilecoind_api_pb.GetBlockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBlockResponse) => void): grpc.ClientUnaryCall;
    public getBlock(request: mobilecoind_api_pb.GetBlockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBlockResponse) => void): grpc.ClientUnaryCall;
    public getTxStatusAsSender(request: mobilecoind_api_pb.GetTxStatusAsSenderRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetTxStatusAsSenderResponse) => void): grpc.ClientUnaryCall;
    public getTxStatusAsSender(request: mobilecoind_api_pb.GetTxStatusAsSenderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetTxStatusAsSenderResponse) => void): grpc.ClientUnaryCall;
    public getTxStatusAsSender(request: mobilecoind_api_pb.GetTxStatusAsSenderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetTxStatusAsSenderResponse) => void): grpc.ClientUnaryCall;
    public getTxStatusAsReceiver(request: mobilecoind_api_pb.GetTxStatusAsReceiverRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetTxStatusAsReceiverResponse) => void): grpc.ClientUnaryCall;
    public getTxStatusAsReceiver(request: mobilecoind_api_pb.GetTxStatusAsReceiverRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetTxStatusAsReceiverResponse) => void): grpc.ClientUnaryCall;
    public getTxStatusAsReceiver(request: mobilecoind_api_pb.GetTxStatusAsReceiverRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetTxStatusAsReceiverResponse) => void): grpc.ClientUnaryCall;
    public getProcessedBlock(request: mobilecoind_api_pb.GetProcessedBlockRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetProcessedBlockResponse) => void): grpc.ClientUnaryCall;
    public getProcessedBlock(request: mobilecoind_api_pb.GetProcessedBlockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetProcessedBlockResponse) => void): grpc.ClientUnaryCall;
    public getProcessedBlock(request: mobilecoind_api_pb.GetProcessedBlockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetProcessedBlockResponse) => void): grpc.ClientUnaryCall;
    public getBlockIndexByTxPubKey(request: mobilecoind_api_pb.GetBlockIndexByTxPubKeyRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBlockIndexByTxPubKeyResponse) => void): grpc.ClientUnaryCall;
    public getBlockIndexByTxPubKey(request: mobilecoind_api_pb.GetBlockIndexByTxPubKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBlockIndexByTxPubKeyResponse) => void): grpc.ClientUnaryCall;
    public getBlockIndexByTxPubKey(request: mobilecoind_api_pb.GetBlockIndexByTxPubKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBlockIndexByTxPubKeyResponse) => void): grpc.ClientUnaryCall;
    public getBalance(request: mobilecoind_api_pb.GetBalanceRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBalanceResponse) => void): grpc.ClientUnaryCall;
    public getBalance(request: mobilecoind_api_pb.GetBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBalanceResponse) => void): grpc.ClientUnaryCall;
    public getBalance(request: mobilecoind_api_pb.GetBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetBalanceResponse) => void): grpc.ClientUnaryCall;
    public sendPayment(request: mobilecoind_api_pb.SendPaymentRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.SendPaymentResponse) => void): grpc.ClientUnaryCall;
    public sendPayment(request: mobilecoind_api_pb.SendPaymentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.SendPaymentResponse) => void): grpc.ClientUnaryCall;
    public sendPayment(request: mobilecoind_api_pb.SendPaymentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.SendPaymentResponse) => void): grpc.ClientUnaryCall;
    public payAddressCode(request: mobilecoind_api_pb.PayAddressCodeRequest, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.SendPaymentResponse) => void): grpc.ClientUnaryCall;
    public payAddressCode(request: mobilecoind_api_pb.PayAddressCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.SendPaymentResponse) => void): grpc.ClientUnaryCall;
    public payAddressCode(request: mobilecoind_api_pb.PayAddressCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.SendPaymentResponse) => void): grpc.ClientUnaryCall;
    public getNetworkStatus(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetNetworkStatusResponse) => void): grpc.ClientUnaryCall;
    public getNetworkStatus(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetNetworkStatusResponse) => void): grpc.ClientUnaryCall;
    public getNetworkStatus(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mobilecoind_api_pb.GetNetworkStatusResponse) => void): grpc.ClientUnaryCall;
}
