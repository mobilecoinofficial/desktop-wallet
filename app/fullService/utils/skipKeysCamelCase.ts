import camelCaseKeys from 'camelcase-keys';

const STOP_PATHS = [
  'result.account_map',
  'result.address_map',
  'result.transaction_log_map',
  'result.txo_map',
];

// This function simply skips the top level keys and applies camelCase to the children.
const skipTopKeyCamelCase = (
  obj: {},
): {} => {
  const result: {[key: string]: any} = {};
  Object.entries(obj).forEach(([k, v]: [string, any]) => {
    result[k] = camelCaseKeys(v, { deep: true });
  });
  return result;
};

// CBB: This is a hack that solves an annoying problem. The normalized IDs change case with
// camelCaseKeys. So, this hack manually skip the mapping. There's better ways to do this. Where we
// give it the problematic path and it skips accordingly without the manual reassign.
const skipKeysCamelCase = (
  response: any,
): {} => {
  // If there's an error, early exit.
  if (response.error) return response;

  // Apply camelCase but stop at all problematic keys.
  const camelCaseResponse = camelCaseKeys(response, { deep: true, stopPaths: STOP_PATHS });

  // Check if the problematic keys exists. If so, camelcase its value.
  if (camelCaseResponse?.result?.accountMap) {
    camelCaseResponse.result.accountMap = skipTopKeyCamelCase(camelCaseResponse.result.accountMap);
  } else if (camelCaseResponse?.result?.addressMap) {
    camelCaseResponse.result.addressMap = skipTopKeyCamelCase(camelCaseResponse.result.addressMap);
  } else if (camelCaseResponse?.result?.transactionLogMap) {
    camelCaseResponse.result.transactionLogMap = skipTopKeyCamelCase(
      camelCaseResponse.result.transactionLogMap,
    );
  } else if (camelCaseResponse?.result?.txoMap) {
    camelCaseResponse.result.txoMap = skipTopKeyCamelCase(camelCaseResponse.result.txoMap);
  }

  return camelCaseResponse;
};

export default skipKeysCamelCase;
