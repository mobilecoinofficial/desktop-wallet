import { isStringNumber } from './isStringNumber';
import { PIN_MIN_SIZE } from '../constants/codes';

/*
    Validates if a string is completely formed by digits
    Also requires a length of PIN_MIN_SIZE
*/
export const isValidPin = (st: string): boolean => st.length >= PIN_MIN_SIZE && isStringNumber(st);
