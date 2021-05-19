import * as fullServiceApi from '../fullService/api';
import type { StringHex } from '../types/SpecialStrings';

//   assignAddressForAccount: (x: StringHex) => Promise<unknown>;

const assignAddressForAccount = async (accountId: StringHex): Promise<unknown> =>
  fullServiceApi.assignAddressForAccount({ accountId });

export default assignAddressForAccount;
export { assignAddressForAccount };
