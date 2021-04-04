import { PIN_MIN_SIZE } from '../constants/codes';
import isStringNumber from './isStringNumber';

/*
    Validates if a string is completely formed by digits
    Also requires a length of PIN_MIN_SIZE
*/
const isValidPin = (st: string): boolean => st.length >= PIN_MIN_SIZE && isStringNumber(st);

export default isValidPin;
