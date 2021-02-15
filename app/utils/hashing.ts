import crypto from 'crypto';

/*
    If given a string ("st") makeHash returns a hash of it;
    if the string is missing, an empty hash is returned instead.
*/
const makeHash = (st: string): string => {
  if (st) {
    const hash = crypto.createHash('sha256');
    hash.update(st); // TO DO: add a salt
    return hash.digest('hex');
  }
  return '';
};

/*
    checkHash returns true if (1) the provided "hash" is empty, or if
    (2) the hashed string "st" is not empty, and matches the provided string "hash"
*/
const checkHash = (st: string, hash: string): boolean => !hash || (!!st && makeHash(st) === hash);

export { makeHash, checkHash };
