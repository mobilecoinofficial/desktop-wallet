import { PIN_SIZE } from '../constants/codes';

/*
    Validates if a string is completely formed by digits
    Also requires a length of PIN_SIZE
*/
const isValidPin = (st: string): boolean =>
  st.length === PIN_SIZE && st.split('').every((x) => x >= '0' && x <= '9');

export default isValidPin;
