import bigDecimal from 'js-big-decimal';

import { Token, TOKENS } from '../constants/tokens';

// This function assumes basic US style decimal places.
// We'll need to revisit for different formats
// Right now, we are aggressively assuming the number format is US local.
// We should have a universal solution to this problem
// Likely a component similiar to MOBNumberFormat with the ability to get the
// picoMob string (StringUInt64) value as a ref
export const convertMobStringToPicoMobString = (mobString: string): string => {
  const picoMobBigDec = bigDecimal.multiply(mobString, '1000000000000');
  const picoMobBigInt = BigInt(picoMobBigDec);
  return picoMobBigInt.toString();
};

export const convertEUSDStringToMicroEUSDString = (eUSDString: string): string => {
  const microMobBigDec = bigDecimal.multiply(eUSDString, '1000000');
  const microMobBigInt = BigInt(microMobBigDec);
  return microMobBigInt.toString();
};

export const convertTokenValueToDisplayValue = (
  tokenValue: string | number,
  token: Token
): number => Number(tokenValue) / token.precision;

// TODO, handle value of BigInt
export const convertPicoMobStringToMob = (picoMobString: string): string => {
  const precision = Math.log10(TOKENS.MOB.precision);
  if (picoMobString.length <= precision) {
    return `0.${'0'.repeat(precision - picoMobString.length)}${picoMobString}`;
  }

  return [
    picoMobString.slice(0, picoMobString.length - precision),
    '.',
    picoMobString.slice(picoMobString.length - precision),
  ].join('');
};

export const convertMicroEUSDToStringEUSD = (microEUSDString: string): string => {
  const precision = Math.log10(TOKENS.EUSD.precision);
  if (microEUSDString.length <= precision) {
    return `0.${'0'.repeat(precision - microEUSDString.length)}${microEUSDString}`;
  }

  return [
    microEUSDString.slice(0, microEUSDString.length - precision),
    '.',
    microEUSDString.slice(microEUSDString.length - precision),
  ].join('');
};

export const commafy = (num: string): string => {
  const str = num.split('.');
  if (str[0].length >= 4) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }
  return str.join('.');
};
