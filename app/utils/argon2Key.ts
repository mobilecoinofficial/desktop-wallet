import crypto from 'crypto';

import { argon2id, hash } from 'argon2';

import * as localStore from './LocalStore';

export const KEY_LENGTH = 32;
export const SALT_LENGTH = 16;
const INTERATIONS = 40;
const MEMORY_COST = 256 * 1024;
const PARALLELISM = 4;

const cryptoBufferToHex = (bytes: Buffer): string =>
  crypto.createHash('sha256').update(bytes).digest('hex');

const ensureSalt = (): string => {
  let salt = localStore.getSalt();
  if (typeof salt !== 'string') {
    const saltBuffer = crypto.randomBytes(SALT_LENGTH);
    salt = cryptoBufferToHex(saltBuffer);
    localStore.setSalt(salt);
  }

  return salt;
};

const argon2Key = async (passphrase: string): Promise<{ secretKey: string }> => {
  const saltHex = ensureSalt();

  const salt = Buffer.from(saltHex, 'hex');
  const secretKeyBuffer = await hash(passphrase, {
    hashLength: KEY_LENGTH,
    memoryCost: MEMORY_COST,
    parallelism: PARALLELISM,
    raw: true,
    salt,
    timeCost: INTERATIONS,
    type: argon2id,
  });
  const secretKey = cryptoBufferToHex(secretKeyBuffer);
  return {
    secretKey,
  };
};

export default argon2Key;
