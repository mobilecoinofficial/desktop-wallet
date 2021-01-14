// package: external
// file: external.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RistrettoPrivate extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): RistrettoPrivate;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RistrettoPrivate.AsObject;
    static toObject(includeInstance: boolean, msg: RistrettoPrivate): RistrettoPrivate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RistrettoPrivate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RistrettoPrivate;
    static deserializeBinaryFromReader(message: RistrettoPrivate, reader: jspb.BinaryReader): RistrettoPrivate;
}

export namespace RistrettoPrivate {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class CompressedRistretto extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): CompressedRistretto;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompressedRistretto.AsObject;
    static toObject(includeInstance: boolean, msg: CompressedRistretto): CompressedRistretto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompressedRistretto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompressedRistretto;
    static deserializeBinaryFromReader(message: CompressedRistretto, reader: jspb.BinaryReader): CompressedRistretto;
}

export namespace CompressedRistretto {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class Ed25519Public extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): Ed25519Public;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ed25519Public.AsObject;
    static toObject(includeInstance: boolean, msg: Ed25519Public): Ed25519Public.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ed25519Public, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ed25519Public;
    static deserializeBinaryFromReader(message: Ed25519Public, reader: jspb.BinaryReader): Ed25519Public;
}

export namespace Ed25519Public {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class Ed25519Signature extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): Ed25519Signature;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ed25519Signature.AsObject;
    static toObject(includeInstance: boolean, msg: Ed25519Signature): Ed25519Signature.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ed25519Signature, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ed25519Signature;
    static deserializeBinaryFromReader(message: Ed25519Signature, reader: jspb.BinaryReader): Ed25519Signature;
}

export namespace Ed25519Signature {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class AccountKey extends jspb.Message { 

    hasViewPrivateKey(): boolean;
    clearViewPrivateKey(): void;
    getViewPrivateKey(): RistrettoPrivate | undefined;
    setViewPrivateKey(value?: RistrettoPrivate): AccountKey;


    hasSpendPrivateKey(): boolean;
    clearSpendPrivateKey(): void;
    getSpendPrivateKey(): RistrettoPrivate | undefined;
    setSpendPrivateKey(value?: RistrettoPrivate): AccountKey;

    getFogReportUrl(): string;
    setFogReportUrl(value: string): AccountKey;

    getFogReportId(): string;
    setFogReportId(value: string): AccountKey;

    getFogAuthorityFingerprint(): Uint8Array | string;
    getFogAuthorityFingerprint_asU8(): Uint8Array;
    getFogAuthorityFingerprint_asB64(): string;
    setFogAuthorityFingerprint(value: Uint8Array | string): AccountKey;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountKey.AsObject;
    static toObject(includeInstance: boolean, msg: AccountKey): AccountKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccountKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountKey;
    static deserializeBinaryFromReader(message: AccountKey, reader: jspb.BinaryReader): AccountKey;
}

export namespace AccountKey {
    export type AsObject = {
        viewPrivateKey?: RistrettoPrivate.AsObject,
        spendPrivateKey?: RistrettoPrivate.AsObject,
        fogReportUrl: string,
        fogReportId: string,
        fogAuthorityFingerprint: Uint8Array | string,
    }
}

export class PublicAddress extends jspb.Message { 

    hasViewPublicKey(): boolean;
    clearViewPublicKey(): void;
    getViewPublicKey(): CompressedRistretto | undefined;
    setViewPublicKey(value?: CompressedRistretto): PublicAddress;


    hasSpendPublicKey(): boolean;
    clearSpendPublicKey(): void;
    getSpendPublicKey(): CompressedRistretto | undefined;
    setSpendPublicKey(value?: CompressedRistretto): PublicAddress;

    getFogReportUrl(): string;
    setFogReportUrl(value: string): PublicAddress;

    getFogReportId(): string;
    setFogReportId(value: string): PublicAddress;

    getFogAuthorityFingerprintSig(): Uint8Array | string;
    getFogAuthorityFingerprintSig_asU8(): Uint8Array;
    getFogAuthorityFingerprintSig_asB64(): string;
    setFogAuthorityFingerprintSig(value: Uint8Array | string): PublicAddress;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublicAddress.AsObject;
    static toObject(includeInstance: boolean, msg: PublicAddress): PublicAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublicAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublicAddress;
    static deserializeBinaryFromReader(message: PublicAddress, reader: jspb.BinaryReader): PublicAddress;
}

export namespace PublicAddress {
    export type AsObject = {
        viewPublicKey?: CompressedRistretto.AsObject,
        spendPublicKey?: CompressedRistretto.AsObject,
        fogReportUrl: string,
        fogReportId: string,
        fogAuthorityFingerprintSig: Uint8Array | string,
    }
}

export class RootIdentity extends jspb.Message { 

    hasRootEntropy(): boolean;
    clearRootEntropy(): void;
    getRootEntropy(): RootEntropy | undefined;
    setRootEntropy(value?: RootEntropy): RootIdentity;

    getFogReportUrl(): string;
    setFogReportUrl(value: string): RootIdentity;

    getFogReportId(): string;
    setFogReportId(value: string): RootIdentity;

    getFogAuthorityFingerprint(): Uint8Array | string;
    getFogAuthorityFingerprint_asU8(): Uint8Array;
    getFogAuthorityFingerprint_asB64(): string;
    setFogAuthorityFingerprint(value: Uint8Array | string): RootIdentity;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RootIdentity.AsObject;
    static toObject(includeInstance: boolean, msg: RootIdentity): RootIdentity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RootIdentity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RootIdentity;
    static deserializeBinaryFromReader(message: RootIdentity, reader: jspb.BinaryReader): RootIdentity;
}

export namespace RootIdentity {
    export type AsObject = {
        rootEntropy?: RootEntropy.AsObject,
        fogReportUrl: string,
        fogReportId: string,
        fogAuthorityFingerprint: Uint8Array | string,
    }
}

export class RootEntropy extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): RootEntropy;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RootEntropy.AsObject;
    static toObject(includeInstance: boolean, msg: RootEntropy): RootEntropy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RootEntropy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RootEntropy;
    static deserializeBinaryFromReader(message: RootEntropy, reader: jspb.BinaryReader): RootEntropy;
}

export namespace RootEntropy {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class ViewKey extends jspb.Message { 

    hasViewPrivateKey(): boolean;
    clearViewPrivateKey(): void;
    getViewPrivateKey(): RistrettoPrivate | undefined;
    setViewPrivateKey(value?: RistrettoPrivate): ViewKey;


    hasSpendPublicKey(): boolean;
    clearSpendPublicKey(): void;
    getSpendPublicKey(): CompressedRistretto | undefined;
    setSpendPublicKey(value?: CompressedRistretto): ViewKey;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ViewKey.AsObject;
    static toObject(includeInstance: boolean, msg: ViewKey): ViewKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ViewKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ViewKey;
    static deserializeBinaryFromReader(message: ViewKey, reader: jspb.BinaryReader): ViewKey;
}

export namespace ViewKey {
    export type AsObject = {
        viewPrivateKey?: RistrettoPrivate.AsObject,
        spendPublicKey?: CompressedRistretto.AsObject,
    }
}

export class CurveScalar extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): CurveScalar;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CurveScalar.AsObject;
    static toObject(includeInstance: boolean, msg: CurveScalar): CurveScalar.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CurveScalar, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CurveScalar;
    static deserializeBinaryFromReader(message: CurveScalar, reader: jspb.BinaryReader): CurveScalar;
}

export namespace CurveScalar {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class KeyImage extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): KeyImage;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyImage.AsObject;
    static toObject(includeInstance: boolean, msg: KeyImage): KeyImage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyImage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyImage;
    static deserializeBinaryFromReader(message: KeyImage, reader: jspb.BinaryReader): KeyImage;
}

export namespace KeyImage {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class Range extends jspb.Message { 
    getFrom(): string;
    setFrom(value: string): Range;

    getTo(): string;
    setTo(value: string): Range;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Range.AsObject;
    static toObject(includeInstance: boolean, msg: Range): Range.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Range, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Range;
    static deserializeBinaryFromReader(message: Range, reader: jspb.BinaryReader): Range;
}

export namespace Range {
    export type AsObject = {
        from: string,
        to: string,
    }
}

export class TxOutMembershipHash extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): TxOutMembershipHash;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxOutMembershipHash.AsObject;
    static toObject(includeInstance: boolean, msg: TxOutMembershipHash): TxOutMembershipHash.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxOutMembershipHash, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxOutMembershipHash;
    static deserializeBinaryFromReader(message: TxOutMembershipHash, reader: jspb.BinaryReader): TxOutMembershipHash;
}

export namespace TxOutMembershipHash {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class TxOutMembershipElement extends jspb.Message { 

    hasRange(): boolean;
    clearRange(): void;
    getRange(): Range | undefined;
    setRange(value?: Range): TxOutMembershipElement;


    hasHash(): boolean;
    clearHash(): void;
    getHash(): TxOutMembershipHash | undefined;
    setHash(value?: TxOutMembershipHash): TxOutMembershipElement;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxOutMembershipElement.AsObject;
    static toObject(includeInstance: boolean, msg: TxOutMembershipElement): TxOutMembershipElement.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxOutMembershipElement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxOutMembershipElement;
    static deserializeBinaryFromReader(message: TxOutMembershipElement, reader: jspb.BinaryReader): TxOutMembershipElement;
}

export namespace TxOutMembershipElement {
    export type AsObject = {
        range?: Range.AsObject,
        hash?: TxOutMembershipHash.AsObject,
    }
}

export class TxOutMembershipProof extends jspb.Message { 
    getIndex(): string;
    setIndex(value: string): TxOutMembershipProof;

    getHighestIndex(): string;
    setHighestIndex(value: string): TxOutMembershipProof;

    clearElementsList(): void;
    getElementsList(): Array<TxOutMembershipElement>;
    setElementsList(value: Array<TxOutMembershipElement>): TxOutMembershipProof;
    addElements(value?: TxOutMembershipElement, index?: number): TxOutMembershipElement;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxOutMembershipProof.AsObject;
    static toObject(includeInstance: boolean, msg: TxOutMembershipProof): TxOutMembershipProof.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxOutMembershipProof, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxOutMembershipProof;
    static deserializeBinaryFromReader(message: TxOutMembershipProof, reader: jspb.BinaryReader): TxOutMembershipProof;
}

export namespace TxOutMembershipProof {
    export type AsObject = {
        index: string,
        highestIndex: string,
        elementsList: Array<TxOutMembershipElement.AsObject>,
    }
}

export class TxOutConfirmationNumber extends jspb.Message { 
    getHash(): Uint8Array | string;
    getHash_asU8(): Uint8Array;
    getHash_asB64(): string;
    setHash(value: Uint8Array | string): TxOutConfirmationNumber;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxOutConfirmationNumber.AsObject;
    static toObject(includeInstance: boolean, msg: TxOutConfirmationNumber): TxOutConfirmationNumber.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxOutConfirmationNumber, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxOutConfirmationNumber;
    static deserializeBinaryFromReader(message: TxOutConfirmationNumber, reader: jspb.BinaryReader): TxOutConfirmationNumber;
}

export namespace TxOutConfirmationNumber {
    export type AsObject = {
        hash: Uint8Array | string,
    }
}

export class Amount extends jspb.Message { 

    hasCommitment(): boolean;
    clearCommitment(): void;
    getCommitment(): CompressedRistretto | undefined;
    setCommitment(value?: CompressedRistretto): Amount;

    getMaskedValue(): string;
    setMaskedValue(value: string): Amount;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Amount.AsObject;
    static toObject(includeInstance: boolean, msg: Amount): Amount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Amount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Amount;
    static deserializeBinaryFromReader(message: Amount, reader: jspb.BinaryReader): Amount;
}

export namespace Amount {
    export type AsObject = {
        commitment?: CompressedRistretto.AsObject,
        maskedValue: string,
    }
}

export class EncryptedFogHint extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): EncryptedFogHint;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EncryptedFogHint.AsObject;
    static toObject(includeInstance: boolean, msg: EncryptedFogHint): EncryptedFogHint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EncryptedFogHint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EncryptedFogHint;
    static deserializeBinaryFromReader(message: EncryptedFogHint, reader: jspb.BinaryReader): EncryptedFogHint;
}

export namespace EncryptedFogHint {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class TxOut extends jspb.Message { 

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): Amount | undefined;
    setAmount(value?: Amount): TxOut;


    hasTargetKey(): boolean;
    clearTargetKey(): void;
    getTargetKey(): CompressedRistretto | undefined;
    setTargetKey(value?: CompressedRistretto): TxOut;


    hasPublicKey(): boolean;
    clearPublicKey(): void;
    getPublicKey(): CompressedRistretto | undefined;
    setPublicKey(value?: CompressedRistretto): TxOut;


    hasEFogHint(): boolean;
    clearEFogHint(): void;
    getEFogHint(): EncryptedFogHint | undefined;
    setEFogHint(value?: EncryptedFogHint): TxOut;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxOut.AsObject;
    static toObject(includeInstance: boolean, msg: TxOut): TxOut.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxOut, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxOut;
    static deserializeBinaryFromReader(message: TxOut, reader: jspb.BinaryReader): TxOut;
}

export namespace TxOut {
    export type AsObject = {
        amount?: Amount.AsObject,
        targetKey?: CompressedRistretto.AsObject,
        publicKey?: CompressedRistretto.AsObject,
        eFogHint?: EncryptedFogHint.AsObject,
    }
}

export class TxIn extends jspb.Message { 
    clearRingList(): void;
    getRingList(): Array<TxOut>;
    setRingList(value: Array<TxOut>): TxIn;
    addRing(value?: TxOut, index?: number): TxOut;

    clearProofsList(): void;
    getProofsList(): Array<TxOutMembershipProof>;
    setProofsList(value: Array<TxOutMembershipProof>): TxIn;
    addProofs(value?: TxOutMembershipProof, index?: number): TxOutMembershipProof;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxIn.AsObject;
    static toObject(includeInstance: boolean, msg: TxIn): TxIn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxIn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxIn;
    static deserializeBinaryFromReader(message: TxIn, reader: jspb.BinaryReader): TxIn;
}

export namespace TxIn {
    export type AsObject = {
        ringList: Array<TxOut.AsObject>,
        proofsList: Array<TxOutMembershipProof.AsObject>,
    }
}

export class TxPrefix extends jspb.Message { 
    clearInputsList(): void;
    getInputsList(): Array<TxIn>;
    setInputsList(value: Array<TxIn>): TxPrefix;
    addInputs(value?: TxIn, index?: number): TxIn;

    clearOutputsList(): void;
    getOutputsList(): Array<TxOut>;
    setOutputsList(value: Array<TxOut>): TxPrefix;
    addOutputs(value?: TxOut, index?: number): TxOut;

    getFee(): string;
    setFee(value: string): TxPrefix;

    getTombstoneBlock(): string;
    setTombstoneBlock(value: string): TxPrefix;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxPrefix.AsObject;
    static toObject(includeInstance: boolean, msg: TxPrefix): TxPrefix.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxPrefix, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxPrefix;
    static deserializeBinaryFromReader(message: TxPrefix, reader: jspb.BinaryReader): TxPrefix;
}

export namespace TxPrefix {
    export type AsObject = {
        inputsList: Array<TxIn.AsObject>,
        outputsList: Array<TxOut.AsObject>,
        fee: string,
        tombstoneBlock: string,
    }
}

export class RingMLSAG extends jspb.Message { 

    hasCZero(): boolean;
    clearCZero(): void;
    getCZero(): CurveScalar | undefined;
    setCZero(value?: CurveScalar): RingMLSAG;

    clearResponsesList(): void;
    getResponsesList(): Array<CurveScalar>;
    setResponsesList(value: Array<CurveScalar>): RingMLSAG;
    addResponses(value?: CurveScalar, index?: number): CurveScalar;


    hasKeyImage(): boolean;
    clearKeyImage(): void;
    getKeyImage(): KeyImage | undefined;
    setKeyImage(value?: KeyImage): RingMLSAG;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RingMLSAG.AsObject;
    static toObject(includeInstance: boolean, msg: RingMLSAG): RingMLSAG.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RingMLSAG, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RingMLSAG;
    static deserializeBinaryFromReader(message: RingMLSAG, reader: jspb.BinaryReader): RingMLSAG;
}

export namespace RingMLSAG {
    export type AsObject = {
        cZero?: CurveScalar.AsObject,
        responsesList: Array<CurveScalar.AsObject>,
        keyImage?: KeyImage.AsObject,
    }
}

export class SignatureRctBulletproofs extends jspb.Message { 
    clearRingSignaturesList(): void;
    getRingSignaturesList(): Array<RingMLSAG>;
    setRingSignaturesList(value: Array<RingMLSAG>): SignatureRctBulletproofs;
    addRingSignatures(value?: RingMLSAG, index?: number): RingMLSAG;

    clearPseudoOutputCommitmentsList(): void;
    getPseudoOutputCommitmentsList(): Array<CompressedRistretto>;
    setPseudoOutputCommitmentsList(value: Array<CompressedRistretto>): SignatureRctBulletproofs;
    addPseudoOutputCommitments(value?: CompressedRistretto, index?: number): CompressedRistretto;

    getRangeProofs(): Uint8Array | string;
    getRangeProofs_asU8(): Uint8Array;
    getRangeProofs_asB64(): string;
    setRangeProofs(value: Uint8Array | string): SignatureRctBulletproofs;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignatureRctBulletproofs.AsObject;
    static toObject(includeInstance: boolean, msg: SignatureRctBulletproofs): SignatureRctBulletproofs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignatureRctBulletproofs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignatureRctBulletproofs;
    static deserializeBinaryFromReader(message: SignatureRctBulletproofs, reader: jspb.BinaryReader): SignatureRctBulletproofs;
}

export namespace SignatureRctBulletproofs {
    export type AsObject = {
        ringSignaturesList: Array<RingMLSAG.AsObject>,
        pseudoOutputCommitmentsList: Array<CompressedRistretto.AsObject>,
        rangeProofs: Uint8Array | string,
    }
}

export class Tx extends jspb.Message { 

    hasPrefix(): boolean;
    clearPrefix(): void;
    getPrefix(): TxPrefix | undefined;
    setPrefix(value?: TxPrefix): Tx;


    hasSignature(): boolean;
    clearSignature(): void;
    getSignature(): SignatureRctBulletproofs | undefined;
    setSignature(value?: SignatureRctBulletproofs): Tx;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tx.AsObject;
    static toObject(includeInstance: boolean, msg: Tx): Tx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Tx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Tx;
    static deserializeBinaryFromReader(message: Tx, reader: jspb.BinaryReader): Tx;
}

export namespace Tx {
    export type AsObject = {
        prefix?: TxPrefix.AsObject,
        signature?: SignatureRctBulletproofs.AsObject,
    }
}

export class TxHash extends jspb.Message { 
    getHash(): Uint8Array | string;
    getHash_asU8(): Uint8Array;
    getHash_asB64(): string;
    setHash(value: Uint8Array | string): TxHash;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxHash.AsObject;
    static toObject(includeInstance: boolean, msg: TxHash): TxHash.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxHash, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxHash;
    static deserializeBinaryFromReader(message: TxHash, reader: jspb.BinaryReader): TxHash;
}

export namespace TxHash {
    export type AsObject = {
        hash: Uint8Array | string,
    }
}

export class Receipt extends jspb.Message { 

    hasPublicKey(): boolean;
    clearPublicKey(): void;
    getPublicKey(): CompressedRistretto | undefined;
    setPublicKey(value?: CompressedRistretto): Receipt;


    hasConfirmation(): boolean;
    clearConfirmation(): void;
    getConfirmation(): TxOutConfirmationNumber | undefined;
    setConfirmation(value?: TxOutConfirmationNumber): Receipt;

    getTombstoneBlock(): string;
    setTombstoneBlock(value: string): Receipt;


    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): Amount | undefined;
    setAmount(value?: Amount): Receipt;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Receipt.AsObject;
    static toObject(includeInstance: boolean, msg: Receipt): Receipt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Receipt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Receipt;
    static deserializeBinaryFromReader(message: Receipt, reader: jspb.BinaryReader): Receipt;
}

export namespace Receipt {
    export type AsObject = {
        publicKey?: CompressedRistretto.AsObject,
        confirmation?: TxOutConfirmationNumber.AsObject,
        tombstoneBlock: string,
        amount?: Amount.AsObject,
    }
}
