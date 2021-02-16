/*
    Validates if a string is either empty or completely formed by digits
*/
const isValidPin = (st: string): boolean => st.split('').every((x) => x >= '0' && x <= '9');

export default isValidPin;
