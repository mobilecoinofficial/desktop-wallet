export const PICO_MOB_PRECISION = 12;

export const ensureMobStringPrecision = (mobString: string): string => {
  const num = Number(mobString);
  if (Number.isNaN(num)) {
    throw new Error('mobString is NaN');
  }
  return num.toFixed(PICO_MOB_PRECISION);
};

// This function assumes basic US style decimal places.
// We'll need to revisit for differnet formats
// Right now, we are aggressively assuming the number format is US local.
// We should have a universal solution to this problem
// Likely a component similiar to MOBNumberFormat with the ability to get the
// picoMob string (StringUInt64) value as a ref
export const convertMobStringToPicoMobString = (mobString: string): string =>
  ensureMobStringPrecision(mobString).replace('.', '');

// TODO, handle value of BigInt
export const convertPicoMobStringToMob = (picoMobString: string): string => {
  if (picoMobString.length <= 12) {
    return `0.${'0'.repeat(12 - picoMobString.length)}${picoMobString}`;
  }

  return [
    picoMobString.slice(0, picoMobString.length - 12),
    '.',
    picoMobString.slice(picoMobString.length - 12),
  ].join('');
};

export const commafy = (num: string): string => {
  const str = num.split('.');
  if (str[0].length >= 4) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }
  return str.join('.');
};
