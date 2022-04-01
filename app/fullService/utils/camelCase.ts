/* eslint-disable */

const convertToString = (input: unknown): string => {
  if (input) {
    if (typeof input === 'string') {
      return input;
    }

    return String(input);
  }
  return '';
};

// find words in an input, treating an alphanumeric id as one word.
const findWords = (input: unknown): RegExpMatchArray | null => {
  const stringInput = convertToString(input);

  const regex =
    /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF0-9]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;

  return stringInput.match(regex);
};

// convert a regex-generated array of matched words into a camelCased string
const regExpMatchArrayToCamelCase = (regExpMatchArray: RegExpMatchArray | null): string => {
  if (!regExpMatchArray) {
    return '';
  }
  let camelCasedString = '';

  for (let i = 0, { length } = regExpMatchArray; i < length; i++) {
    let tempString = regExpMatchArray[i].toLowerCase();

    if (i !== 0) {
      tempString = tempString.substring(0, 1).toUpperCase() + tempString.substring(1);
    }

    camelCasedString += tempString;
  }

  return camelCasedString;
};

export const camelCaseString = (input: unknown): string => {
  const words = findWords(input);
  return regExpMatchArrayToCamelCase(words);
};

// use JSON.parse's reviver functionality to modify the keys of an object
export const camelCaseObjectKeys = (obj: any) =>
  JSON.parse(JSON.stringify(obj), function(k, v) {
    const camelCasedKey = camelCaseString(k);
    if (camelCasedKey !== k) {
      this[camelCasedKey] = v;
      return;
    }
    return v;
  });
