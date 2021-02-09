// package: mobilecoind_api
// file: mobilecoind_api.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as external_pb from './external_pb';
import * as blockchain_pb from './blockchain_pb';

export class Outlay extends jspb.Message {
  getValue(): string;
  setValue(value: string): Outlay;

  hasReceiver(): boolean;
  clearReceiver(): void;
  getReceiver(): external_pb.PublicAddress | undefined;
  setReceiver(value?: external_pb.PublicAddress): Outlay;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Outlay.AsObject;
  static toObject(includeInstance: boolean, msg: Outlay): Outlay.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Outlay,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Outlay;
  static deserializeBinaryFromReader(
    message: Outlay,
    reader: jspb.BinaryReader
  ): Outlay;
}

export namespace Outlay {
  export type AsObject = {
    value: string;
    receiver?: external_pb.PublicAddress.AsObject;
  };
}

export class UnspentTxOut extends jspb.Message {
  hasTxOut(): boolean;
  clearTxOut(): void;
  getTxOut(): external_pb.TxOut | undefined;
  setTxOut(value?: external_pb.TxOut): UnspentTxOut;

  getSubaddressIndex(): string;
  setSubaddressIndex(value: string): UnspentTxOut;

  hasKeyImage(): boolean;
  clearKeyImage(): void;
  getKeyImage(): external_pb.KeyImage | undefined;
  setKeyImage(value?: external_pb.KeyImage): UnspentTxOut;

  getValue(): string;
  setValue(value: string): UnspentTxOut;

  getAttemptedSpendHeight(): string;
  setAttemptedSpendHeight(value: string): UnspentTxOut;

  getAttemptedSpendTombstone(): string;
  setAttemptedSpendTombstone(value: string): UnspentTxOut;

  getMonitorId(): Uint8Array | string;
  getMonitorId_asU8(): Uint8Array;
  getMonitorId_asB64(): string;
  setMonitorId(value: Uint8Array | string): UnspentTxOut;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnspentTxOut.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UnspentTxOut
  ): UnspentTxOut.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: UnspentTxOut,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UnspentTxOut;
  static deserializeBinaryFromReader(
    message: UnspentTxOut,
    reader: jspb.BinaryReader
  ): UnspentTxOut;
}

export namespace UnspentTxOut {
  export type AsObject = {
    txOut?: external_pb.TxOut.AsObject;
    subaddressIndex: string;
    keyImage?: external_pb.KeyImage.AsObject;
    value: string;
    attemptedSpendHeight: string;
    attemptedSpendTombstone: string;
    monitorId: Uint8Array | string;
  };
}

export class TxProposal extends jspb.Message {
  clearInputListList(): void;
  getInputListList(): Array<UnspentTxOut>;
  setInputListList(value: Array<UnspentTxOut>): TxProposal;
  addInputList(value?: UnspentTxOut, index?: number): UnspentTxOut;

  clearOutlayListList(): void;
  getOutlayListList(): Array<Outlay>;
  setOutlayListList(value: Array<Outlay>): TxProposal;
  addOutlayList(value?: Outlay, index?: number): Outlay;

  hasTx(): boolean;
  clearTx(): void;
  getTx(): external_pb.Tx | undefined;
  setTx(value?: external_pb.Tx): TxProposal;

  getFee(): string;
  setFee(value: string): TxProposal;

  getOutlayIndexToTxOutIndexMap(): jspb.Map<number, number>;
  clearOutlayIndexToTxOutIndexMap(): void;

  clearOutlayConfirmationNumbersList(): void;
  getOutlayConfirmationNumbersList(): Array<Uint8Array | string>;
  getOutlayConfirmationNumbersList_asU8(): Array<Uint8Array>;
  getOutlayConfirmationNumbersList_asB64(): Array<string>;
  setOutlayConfirmationNumbersList(
    value: Array<Uint8Array | string>
  ): TxProposal;
  addOutlayConfirmationNumbers(
    value: Uint8Array | string,
    index?: number
  ): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxProposal.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TxProposal
  ): TxProposal.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TxProposal,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): TxProposal;
  static deserializeBinaryFromReader(
    message: TxProposal,
    reader: jspb.BinaryReader
  ): TxProposal;
}

export namespace TxProposal {
  export type AsObject = {
    inputListList: Array<UnspentTxOut.AsObject>;
    outlayListList: Array<Outlay.AsObject>;
    tx?: external_pb.Tx.AsObject;
    fee: string;

    outlayIndexToTxOutIndexMap: Array<[number, number]>;
    outlayConfirmationNumbersList: Array<Uint8Array | string>;
  };
}

export class SenderTxReceipt extends jspb.Message {
  clearKeyImageListList(): void;
  getKeyImageListList(): Array<external_pb.KeyImage>;
  setKeyImageListList(value: Array<external_pb.KeyImage>): SenderTxReceipt;
  addKeyImageList(
    value?: external_pb.KeyImage,
    index?: number
  ): external_pb.KeyImage;

  getTombstone(): string;
  setTombstone(value: string): SenderTxReceipt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SenderTxReceipt.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SenderTxReceipt
  ): SenderTxReceipt.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: SenderTxReceipt,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SenderTxReceipt;
  static deserializeBinaryFromReader(
    message: SenderTxReceipt,
    reader: jspb.BinaryReader
  ): SenderTxReceipt;
}

export namespace SenderTxReceipt {
  export type AsObject = {
    keyImageListList: Array<external_pb.KeyImage.AsObject>;
    tombstone: string;
  };
}

export class ReceiverTxReceipt extends jspb.Message {
  hasRecipient(): boolean;
  clearRecipient(): void;
  getRecipient(): external_pb.PublicAddress | undefined;
  setRecipient(value?: external_pb.PublicAddress): ReceiverTxReceipt;

  hasTxPublicKey(): boolean;
  clearTxPublicKey(): void;
  getTxPublicKey(): external_pb.CompressedRistretto | undefined;
  setTxPublicKey(value?: external_pb.CompressedRistretto): ReceiverTxReceipt;

  getTxOutHash(): Uint8Array | string;
  getTxOutHash_asU8(): Uint8Array;
  getTxOutHash_asB64(): string;
  setTxOutHash(value: Uint8Array | string): ReceiverTxReceipt;

  getTombstone(): string;
  setTombstone(value: string): ReceiverTxReceipt;

  getConfirmationNumber(): Uint8Array | string;
  getConfirmationNumber_asU8(): Uint8Array;
  getConfirmationNumber_asB64(): string;
  setConfirmationNumber(value: Uint8Array | string): ReceiverTxReceipt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiverTxReceipt.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ReceiverTxReceipt
  ): ReceiverTxReceipt.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ReceiverTxReceipt,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ReceiverTxReceipt;
  static deserializeBinaryFromReader(
    message: ReceiverTxReceipt,
    reader: jspb.BinaryReader
  ): ReceiverTxReceipt;
}

export namespace ReceiverTxReceipt {
  export type AsObject = {
    recipient?: external_pb.PublicAddress.AsObject;
    txPublicKey?: external_pb.CompressedRistretto.AsObject;
    txOutHash: Uint8Array | string;
    tombstone: string;
    confirmationNumber: Uint8Array | string;
  };
}

export class MonitorStatus extends jspb.Message {
  hasAccountKey(): boolean;
  clearAccountKey(): void;
  getAccountKey(): external_pb.AccountKey | undefined;
  setAccountKey(value?: external_pb.AccountKey): MonitorStatus;

  getFirstSubaddress(): string;
  setFirstSubaddress(value: string): MonitorStatus;

  getNumSubaddresses(): string;
  setNumSubaddresses(value: string): MonitorStatus;

  getFirstBlock(): string;
  setFirstBlock(value: string): MonitorStatus;

  getNextBlock(): string;
  setNextBlock(value: string): MonitorStatus;

  getName(): string;
  setName(value: string): MonitorStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonitorStatus.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MonitorStatus
  ): MonitorStatus.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MonitorStatus,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): MonitorStatus;
  static deserializeBinaryFromReader(
    message: MonitorStatus,
    reader: jspb.BinaryReader
  ): MonitorStatus;
}

export namespace MonitorStatus {
  export type AsObject = {
    accountKey?: external_pb.AccountKey.AsObject;
    firstSubaddress: string;
    numSubaddresses: string;
    firstBlock: string;
    nextBlock: string;
    name: string;
  };
}

export class ProcessedTxOut extends jspb.Message {
  getMonitorId(): Uint8Array | string;
  getMonitorId_asU8(): Uint8Array;
  getMonitorId_asB64(): string;
  setMonitorId(value: Uint8Array | string): ProcessedTxOut;

  getSubaddressIndex(): string;
  setSubaddressIndex(value: string): ProcessedTxOut;

  hasPublicKey(): boolean;
  clearPublicKey(): void;
  getPublicKey(): external_pb.CompressedRistretto | undefined;
  setPublicKey(value?: external_pb.CompressedRistretto): ProcessedTxOut;

  hasKeyImage(): boolean;
  clearKeyImage(): void;
  getKeyImage(): external_pb.KeyImage | undefined;
  setKeyImage(value?: external_pb.KeyImage): ProcessedTxOut;

  getValue(): string;
  setValue(value: string): ProcessedTxOut;

  getDirection(): ProcessedTxOutDirection;
  setDirection(value: ProcessedTxOutDirection): ProcessedTxOut;

  getAddressCode(): string;
  setAddressCode(value: string): ProcessedTxOut;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessedTxOut.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ProcessedTxOut
  ): ProcessedTxOut.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ProcessedTxOut,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ProcessedTxOut;
  static deserializeBinaryFromReader(
    message: ProcessedTxOut,
    reader: jspb.BinaryReader
  ): ProcessedTxOut;
}

export namespace ProcessedTxOut {
  export type AsObject = {
    monitorId: Uint8Array | string;
    subaddressIndex: string;
    publicKey?: external_pb.CompressedRistretto.AsObject;
    keyImage?: external_pb.KeyImage.AsObject;
    value: string;
    direction: ProcessedTxOutDirection;
    addressCode: string;
  };
}

export class AddMonitorRequest extends jspb.Message {
  hasAccountKey(): boolean;
  clearAccountKey(): void;
  getAccountKey(): external_pb.AccountKey | undefined;
  setAccountKey(value?: external_pb.AccountKey): AddMonitorRequest;

  getFirstSubaddress(): number;
  setFirstSubaddress(value: number): AddMonitorRequest;

  getNumSubaddresses(): number;
  setNumSubaddresses(value: number): AddMonitorRequest;

  getFirstBlock(): number;
  setFirstBlock(value: number): AddMonitorRequest;

  getName(): string;
  setName(value: string): AddMonitorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddMonitorRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AddMonitorRequest
  ): AddMonitorRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: AddMonitorRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): AddMonitorRequest;
  static deserializeBinaryFromReader(
    message: AddMonitorRequest,
    reader: jspb.BinaryReader
  ): AddMonitorRequest;
}

export namespace AddMonitorRequest {
  export type AsObject = {
    accountKey?: external_pb.AccountKey.AsObject;
    firstSubaddress: number;
    numSubaddresses: number;
    firstBlock: number;
    name: string;
  };
}

export class AddMonitorResponse extends jspb.Message {
  getMonitorId(): Uint8Array | string;
  getMonitorId_asU8(): Uint8Array;
  getMonitorId_asB64(): string;
  setMonitorId(value: Uint8Array | string): AddMonitorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddMonitorResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AddMonitorResponse
  ): AddMonitorResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: AddMonitorResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): AddMonitorResponse;
  static deserializeBinaryFromReader(
    message: AddMonitorResponse,
    reader: jspb.BinaryReader
  ): AddMonitorResponse;
}

export namespace AddMonitorResponse {
  export type AsObject = {
    monitorId: Uint8Array | string;
  };
}

export class RemoveMonitorRequest extends jspb.Message {
  getMonitorId(): Uint8Array | string;
  getMonitorId_asU8(): Uint8Array;
  getMonitorId_asB64(): string;
  setMonitorId(value: Uint8Array | string): RemoveMonitorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMonitorRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RemoveMonitorRequest
  ): RemoveMonitorRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RemoveMonitorRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMonitorRequest;
  static deserializeBinaryFromReader(
    message: RemoveMonitorRequest,
    reader: jspb.BinaryReader
  ): RemoveMonitorRequest;
}

export namespace RemoveMonitorRequest {
  export type AsObject = {
    monitorId: Uint8Array | string;
  };
}

export class GetMonitorListResponse extends jspb.Message {
  clearMonitorIdListList(): void;
  getMonitorIdListList(): Array<Uint8Array | string>;
  getMonitorIdListList_asU8(): Array<Uint8Array>;
  getMonitorIdListList_asB64(): Array<string>;
  setMonitorIdListList(
    value: Array<Uint8Array | string>
  ): GetMonitorListResponse;
  addMonitorIdList(
    value: Uint8Array | string,
    index?: number
  ): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMonitorListResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetMonitorListResponse
  ): GetMonitorListResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetMonitorListResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetMonitorListResponse;
  static deserializeBinaryFromReader(
    message: GetMonitorListResponse,
    reader: jspb.BinaryReader
  ): GetMonitorListResponse;
}

export namespace GetMonitorListResponse {
  export type AsObject = {
    monitorIdListList: Array<Uint8Array | string>;
  };
}

export class GetMonitorStatusRequest extends jspb.Message {
  getMonitorId(): Uint8Array | string;
  getMonitorId_asU8(): Uint8Array;
  getMonitorId_asB64(): string;
  setMonitorId(value: Uint8Array | string): GetMonitorStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMonitorStatusRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetMonitorStatusRequest
  ): GetMonitorStatusRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetMonitorStatusRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetMonitorStatusRequest;
  static deserializeBinaryFromReader(
    message: GetMonitorStatusRequest,
    reader: jspb.BinaryReader
  ): GetMonitorStatusRequest;
}

export namespace GetMonitorStatusRequest {
  export type AsObject = {
    monitorId: Uint8Array | string;
  };
}

export class GetMonitorStatusResponse extends jspb.Message {
  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): MonitorStatus | undefined;
  setStatus(value?: MonitorStatus): GetMonitorStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMonitorStatusResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetMonitorStatusResponse
  ): GetMonitorStatusResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetMonitorStatusResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetMonitorStatusResponse;
  static deserializeBinaryFromReader(
    message: GetMonitorStatusResponse,
    reader: jspb.BinaryReader
  ): GetMonitorStatusResponse;
}

export namespace GetMonitorStatusResponse {
  export type AsObject = {
    status?: MonitorStatus.AsObject;
  };
}

export class GetUnspentTxOutListRequest extends jspb.Message {
  getMonitorId(): Uint8Array | string;
  getMonitorId_asU8(): Uint8Array;
  getMonitorId_asB64(): string;
  setMonitorId(value: Uint8Array | string): GetUnspentTxOutListRequest;

  getSubaddressIndex(): number;
  setSubaddressIndex(value: number): GetUnspentTxOutListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnspentTxOutListRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetUnspentTxOutListRequest
  ): GetUnspentTxOutListRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetUnspentTxOutListRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetUnspentTxOutListRequest;
  static deserializeBinaryFromReader(
    message: GetUnspentTxOutListRequest,
    reader: jspb.BinaryReader
  ): GetUnspentTxOutListRequest;
}

export namespace GetUnspentTxOutListRequest {
  export type AsObject = {
    monitorId: Uint8Array | string;
    subaddressIndex: number;
  };
}

export class GetUnspentTxOutListResponse extends jspb.Message {
  clearOutputListList(): void;
  getOutputListList(): Array<UnspentTxOut>;
  setOutputListList(value: Array<UnspentTxOut>): GetUnspentTxOutListResponse;
  addOutputList(value?: UnspentTxOut, index?: number): UnspentTxOut;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnspentTxOutListResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetUnspentTxOutListResponse
  ): GetUnspentTxOutListResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetUnspentTxOutListResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetUnspentTxOutListResponse;
  static deserializeBinaryFromReader(
    message: GetUnspentTxOutListResponse,
    reader: jspb.BinaryReader
  ): GetUnspentTxOutListResponse;
}

export namespace GetUnspentTxOutListResponse {
  export type AsObject = {
    outputListList: Array<UnspentTxOut.AsObject>;
  };
}

export class GenerateEntropyResponse extends jspb.Message {
  getEntropy(): Uint8Array | string;
  getEntropy_asU8(): Uint8Array;
  getEntropy_asB64(): string;
  setEntropy(value: Uint8Array | string): GenerateEntropyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateEntropyResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GenerateEntropyResponse
  ): GenerateEntropyResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GenerateEntropyResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GenerateEntropyResponse;
  static deserializeBinaryFromReader(
    message: GenerateEntropyResponse,
    reader: jspb.BinaryReader
  ): GenerateEntropyResponse;
}

export namespace GenerateEntropyResponse {
  export type AsObject = {
    entropy: Uint8Array | string;
  };
}

export class GetAccountKeyRequest extends jspb.Message {
  getEntropy(): Uint8Array | string;
  getEntropy_asU8(): Uint8Array;
  getEntropy_asB64(): string;
  setEntropy(value: Uint8Array | string): GetAccountKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountKeyRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetAccountKeyRequest
  ): GetAccountKeyRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetAccountKeyRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountKeyRequest;
  static deserializeBinaryFromReader(
    message: GetAccountKeyRequest,
    reader: jspb.BinaryReader
  ): GetAccountKeyRequest;
}

export namespace GetAccountKeyRequest {
  export type AsObject = {
    entropy: Uint8Array | string;
  };
}

export class GetAccountKeyResponse extends jspb.Message {
  hasAccountKey(): boolean;
  clearAccountKey(): void;
  getAccountKey(): external_pb.AccountKey | undefined;
  setAccountKey(value?: external_pb.AccountKey): GetAccountKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountKeyResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetAccountKeyResponse
  ): GetAccountKeyResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetAccountKeyResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountKeyResponse;
  static deserializeBinaryFromReader(
    message: GetAccountKeyResponse,
    reader: jspb.BinaryReader
  ): GetAccountKeyResponse;
}

export namespace GetAccountKeyResponse {
  export type AsObject = {
    accountKey?: external_pb.AccountKey.AsObject;
  };
}

export class GetPublicAddressRequest extends jspb.Message {
  getMonitorId(): Uint8Array | string;
  getMonitorId_asU8(): Uint8Array;
  getMonitorId_asB64(): string;
  setMonitorId(value: Uint8Array | string): GetPublicAddressRequest;

  getSubaddressIndex(): number;
  setSubaddressIndex(value: number): GetPublicAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublicAddressRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetPublicAddressRequest
  ): GetPublicAddressRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetPublicAddressRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetPublicAddressRequest;
  static deserializeBinaryFromReader(
    message: GetPublicAddressRequest,
    reader: jspb.BinaryReader
  ): GetPublicAddressRequest;
}

export namespace GetPublicAddressRequest {
  export type AsObject = {
    monitorId: Uint8Array | string;
    subaddressIndex: number;
  };
}

export class GetPublicAddressResponse extends jspb.Message {
  hasPublicAddress(): boolean;
  clearPublicAddress(): void;
  getPublicAddress(): external_pb.PublicAddress | undefined;
  setPublicAddress(value?: external_pb.PublicAddress): GetPublicAddressResponse;

  getB58Code(): string;
  setB58Code(value: string): GetPublicAddressResponse;

  getMobUrl(): string;
  setMobUrl(value: string): GetPublicAddressResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublicAddressResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetPublicAddressResponse
  ): GetPublicAddressResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetPublicAddressResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetPublicAddressResponse;
  static deserializeBinaryFromReader(
    message: GetPublicAddressResponse,
    reader: jspb.BinaryReader
  ): GetPublicAddressResponse;
}

export namespace GetPublicAddressResponse {
  export type AsObject = {
    publicAddress?: external_pb.PublicAddress.AsObject;
    b58Code: string;
    mobUrl: string;
  };
}

export class ParseRequestCodeRequest extends jspb.Message {
  getB58Code(): string;
  setB58Code(value: string): ParseRequestCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParseRequestCodeRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ParseRequestCodeRequest
  ): ParseRequestCodeRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ParseRequestCodeRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ParseRequestCodeRequest;
  static deserializeBinaryFromReader(
    message: ParseRequestCodeRequest,
    reader: jspb.BinaryReader
  ): ParseRequestCodeRequest;
}

export namespace ParseRequestCodeRequest {
  export type AsObject = {
    b58Code: string;
  };
}

export class ParseRequestCodeResponse extends jspb.Message {
  hasReceiver(): boolean;
  clearReceiver(): void;
  getReceiver(): external_pb.PublicAddress | undefined;
  setReceiver(value?: external_pb.PublicAddress): ParseRequestCodeResponse;

  getValue(): string;
  setValue(value: string): ParseRequestCodeResponse;

  getMemo(): string;
  setMemo(value: string): ParseRequestCodeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParseRequestCodeResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ParseRequestCodeResponse
  ): ParseRequestCodeResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ParseRequestCodeResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ParseRequestCodeResponse;
  static deserializeBinaryFromReader(
    message: ParseRequestCodeResponse,
    reader: jspb.BinaryReader
  ): ParseRequestCodeResponse;
}

export namespace ParseRequestCodeResponse {
  export type AsObject = {
    receiver?: external_pb.PublicAddress.AsObject;
    value: string;
    memo: string;
  };
}

export class CreateRequestCodeRequest extends jspb.Message {
  hasReceiver(): boolean;
  clearReceiver(): void;
  getReceiver(): external_pb.PublicAddress | undefined;
  setReceiver(value?: external_pb.PublicAddress): CreateRequestCodeRequest;

  getValue(): number;
  setValue(value: number): CreateRequestCodeRequest;

  getMemo(): string;
  setMemo(value: string): CreateRequestCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequestCodeRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateRequestCodeRequest
  ): CreateRequestCodeRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CreateRequestCodeRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequestCodeRequest;
  static deserializeBinaryFromReader(
    message: CreateRequestCodeRequest,
    reader: jspb.BinaryReader
  ): CreateRequestCodeRequest;
}

export namespace CreateRequestCodeRequest {
  export type AsObject = {
    receiver?: external_pb.PublicAddress.AsObject;
    value: number;
    memo: string;
  };
}

export class CreateRequestCodeResponse extends jspb.Message {
  getB58Code(): string;
  setB58Code(value: string): CreateRequestCodeResponse;

  getMobUrl(): string;
  setMobUrl(value: string): CreateRequestCodeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequestCodeResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateRequestCodeResponse
  ): CreateRequestCodeResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CreateRequestCodeResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequestCodeResponse;
  static deserializeBinaryFromReader(
    message: CreateRequestCodeResponse,
    reader: jspb.BinaryReader
  ): CreateRequestCodeResponse;
}

export namespace CreateRequestCodeResponse {
  export type AsObject = {
    b58Code: string;
    mobUrl: string;
  };
}

export class ParseTransferCodeRequest extends jspb.Message {
  getB58Code(): string;
  setB58Code(value: string): ParseTransferCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParseTransferCodeRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ParseTransferCodeRequest
  ): ParseTransferCodeRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ParseTransferCodeRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ParseTransferCodeRequest;
  static deserializeBinaryFromReader(
    message: ParseTransferCodeRequest,
    reader: jspb.BinaryReader
  ): ParseTransferCodeRequest;
}

export namespace ParseTransferCodeRequest {
  export type AsObject = {
    b58Code: string;
  };
}

export class ParseTransferCodeResponse extends jspb.Message {
  getEntropy(): Uint8Array | string;
  getEntropy_asU8(): Uint8Array;
  getEntropy_asB64(): string;
  setEntropy(value: Uint8Array | string): ParseTransferCodeResponse;

  hasTxPublicKey(): boolean;
  clearTxPublicKey(): void;
  getTxPublicKey(): external_pb.CompressedRistretto | undefined;
  setTxPublicKey(
    value?: external_pb.CompressedRistretto
  ): ParseTransferCodeResponse;

  getMemo(): string;
  setMemo(value: string): ParseTransferCodeResponse;

  hasUtxo(): boolean;
  clearUtxo(): void;
  getUtxo(): UnspentTxOut | undefined;
  setUtxo(value?: UnspentTxOut): ParseTransferCodeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParseTransferCodeResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ParseTransferCodeResponse
  ): ParseTransferCodeResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ParseTransferCodeResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ParseTransferCodeResponse;
  static deserializeBinaryFromReader(
    message: ParseTransferCodeResponse,
    reader: jspb.BinaryReader
  ): ParseTransferCodeResponse;
}

export namespace ParseTransferCodeResponse {
  export type AsObject = {
    entropy: Uint8Array | string;
    txPublicKey?: external_pb.CompressedRistretto.AsObject;
    memo: string;
    utxo?: UnspentTxOut.AsObject;
  };
}

export class CreateTransferCodeRequest extends jspb.Message {
  getEntropy(): Uint8Array | string;
  getEntropy_asU8(): Uint8Array;
  getEntropy_asB64(): string;
  setEntropy(value: Uint8Array | string): CreateTransferCodeRequest;

  hasTxPublicKey(): boolean;
  clearTxPublicKey(): void;
  getTxPublicKey(): external_pb.CompressedRistretto | undefined;
  setTxPublicKey(
    value?: external_pb.CompressedRistretto
  ): CreateTransferCodeRequest;

  getMemo(): string;
  setMemo(value: string): CreateTransferCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTransferCodeRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateTransferCodeRequest
  ): CreateTransferCodeRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CreateTransferCodeRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateTransferCodeRequest;
  static deserializeBinaryFromReader(
    message: CreateTransferCodeRequest,
    reader: jspb.BinaryReader
  ): CreateTransferCodeRequest;
}

export namespace CreateTransferCodeRequest {
  export type AsObject = {
    entropy: Uint8Array | string;
    txPublicKey?: external_pb.CompressedRistretto.AsObject;
    memo: string;
  };
}

export class CreateTransferCodeResponse extends jspb.Message {
  getB58Code(): string;
  setB58Code(value: string): CreateTransferCodeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTransferCodeResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateTransferCodeResponse
  ): CreateTransferCodeResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CreateTransferCodeResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateTransferCodeResponse;
  static deserializeBinaryFromReader(
    message: CreateTransferCodeResponse,
    reader: jspb.BinaryReader
  ): CreateTransferCodeResponse;
}

export namespace CreateTransferCodeResponse {
  export type AsObject = {
    b58Code: string;
  };
}

export class ParseAddressCodeRequest extends jspb.Message {
  getB58Code(): string;
  setB58Code(value: string): ParseAddressCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParseAddressCodeRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ParseAddressCodeRequest
  ): ParseAddressCodeRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ParseAddressCodeRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ParseAddressCodeRequest;
  static deserializeBinaryFromReader(
    message: ParseAddressCodeRequest,
    reader: jspb.BinaryReader
  ): ParseAddressCodeRequest;
}

export namespace ParseAddressCodeRequest {
  export type AsObject = {
    b58Code: string;
  };
}

export class ParseAddressCodeResponse extends jspb.Message {
  hasReceiver(): boolean;
  clearReceiver(): void;
  getReceiver(): external_pb.PublicAddress | undefined;
  setReceiver(value?: external_pb.PublicAddress): ParseAddressCodeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParseAddressCodeResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ParseAddressCodeResponse
  ): ParseAddressCodeResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ParseAddressCodeResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ParseAddressCodeResponse;
  static deserializeBinaryFromReader(
    message: ParseAddressCodeResponse,
    reader: jspb.BinaryReader
  ): ParseAddressCodeResponse;
}

export namespace ParseAddressCodeResponse {
  export type AsObject = {
    receiver?: external_pb.PublicAddress.AsObject;
  };
}

export class CreateAddressCodeRequest extends jspb.Message {
  hasReceiver(): boolean;
  clearReceiver(): void;
  getReceiver(): external_pb.PublicAddress | undefined;
  setReceiver(value?: external_pb.PublicAddress): CreateAddressCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAddressCodeRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateAddressCodeRequest
  ): CreateAddressCodeRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CreateAddressCodeRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateAddressCodeRequest;
  static deserializeBinaryFromReader(
    message: CreateAddressCodeRequest,
    reader: jspb.BinaryReader
  ): CreateAddressCodeRequest;
}

export namespace CreateAddressCodeRequest {
  export type AsObject = {
    receiver?: external_pb.PublicAddress.AsObject;
  };
}

export class CreateAddressCodeResponse extends jspb.Message {
  getB58Code(): string;
  setB58Code(value: string): CreateAddressCodeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAddressCodeResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateAddressCodeResponse
  ): CreateAddressCodeResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CreateAddressCodeResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateAddressCodeResponse;
  static deserializeBinaryFromReader(
    message: CreateAddressCodeResponse,
    reader: jspb.BinaryReader
  ): CreateAddressCodeResponse;
}

export namespace CreateAddressCodeResponse {
  export type AsObject = {
    b58Code: string;
  };
}

export class GenerateTxRequest extends jspb.Message {
  getSenderMonitorId(): Uint8Array | string;
  getSenderMonitorId_asU8(): Uint8Array;
  getSenderMonitorId_asB64(): string;
  setSenderMonitorId(value: Uint8Array | string): GenerateTxRequest;

  getChangeSubaddress(): number;
  setChangeSubaddress(value: number): GenerateTxRequest;

  clearInputListList(): void;
  getInputListList(): Array<UnspentTxOut>;
  setInputListList(value: Array<UnspentTxOut>): GenerateTxRequest;
  addInputList(value?: UnspentTxOut, index?: number): UnspentTxOut;

  clearOutlayListList(): void;
  getOutlayListList(): Array<Outlay>;
  setOutlayListList(value: Array<Outlay>): GenerateTxRequest;
  addOutlayList(value?: Outlay, index?: number): Outlay;

  getFee(): number;
  setFee(value: number): GenerateTxRequest;

  getTombstone(): number;
  setTombstone(value: number): GenerateTxRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateTxRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GenerateTxRequest
  ): GenerateTxRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GenerateTxRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GenerateTxRequest;
  static deserializeBinaryFromReader(
    message: GenerateTxRequest,
    reader: jspb.BinaryReader
  ): GenerateTxRequest;
}

export namespace GenerateTxRequest {
  export type AsObject = {
    senderMonitorId: Uint8Array | string;
    changeSubaddress: number;
    inputListList: Array<UnspentTxOut.AsObject>;
    outlayListList: Array<Outlay.AsObject>;
    fee: number;
    tombstone: number;
  };
}

export class GenerateTxResponse extends jspb.Message {
  hasTxProposal(): boolean;
  clearTxProposal(): void;
  getTxProposal(): TxProposal | undefined;
  setTxProposal(value?: TxProposal): GenerateTxResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateTxResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GenerateTxResponse
  ): GenerateTxResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GenerateTxResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GenerateTxResponse;
  static deserializeBinaryFromReader(
    message: GenerateTxResponse,
    reader: jspb.BinaryReader
  ): GenerateTxResponse;
}

export namespace GenerateTxResponse {
  export type AsObject = {
    txProposal?: TxProposal.AsObject;
  };
}

export class GenerateOptimizationTxRequest extends jspb.Message {
  getMonitorId(): Uint8Array | string;
  getMonitorId_asU8(): Uint8Array;
  getMonitorId_asB64(): string;
  setMonitorId(value: Uint8Array | string): GenerateOptimizationTxRequest;

  getSubaddress(): number;
  setSubaddress(value: number): GenerateOptimizationTxRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateOptimizationTxRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GenerateOptimizationTxRequest
  ): GenerateOptimizationTxRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GenerateOptimizationTxRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GenerateOptimizationTxRequest;
  static deserializeBinaryFromReader(
    message: GenerateOptimizationTxRequest,
    reader: jspb.BinaryReader
  ): GenerateOptimizationTxRequest;
}

export namespace GenerateOptimizationTxRequest {
  export type AsObject = {
    monitorId: Uint8Array | string;
    subaddress: number;
  };
}

export class GenerateOptimizationTxResponse extends jspb.Message {
  hasTxProposal(): boolean;
  clearTxProposal(): void;
  getTxProposal(): TxProposal | undefined;
  setTxProposal(value?: TxProposal): GenerateOptimizationTxResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateOptimizationTxResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GenerateOptimizationTxResponse
  ): GenerateOptimizationTxResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GenerateOptimizationTxResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GenerateOptimizationTxResponse;
  static deserializeBinaryFromReader(
    message: GenerateOptimizationTxResponse,
    reader: jspb.BinaryReader
  ): GenerateOptimizationTxResponse;
}

export namespace GenerateOptimizationTxResponse {
  export type AsObject = {
    txProposal?: TxProposal.AsObject;
  };
}

export class GenerateTransferCodeTxRequest extends jspb.Message {
  getSenderMonitorId(): Uint8Array | string;
  getSenderMonitorId_asU8(): Uint8Array;
  getSenderMonitorId_asB64(): string;
  setSenderMonitorId(value: Uint8Array | string): GenerateTransferCodeTxRequest;

  getChangeSubaddress(): number;
  setChangeSubaddress(value: number): GenerateTransferCodeTxRequest;

  clearInputListList(): void;
  getInputListList(): Array<UnspentTxOut>;
  setInputListList(value: Array<UnspentTxOut>): GenerateTransferCodeTxRequest;
  addInputList(value?: UnspentTxOut, index?: number): UnspentTxOut;

  getValue(): number;
  setValue(value: number): GenerateTransferCodeTxRequest;

  getFee(): number;
  setFee(value: number): GenerateTransferCodeTxRequest;

  getTombstone(): number;
  setTombstone(value: number): GenerateTransferCodeTxRequest;

  getMemo(): string;
  setMemo(value: string): GenerateTransferCodeTxRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateTransferCodeTxRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GenerateTransferCodeTxRequest
  ): GenerateTransferCodeTxRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GenerateTransferCodeTxRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GenerateTransferCodeTxRequest;
  static deserializeBinaryFromReader(
    message: GenerateTransferCodeTxRequest,
    reader: jspb.BinaryReader
  ): GenerateTransferCodeTxRequest;
}

export namespace GenerateTransferCodeTxRequest {
  export type AsObject = {
    senderMonitorId: Uint8Array | string;
    changeSubaddress: number;
    inputListList: Array<UnspentTxOut.AsObject>;
    value: number;
    fee: number;
    tombstone: number;
    memo: string;
  };
}

export class GenerateTransferCodeTxResponse extends jspb.Message {
  hasTxProposal(): boolean;
  clearTxProposal(): void;
  getTxProposal(): TxProposal | undefined;
  setTxProposal(value?: TxProposal): GenerateTransferCodeTxResponse;

  getEntropy(): Uint8Array | string;
  getEntropy_asU8(): Uint8Array;
  getEntropy_asB64(): string;
  setEntropy(value: Uint8Array | string): GenerateTransferCodeTxResponse;

  hasTxPublicKey(): boolean;
  clearTxPublicKey(): void;
  getTxPublicKey(): external_pb.CompressedRistretto | undefined;
  setTxPublicKey(
    value?: external_pb.CompressedRistretto
  ): GenerateTransferCodeTxResponse;

  getMemo(): string;
  setMemo(value: string): GenerateTransferCodeTxResponse;

  getB58Code(): string;
  setB58Code(value: string): GenerateTransferCodeTxResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateTransferCodeTxResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GenerateTransferCodeTxResponse
  ): GenerateTransferCodeTxResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GenerateTransferCodeTxResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GenerateTransferCodeTxResponse;
  static deserializeBinaryFromReader(
    message: GenerateTransferCodeTxResponse,
    reader: jspb.BinaryReader
  ): GenerateTransferCodeTxResponse;
}

export namespace GenerateTransferCodeTxResponse {
  export type AsObject = {
    txProposal?: TxProposal.AsObject;
    entropy: Uint8Array | string;
    txPublicKey?: external_pb.CompressedRistretto.AsObject;
    memo: string;
    b58Code: string;
  };
}

export class GenerateTxFromTxOutListRequest extends jspb.Message {
  hasAccountKey(): boolean;
  clearAccountKey(): void;
  getAccountKey(): external_pb.AccountKey | undefined;
  setAccountKey(value?: external_pb.AccountKey): GenerateTxFromTxOutListRequest;

  clearInputListList(): void;
  getInputListList(): Array<UnspentTxOut>;
  setInputListList(value: Array<UnspentTxOut>): GenerateTxFromTxOutListRequest;
  addInputList(value?: UnspentTxOut, index?: number): UnspentTxOut;

  hasReceiver(): boolean;
  clearReceiver(): void;
  getReceiver(): external_pb.PublicAddress | undefined;
  setReceiver(
    value?: external_pb.PublicAddress
  ): GenerateTxFromTxOutListRequest;

  getFee(): number;
  setFee(value: number): GenerateTxFromTxOutListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateTxFromTxOutListRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GenerateTxFromTxOutListRequest
  ): GenerateTxFromTxOutListRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GenerateTxFromTxOutListRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GenerateTxFromTxOutListRequest;
  static deserializeBinaryFromReader(
    message: GenerateTxFromTxOutListRequest,
    reader: jspb.BinaryReader
  ): GenerateTxFromTxOutListRequest;
}

export namespace GenerateTxFromTxOutListRequest {
  export type AsObject = {
    accountKey?: external_pb.AccountKey.AsObject;
    inputListList: Array<UnspentTxOut.AsObject>;
    receiver?: external_pb.PublicAddress.AsObject;
    fee: number;
  };
}

export class GenerateTxFromTxOutListResponse extends jspb.Message {
  hasTxProposal(): boolean;
  clearTxProposal(): void;
  getTxProposal(): TxProposal | undefined;
  setTxProposal(value?: TxProposal): GenerateTxFromTxOutListResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateTxFromTxOutListResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GenerateTxFromTxOutListResponse
  ): GenerateTxFromTxOutListResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GenerateTxFromTxOutListResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GenerateTxFromTxOutListResponse;
  static deserializeBinaryFromReader(
    message: GenerateTxFromTxOutListResponse,
    reader: jspb.BinaryReader
  ): GenerateTxFromTxOutListResponse;
}

export namespace GenerateTxFromTxOutListResponse {
  export type AsObject = {
    txProposal?: TxProposal.AsObject;
  };
}

export class SubmitTxRequest extends jspb.Message {
  hasTxProposal(): boolean;
  clearTxProposal(): void;
  getTxProposal(): TxProposal | undefined;
  setTxProposal(value?: TxProposal): SubmitTxRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitTxRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SubmitTxRequest
  ): SubmitTxRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: SubmitTxRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SubmitTxRequest;
  static deserializeBinaryFromReader(
    message: SubmitTxRequest,
    reader: jspb.BinaryReader
  ): SubmitTxRequest;
}

export namespace SubmitTxRequest {
  export type AsObject = {
    txProposal?: TxProposal.AsObject;
  };
}

export class SubmitTxResponse extends jspb.Message {
  hasSenderTxReceipt(): boolean;
  clearSenderTxReceipt(): void;
  getSenderTxReceipt(): SenderTxReceipt | undefined;
  setSenderTxReceipt(value?: SenderTxReceipt): SubmitTxResponse;

  clearReceiverTxReceiptListList(): void;
  getReceiverTxReceiptListList(): Array<ReceiverTxReceipt>;
  setReceiverTxReceiptListList(
    value: Array<ReceiverTxReceipt>
  ): SubmitTxResponse;
  addReceiverTxReceiptList(
    value?: ReceiverTxReceipt,
    index?: number
  ): ReceiverTxReceipt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitTxResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SubmitTxResponse
  ): SubmitTxResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: SubmitTxResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SubmitTxResponse;
  static deserializeBinaryFromReader(
    message: SubmitTxResponse,
    reader: jspb.BinaryReader
  ): SubmitTxResponse;
}

export namespace SubmitTxResponse {
  export type AsObject = {
    senderTxReceipt?: SenderTxReceipt.AsObject;
    receiverTxReceiptListList: Array<ReceiverTxReceipt.AsObject>;
  };
}

export class GetLedgerInfoResponse extends jspb.Message {
  getBlockCount(): string;
  setBlockCount(value: string): GetLedgerInfoResponse;

  getTxoCount(): string;
  setTxoCount(value: string): GetLedgerInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLedgerInfoResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetLedgerInfoResponse
  ): GetLedgerInfoResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetLedgerInfoResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetLedgerInfoResponse;
  static deserializeBinaryFromReader(
    message: GetLedgerInfoResponse,
    reader: jspb.BinaryReader
  ): GetLedgerInfoResponse;
}

export namespace GetLedgerInfoResponse {
  export type AsObject = {
    blockCount: string;
    txoCount: string;
  };
}

export class GetBlockInfoRequest extends jspb.Message {
  getBlock(): number;
  setBlock(value: number): GetBlockInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockInfoRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetBlockInfoRequest
  ): GetBlockInfoRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetBlockInfoRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockInfoRequest;
  static deserializeBinaryFromReader(
    message: GetBlockInfoRequest,
    reader: jspb.BinaryReader
  ): GetBlockInfoRequest;
}

export namespace GetBlockInfoRequest {
  export type AsObject = {
    block: number;
  };
}

export class GetBlockInfoResponse extends jspb.Message {
  getKeyImageCount(): string;
  setKeyImageCount(value: string): GetBlockInfoResponse;

  getTxoCount(): string;
  setTxoCount(value: string): GetBlockInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockInfoResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetBlockInfoResponse
  ): GetBlockInfoResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetBlockInfoResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockInfoResponse;
  static deserializeBinaryFromReader(
    message: GetBlockInfoResponse,
    reader: jspb.BinaryReader
  ): GetBlockInfoResponse;
}

export namespace GetBlockInfoResponse {
  export type AsObject = {
    keyImageCount: string;
    txoCount: string;
  };
}

export class ArchiveBlockSignatureData extends jspb.Message {
  getSrcUrl(): string;
  setSrcUrl(value: string): ArchiveBlockSignatureData;

  getFilename(): string;
  setFilename(value: string): ArchiveBlockSignatureData;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): blockchain_pb.BlockSignature | undefined;
  setSignature(value?: blockchain_pb.BlockSignature): ArchiveBlockSignatureData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveBlockSignatureData.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ArchiveBlockSignatureData
  ): ArchiveBlockSignatureData.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ArchiveBlockSignatureData,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveBlockSignatureData;
  static deserializeBinaryFromReader(
    message: ArchiveBlockSignatureData,
    reader: jspb.BinaryReader
  ): ArchiveBlockSignatureData;
}

export namespace ArchiveBlockSignatureData {
  export type AsObject = {
    srcUrl: string;
    filename: string;
    signature?: blockchain_pb.BlockSignature.AsObject;
  };
}

export class GetBlockRequest extends jspb.Message {
  getBlock(): number;
  setBlock(value: number): GetBlockRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetBlockRequest
  ): GetBlockRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetBlockRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockRequest;
  static deserializeBinaryFromReader(
    message: GetBlockRequest,
    reader: jspb.BinaryReader
  ): GetBlockRequest;
}

export namespace GetBlockRequest {
  export type AsObject = {
    block: number;
  };
}

export class GetBlockResponse extends jspb.Message {
  hasBlock(): boolean;
  clearBlock(): void;
  getBlock(): blockchain_pb.Block | undefined;
  setBlock(value?: blockchain_pb.Block): GetBlockResponse;

  clearSignaturesList(): void;
  getSignaturesList(): Array<ArchiveBlockSignatureData>;
  setSignaturesList(value: Array<ArchiveBlockSignatureData>): GetBlockResponse;
  addSignatures(
    value?: ArchiveBlockSignatureData,
    index?: number
  ): ArchiveBlockSignatureData;

  clearKeyImagesList(): void;
  getKeyImagesList(): Array<external_pb.KeyImage>;
  setKeyImagesList(value: Array<external_pb.KeyImage>): GetBlockResponse;
  addKeyImages(
    value?: external_pb.KeyImage,
    index?: number
  ): external_pb.KeyImage;

  clearTxosList(): void;
  getTxosList(): Array<external_pb.TxOut>;
  setTxosList(value: Array<external_pb.TxOut>): GetBlockResponse;
  addTxos(value?: external_pb.TxOut, index?: number): external_pb.TxOut;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetBlockResponse
  ): GetBlockResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetBlockResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockResponse;
  static deserializeBinaryFromReader(
    message: GetBlockResponse,
    reader: jspb.BinaryReader
  ): GetBlockResponse;
}

export namespace GetBlockResponse {
  export type AsObject = {
    block?: blockchain_pb.Block.AsObject;
    signaturesList: Array<ArchiveBlockSignatureData.AsObject>;
    keyImagesList: Array<external_pb.KeyImage.AsObject>;
    txosList: Array<external_pb.TxOut.AsObject>;
  };
}

export class GetTxStatusAsSenderRequest extends jspb.Message {
  hasReceipt(): boolean;
  clearReceipt(): void;
  getReceipt(): SenderTxReceipt | undefined;
  setReceipt(value?: SenderTxReceipt): GetTxStatusAsSenderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxStatusAsSenderRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetTxStatusAsSenderRequest
  ): GetTxStatusAsSenderRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetTxStatusAsSenderRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetTxStatusAsSenderRequest;
  static deserializeBinaryFromReader(
    message: GetTxStatusAsSenderRequest,
    reader: jspb.BinaryReader
  ): GetTxStatusAsSenderRequest;
}

export namespace GetTxStatusAsSenderRequest {
  export type AsObject = {
    receipt?: SenderTxReceipt.AsObject;
  };
}

export class GetTxStatusAsSenderResponse extends jspb.Message {
  getStatus(): TxStatus;
  setStatus(value: TxStatus): GetTxStatusAsSenderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxStatusAsSenderResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetTxStatusAsSenderResponse
  ): GetTxStatusAsSenderResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetTxStatusAsSenderResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetTxStatusAsSenderResponse;
  static deserializeBinaryFromReader(
    message: GetTxStatusAsSenderResponse,
    reader: jspb.BinaryReader
  ): GetTxStatusAsSenderResponse;
}

export namespace GetTxStatusAsSenderResponse {
  export type AsObject = {
    status: TxStatus;
  };
}

export class GetTxStatusAsReceiverRequest extends jspb.Message {
  hasReceipt(): boolean;
  clearReceipt(): void;
  getReceipt(): ReceiverTxReceipt | undefined;
  setReceipt(value?: ReceiverTxReceipt): GetTxStatusAsReceiverRequest;

  getMonitorId(): Uint8Array | string;
  getMonitorId_asU8(): Uint8Array;
  getMonitorId_asB64(): string;
  setMonitorId(value: Uint8Array | string): GetTxStatusAsReceiverRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxStatusAsReceiverRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetTxStatusAsReceiverRequest
  ): GetTxStatusAsReceiverRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetTxStatusAsReceiverRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetTxStatusAsReceiverRequest;
  static deserializeBinaryFromReader(
    message: GetTxStatusAsReceiverRequest,
    reader: jspb.BinaryReader
  ): GetTxStatusAsReceiverRequest;
}

export namespace GetTxStatusAsReceiverRequest {
  export type AsObject = {
    receipt?: ReceiverTxReceipt.AsObject;
    monitorId: Uint8Array | string;
  };
}

export class GetTxStatusAsReceiverResponse extends jspb.Message {
  getStatus(): TxStatus;
  setStatus(value: TxStatus): GetTxStatusAsReceiverResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxStatusAsReceiverResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetTxStatusAsReceiverResponse
  ): GetTxStatusAsReceiverResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetTxStatusAsReceiverResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetTxStatusAsReceiverResponse;
  static deserializeBinaryFromReader(
    message: GetTxStatusAsReceiverResponse,
    reader: jspb.BinaryReader
  ): GetTxStatusAsReceiverResponse;
}

export namespace GetTxStatusAsReceiverResponse {
  export type AsObject = {
    status: TxStatus;
  };
}

export class GetProcessedBlockRequest extends jspb.Message {
  getMonitorId(): Uint8Array | string;
  getMonitorId_asU8(): Uint8Array;
  getMonitorId_asB64(): string;
  setMonitorId(value: Uint8Array | string): GetProcessedBlockRequest;

  getBlock(): number;
  setBlock(value: number): GetProcessedBlockRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProcessedBlockRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetProcessedBlockRequest
  ): GetProcessedBlockRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetProcessedBlockRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetProcessedBlockRequest;
  static deserializeBinaryFromReader(
    message: GetProcessedBlockRequest,
    reader: jspb.BinaryReader
  ): GetProcessedBlockRequest;
}

export namespace GetProcessedBlockRequest {
  export type AsObject = {
    monitorId: Uint8Array | string;
    block: number;
  };
}

export class GetProcessedBlockResponse extends jspb.Message {
  clearTxOutsList(): void;
  getTxOutsList(): Array<ProcessedTxOut>;
  setTxOutsList(value: Array<ProcessedTxOut>): GetProcessedBlockResponse;
  addTxOuts(value?: ProcessedTxOut, index?: number): ProcessedTxOut;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProcessedBlockResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetProcessedBlockResponse
  ): GetProcessedBlockResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetProcessedBlockResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetProcessedBlockResponse;
  static deserializeBinaryFromReader(
    message: GetProcessedBlockResponse,
    reader: jspb.BinaryReader
  ): GetProcessedBlockResponse;
}

export namespace GetProcessedBlockResponse {
  export type AsObject = {
    txOutsList: Array<ProcessedTxOut.AsObject>;
  };
}

export class GetBlockIndexByTxPubKeyRequest extends jspb.Message {
  hasTxPublicKey(): boolean;
  clearTxPublicKey(): void;
  getTxPublicKey(): external_pb.CompressedRistretto | undefined;
  setTxPublicKey(
    value?: external_pb.CompressedRistretto
  ): GetBlockIndexByTxPubKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockIndexByTxPubKeyRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetBlockIndexByTxPubKeyRequest
  ): GetBlockIndexByTxPubKeyRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetBlockIndexByTxPubKeyRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockIndexByTxPubKeyRequest;
  static deserializeBinaryFromReader(
    message: GetBlockIndexByTxPubKeyRequest,
    reader: jspb.BinaryReader
  ): GetBlockIndexByTxPubKeyRequest;
}

export namespace GetBlockIndexByTxPubKeyRequest {
  export type AsObject = {
    txPublicKey?: external_pb.CompressedRistretto.AsObject;
  };
}

export class GetBlockIndexByTxPubKeyResponse extends jspb.Message {
  getBlock(): string;
  setBlock(value: string): GetBlockIndexByTxPubKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockIndexByTxPubKeyResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetBlockIndexByTxPubKeyResponse
  ): GetBlockIndexByTxPubKeyResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetBlockIndexByTxPubKeyResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockIndexByTxPubKeyResponse;
  static deserializeBinaryFromReader(
    message: GetBlockIndexByTxPubKeyResponse,
    reader: jspb.BinaryReader
  ): GetBlockIndexByTxPubKeyResponse;
}

export namespace GetBlockIndexByTxPubKeyResponse {
  export type AsObject = {
    block: string;
  };
}

export class GetBalanceRequest extends jspb.Message {
  getMonitorId(): Uint8Array | string;
  getMonitorId_asU8(): Uint8Array;
  getMonitorId_asB64(): string;
  setMonitorId(value: Uint8Array | string): GetBalanceRequest;

  getSubaddressIndex(): number;
  setSubaddressIndex(value: number): GetBalanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBalanceRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetBalanceRequest
  ): GetBalanceRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetBalanceRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetBalanceRequest;
  static deserializeBinaryFromReader(
    message: GetBalanceRequest,
    reader: jspb.BinaryReader
  ): GetBalanceRequest;
}

export namespace GetBalanceRequest {
  export type AsObject = {
    monitorId: Uint8Array | string;
    subaddressIndex: number;
  };
}

export class GetBalanceResponse extends jspb.Message {
  getBalance(): string;
  setBalance(value: string): GetBalanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBalanceResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetBalanceResponse
  ): GetBalanceResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetBalanceResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetBalanceResponse;
  static deserializeBinaryFromReader(
    message: GetBalanceResponse,
    reader: jspb.BinaryReader
  ): GetBalanceResponse;
}

export namespace GetBalanceResponse {
  export type AsObject = {
    balance: string;
  };
}

export class SendPaymentRequest extends jspb.Message {
  getSenderMonitorId(): Uint8Array | string;
  getSenderMonitorId_asU8(): Uint8Array;
  getSenderMonitorId_asB64(): string;
  setSenderMonitorId(value: Uint8Array | string): SendPaymentRequest;

  getSenderSubaddress(): number;
  setSenderSubaddress(value: number): SendPaymentRequest;

  clearOutlayListList(): void;
  getOutlayListList(): Array<Outlay>;
  setOutlayListList(value: Array<Outlay>): SendPaymentRequest;
  addOutlayList(value?: Outlay, index?: number): Outlay;

  getFee(): number;
  setFee(value: number): SendPaymentRequest;

  getTombstone(): number;
  setTombstone(value: number): SendPaymentRequest;

  getMaxInputUtxoValue(): number;
  setMaxInputUtxoValue(value: number): SendPaymentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendPaymentRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SendPaymentRequest
  ): SendPaymentRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: SendPaymentRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SendPaymentRequest;
  static deserializeBinaryFromReader(
    message: SendPaymentRequest,
    reader: jspb.BinaryReader
  ): SendPaymentRequest;
}

export namespace SendPaymentRequest {
  export type AsObject = {
    senderMonitorId: Uint8Array | string;
    senderSubaddress: number;
    outlayListList: Array<Outlay.AsObject>;
    fee: number;
    tombstone: number;
    maxInputUtxoValue: number;
  };
}

export class SendPaymentResponse extends jspb.Message {
  hasSenderTxReceipt(): boolean;
  clearSenderTxReceipt(): void;
  getSenderTxReceipt(): SenderTxReceipt | undefined;
  setSenderTxReceipt(value?: SenderTxReceipt): SendPaymentResponse;

  clearReceiverTxReceiptListList(): void;
  getReceiverTxReceiptListList(): Array<ReceiverTxReceipt>;
  setReceiverTxReceiptListList(
    value: Array<ReceiverTxReceipt>
  ): SendPaymentResponse;
  addReceiverTxReceiptList(
    value?: ReceiverTxReceipt,
    index?: number
  ): ReceiverTxReceipt;

  hasTxProposal(): boolean;
  clearTxProposal(): void;
  getTxProposal(): TxProposal | undefined;
  setTxProposal(value?: TxProposal): SendPaymentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendPaymentResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SendPaymentResponse
  ): SendPaymentResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: SendPaymentResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SendPaymentResponse;
  static deserializeBinaryFromReader(
    message: SendPaymentResponse,
    reader: jspb.BinaryReader
  ): SendPaymentResponse;
}

export namespace SendPaymentResponse {
  export type AsObject = {
    senderTxReceipt?: SenderTxReceipt.AsObject;
    receiverTxReceiptListList: Array<ReceiverTxReceipt.AsObject>;
    txProposal?: TxProposal.AsObject;
  };
}

export class PayAddressCodeRequest extends jspb.Message {
  getSenderMonitorId(): Uint8Array | string;
  getSenderMonitorId_asU8(): Uint8Array;
  getSenderMonitorId_asB64(): string;
  setSenderMonitorId(value: Uint8Array | string): PayAddressCodeRequest;

  getSenderSubaddress(): number;
  setSenderSubaddress(value: number): PayAddressCodeRequest;

  getReceiverB58Code(): string;
  setReceiverB58Code(value: string): PayAddressCodeRequest;

  getAmount(): number;
  setAmount(value: number): PayAddressCodeRequest;

  getFee(): number;
  setFee(value: number): PayAddressCodeRequest;

  getTombstone(): number;
  setTombstone(value: number): PayAddressCodeRequest;

  getMaxInputUtxoValue(): number;
  setMaxInputUtxoValue(value: number): PayAddressCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayAddressCodeRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PayAddressCodeRequest
  ): PayAddressCodeRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PayAddressCodeRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PayAddressCodeRequest;
  static deserializeBinaryFromReader(
    message: PayAddressCodeRequest,
    reader: jspb.BinaryReader
  ): PayAddressCodeRequest;
}

export namespace PayAddressCodeRequest {
  export type AsObject = {
    senderMonitorId: Uint8Array | string;
    senderSubaddress: number;
    receiverB58Code: string;
    amount: number;
    fee: number;
    tombstone: number;
    maxInputUtxoValue: number;
  };
}

export class GetNetworkStatusResponse extends jspb.Message {
  getNetworkHighestBlockIndex(): string;
  setNetworkHighestBlockIndex(value: string): GetNetworkStatusResponse;

  getPeerBlockIndexMapMap(): jspb.Map<string, number>;
  clearPeerBlockIndexMapMap(): void;

  getLocalBlockIndex(): string;
  setLocalBlockIndex(value: string): GetNetworkStatusResponse;

  getIsBehind(): boolean;
  setIsBehind(value: boolean): GetNetworkStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkStatusResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetNetworkStatusResponse
  ): GetNetworkStatusResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetNetworkStatusResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkStatusResponse;
  static deserializeBinaryFromReader(
    message: GetNetworkStatusResponse,
    reader: jspb.BinaryReader
  ): GetNetworkStatusResponse;
}

export namespace GetNetworkStatusResponse {
  export type AsObject = {
    networkHighestBlockIndex: string;

    peerBlockIndexMapMap: Array<[string, number]>;
    localBlockIndex: string;
    isBehind: boolean;
  };
}

export enum TxStatus {
  UNKNOWN = 0,
  VERIFIED = 1,
  TOMBSTONEBLOCKEXCEEDED = 2,
  INVALIDCONFIRMATIONNUMBER = 3,
}

export enum ProcessedTxOutDirection {
  INVALID = 0,
  RECEIVED = 1,
  SPENT = 2,
}
