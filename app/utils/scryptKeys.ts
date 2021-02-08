import crypto from 'crypto';

const BLOCK_SIZE = 8;
const KEY_LENGTH = 32;
const MEMORY_COST = 2 ** 16; // TODO check on these
const MEMORY_LIMIT = 2 ** 52;
const PARALLELIZATION = 8;
const SALT_LENGTH = 32;

interface Results {
  publicSaltString: string;
  secretKeyString: string;
}

const scryptKeys = async (
  password: string,
  previousSalt?: string
): Promise<Results> => {
  const options = {
    N: MEMORY_COST,
    maxmem: MEMORY_LIMIT,
    p: PARALLELIZATION,
    r: BLOCK_SIZE,
  };
  const publicSaltBuffer = previousSalt
    ? Buffer.from(previousSalt, 'hex')
    : await crypto.randomBytes(SALT_LENGTH);

  const secretKeyBuffer = crypto.scryptSync(
    password,
    publicSaltBuffer,
    KEY_LENGTH,
    options
  );

  const publicSaltString = publicSaltBuffer.toString('hex');
  const secretKeyString = secretKeyBuffer.toString('hex');
  return {
    publicSaltString,
    secretKeyString,
  };
};

export default scryptKeys;
