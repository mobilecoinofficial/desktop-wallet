// package: blockchain
// file: blockchain.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';
import * as external_pb from './external_pb';

export class BlockID extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): BlockID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockID.AsObject;
  static toObject(includeInstance: boolean, msg: BlockID): BlockID.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: BlockID,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BlockID;
  static deserializeBinaryFromReader(
    message: BlockID,
    reader: jspb.BinaryReader
  ): BlockID;
}

export namespace BlockID {
  export type AsObject = {
    data: Uint8Array | string;
  };
}

export class BlockContentsHash extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): BlockContentsHash;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockContentsHash.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: BlockContentsHash
  ): BlockContentsHash.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: BlockContentsHash,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BlockContentsHash;
  static deserializeBinaryFromReader(
    message: BlockContentsHash,
    reader: jspb.BinaryReader
  ): BlockContentsHash;
}

export namespace BlockContentsHash {
  export type AsObject = {
    data: Uint8Array | string;
  };
}

export class Block extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): BlockID | undefined;
  setId(value?: BlockID): Block;

  getVersion(): number;
  setVersion(value: number): Block;

  hasParentId(): boolean;
  clearParentId(): void;
  getParentId(): BlockID | undefined;
  setParentId(value?: BlockID): Block;

  getIndex(): string;
  setIndex(value: string): Block;

  getCumulativeTxoCount(): string;
  setCumulativeTxoCount(value: string): Block;

  hasRootElement(): boolean;
  clearRootElement(): void;
  getRootElement(): external_pb.TxOutMembershipElement | undefined;
  setRootElement(value?: external_pb.TxOutMembershipElement): Block;

  hasContentsHash(): boolean;
  clearContentsHash(): void;
  getContentsHash(): BlockContentsHash | undefined;
  setContentsHash(value?: BlockContentsHash): Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Block,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(
    message: Block,
    reader: jspb.BinaryReader
  ): Block;
}

export namespace Block {
  export type AsObject = {
    id?: BlockID.AsObject;
    version: number;
    parentId?: BlockID.AsObject;
    index: string;
    cumulativeTxoCount: string;
    rootElement?: external_pb.TxOutMembershipElement.AsObject;
    contentsHash?: BlockContentsHash.AsObject;
  };
}

export class BlockContents extends jspb.Message {
  clearKeyImagesList(): void;
  getKeyImagesList(): Array<external_pb.KeyImage>;
  setKeyImagesList(value: Array<external_pb.KeyImage>): BlockContents;
  addKeyImages(
    value?: external_pb.KeyImage,
    index?: number
  ): external_pb.KeyImage;

  clearOutputsList(): void;
  getOutputsList(): Array<external_pb.TxOut>;
  setOutputsList(value: Array<external_pb.TxOut>): BlockContents;
  addOutputs(value?: external_pb.TxOut, index?: number): external_pb.TxOut;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockContents.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: BlockContents
  ): BlockContents.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: BlockContents,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BlockContents;
  static deserializeBinaryFromReader(
    message: BlockContents,
    reader: jspb.BinaryReader
  ): BlockContents;
}

export namespace BlockContents {
  export type AsObject = {
    keyImagesList: Array<external_pb.KeyImage.AsObject>;
    outputsList: Array<external_pb.TxOut.AsObject>;
  };
}

export class BlockSignature extends jspb.Message {
  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): external_pb.Ed25519Signature | undefined;
  setSignature(value?: external_pb.Ed25519Signature): BlockSignature;

  hasSigner(): boolean;
  clearSigner(): void;
  getSigner(): external_pb.Ed25519Public | undefined;
  setSigner(value?: external_pb.Ed25519Public): BlockSignature;

  getSignedAt(): string;
  setSignedAt(value: string): BlockSignature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockSignature.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: BlockSignature
  ): BlockSignature.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: BlockSignature,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BlockSignature;
  static deserializeBinaryFromReader(
    message: BlockSignature,
    reader: jspb.BinaryReader
  ): BlockSignature;
}

export namespace BlockSignature {
  export type AsObject = {
    signature?: external_pb.Ed25519Signature.AsObject;
    signer?: external_pb.Ed25519Public.AsObject;
    signedAt: string;
  };
}

export class ArchiveBlockV1 extends jspb.Message {
  hasBlock(): boolean;
  clearBlock(): void;
  getBlock(): Block | undefined;
  setBlock(value?: Block): ArchiveBlockV1;

  hasBlockContents(): boolean;
  clearBlockContents(): void;
  getBlockContents(): BlockContents | undefined;
  setBlockContents(value?: BlockContents): ArchiveBlockV1;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): BlockSignature | undefined;
  setSignature(value?: BlockSignature): ArchiveBlockV1;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveBlockV1.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ArchiveBlockV1
  ): ArchiveBlockV1.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ArchiveBlockV1,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveBlockV1;
  static deserializeBinaryFromReader(
    message: ArchiveBlockV1,
    reader: jspb.BinaryReader
  ): ArchiveBlockV1;
}

export namespace ArchiveBlockV1 {
  export type AsObject = {
    block?: Block.AsObject;
    blockContents?: BlockContents.AsObject;
    signature?: BlockSignature.AsObject;
  };
}

export class ArchiveBlock extends jspb.Message {
  hasV1(): boolean;
  clearV1(): void;
  getV1(): ArchiveBlockV1 | undefined;
  setV1(value?: ArchiveBlockV1): ArchiveBlock;

  getBlockCase(): ArchiveBlock.BlockCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveBlock.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ArchiveBlock
  ): ArchiveBlock.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ArchiveBlock,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveBlock;
  static deserializeBinaryFromReader(
    message: ArchiveBlock,
    reader: jspb.BinaryReader
  ): ArchiveBlock;
}

export namespace ArchiveBlock {
  export type AsObject = {
    v1?: ArchiveBlockV1.AsObject;
  };

  export enum BlockCase {
    BLOCK_NOT_SET = 0,

    V1 = 1,
  }
}
