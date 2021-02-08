import type FullServiceAccount from '../../types/FullServiceAccount';
import axiosFullService from '../axiosFullService';

const IMPORT_ACCOUNT_METHOD = 'import_account';

type ImportAccountParams = {
  entropy: string,
  firstBlock?: string,
  name?: string,
};

type ImportAccountResult = {
  account: FullServiceAccount;
};

const importAccount = async ({
  entropy,
  firstBlock = '0',
  name,
}: ImportAccountParams): Promise<ImportAccountResult> => {
  const { result, error } = await axiosFullService(IMPORT_ACCOUNT_METHOD, {
    entropy,
    first_block: firstBlock,
    name,
  });

  if (error) {
    // TODO - I'll write up a better error handler
    throw new Error(error);
  } else {
    return result;
  }
};

export default importAccount;
