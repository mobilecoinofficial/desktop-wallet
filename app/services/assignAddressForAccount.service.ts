import * as fullServiceApi from '../fullService/api';
import type { AssignAddressForAccountResult } from '../fullService/api/assignAddressForAccount';
import type { StringHex } from '../types/SpecialStrings';

export const assignAddressForAccount = async (
  accountId: StringHex
): Promise<AssignAddressForAccountResult> => fullServiceApi.assignAddressForAccount({ accountId });

export type AssignAddressForAccountService = typeof assignAddressForAccount;
